<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use App\Models\Company;
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
            (new WithoutOverlapping("this-company-".$this->operator->id))->dontRelease(),
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
        $commission = $bet->bet_amount * $rate;

        if(!$commission) {
            return $operatorWallet;
        }

        logger("ProcessOperatorCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Operator Current balance is {$operator->balanceFloat}");
        logger("ProcessOperatorCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Transferring amount of $commission to Operator");

//        TransferToWalletJob::dispatch($bet, $operatorWallet, $commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true])->onQueue('commissions');
        $operatorWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true]);
        $rate = $rate * 100;

        $this->createCommission($bet, $operator, 'operator', $commission, $rate,  []);

        activity('commissions')
            ->performedOn($operator)
            ->causedBy($bet)
            ->withProperties(['bet' => $bet, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'balance' => $operator->balanceFloat])
            ->log("Operator #{$operator->id} {$operator->name} received $rate%($commission) commission. New Balance is {$operator->balanceFloat}");

        return $operator;
    }

    public function hasSubAgent(User $player)
    {
        $masterAgent = $player->masterAgent;

        return $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent;
    }
}
