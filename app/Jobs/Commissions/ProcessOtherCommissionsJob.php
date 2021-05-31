<?php

namespace App\Jobs\Commissions;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessOtherCommissionsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
    }

    public function middleware()
    {
        $operator = $this->getOperator();

        return [
            new WithoutOverlapping("operator-".$operator->id, 3),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "operator-betting-round-".$this->bettingRound->id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //TODO:: Remaning money not correct
        $bettingRound = $this->bettingRound;

        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Processing Other Commissions");
        // Operator
        /** @var Company $operator */
        $operator = $this->getOperator();
        $operatorWallet = $this->getWallet($operator, 'Income Wallet');

        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Operator current balance is : {$operator->balanceFloat}");

        $remainingMoney = $bettingRound->bets()->where('commission_processed', true)->sum('other_commissions');

        dispatch(function() use ($operatorWallet, $remainingMoney, $bettingRound) {
            $operatorWallet->depositFloat($remainingMoney,  ['betting_round_id' => $bettingRound->id]);
            logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Operator new balance is : {$operatorWallet->balanceFloat}");
        })->onQueue('other-commissions');

        $commissions = $operator->commissions()->whereHas('bet', function ($query) use ($bettingRound) {
            $query->where('betting_round_id', $bettingRound->id);
        })->sum('amount');

        $operatorCommission = $commissions + ($remainingMoney / 100);

        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Operator Commission : $operatorCommission");

        $bettingRound->update([
            'meta' => [
                'operator_commission' => $operatorCommission,
                'operator_balance' => $operator->balanceFloat,
            ],
        ]);
    }
}
