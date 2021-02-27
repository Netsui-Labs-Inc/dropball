<?php

namespace App\Jobs;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
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

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Developer
        $bettingRound = $this->bettingRound;

        // Operator
        $remainingMoney = $bettingRound->balanceFloat;
        $operator = $this->getOperator();

        logger("BettingRound#{$bettingRound->id} Operator current balance is : {$operator->balanceFloat}");

        logger("BettingRound#{$bettingRound->id} Transferring the remaining money to Operator : $remainingMoney");

        $bettingRound->forceTransferFloat($operator, $remainingMoney,  ['betting_round_id' => $bettingRound->id]);
        logger("BettingRound#{$bettingRound->id} Operator new balance is : {$operator->balanceFloat}");

        $bettingRound->update([
            'meta' => [
                'operator_commission' => $remainingMoney,
                'operator_balance' => $operator->balanceFloat,
            ],
        ]);
    }
}
