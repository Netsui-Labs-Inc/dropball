<?php

namespace App\Jobs\Commissions;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessOtherCommissionsJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;
    public Company $operator;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
        $this->operator = $this->getOperator();
    }

    public function middleware()
    {

        return [
            (new WithoutOverlapping("operator-".$this->operator->id))->dontRelease(),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "operator-".$this->operator->id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $bettingRound = $this->bettingRound;
        $bettingRound->refresh();
        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Processing Other Commissions");

        /** @var Company $operator */
        $operator = $this->operator;

        $operatorWallet = $this->getWallet($operator, 'Income Wallet');
        $commissions = $bettingRound->pool_money * .10;
        $remainingMoney = $bettingRound->pool_money - $bettingRound->meta['winningPayout'] - $commissions;
        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Remaining Money: $remainingMoney, Winning Payouts: {$bettingRound->meta['winningPayout']}, Commission: $commissions ");

        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Operator current balance is : {$operatorWallet->balanceFloat}");
        $operatorWallet->depositFloat($remainingMoney,  ['betting_round_id' => $bettingRound->id]);
        logger("ProcessOtherCommissionsJob BettingRound#{$bettingRound->id} Operator new balance is : {$operatorWallet->balanceFloat}");

        activity('commissions')
            ->performedOn($operator)
            ->causedBy($bettingRound)
            ->withProperties([
                'bettingRound' => $bettingRound->id,
                'commission' => $remainingMoney,
                'payouts' => $bettingRound->payouts,
                'balance' => $operatorWallet->balanceFloat
            ])
            ->log("Operator #{$operator->id} received $remainingMoney from the remaining amount. New Balance is {$operatorWallet->balanceFloat}");
    }
}
