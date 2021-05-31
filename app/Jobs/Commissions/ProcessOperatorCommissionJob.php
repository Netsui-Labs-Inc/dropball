<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use App\Models\Company;
use Brick\Math\BigDecimal;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use DB;
use Illuminate\Support\Facades\Bus;

class ProcessOperatorCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;
    public Company $operator;

    /**
     * ProcessDeveloperCommissionJob constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
        $this->operator = $this->getOperator();
    }

    public function middleware()
    {
        return [
            (new WithoutOverlapping("company-".$this->operator->id))->dontRelease(),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "company-".$this->operator->id;
    }

    public function handle()
    {
        $operator = $this->operator;
        $operatorWallet = $this->getWallet($operator, 'Income Wallet');

        $bet = $this->bet;

        $rate = $this->hasSubAgent($bet->user) ? .0675 : .07;
        $bettingRound = $bet->bettingRound;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        if(!$commission) {
            return $operatorWallet;
        }

        logger("ProcessOperatorCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Operator Current balance is {$operatorWallet->balanceFloat}");
        logger("ProcessOperatorCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Transferring amount of {$operatorWallet->balanceFloat} to Operator");
        try {
            DB::beginTransaction();
            $operatorWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true]);
            $rate = BigDecimal::of($rate * 100)->toFloat();

            $this->createCommission($bet, $operator, 'operator', $commission, $rate,  []);

            activity('commissions')
                ->performedOn($operator)
                ->causedBy($bet)
                ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'balance' => $operatorWallet->balanceFloat])
                ->log("Operator #{$operator->id} {$operator->name} received $rate%($commission) commission. New Balance is {$operatorWallet->balanceFloat}");

            DB::commit();
        } catch (\Exception $e) {
            $this->fail($e);
            DB::rollBack();
        }
//

        return $operator;
    }

    public function hasSubAgent(User $player)
    {
        $masterAgent = $player->masterAgent;

        return $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent;
    }
}
