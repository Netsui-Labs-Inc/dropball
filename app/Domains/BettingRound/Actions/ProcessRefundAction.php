<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\ProcessBetRefundJob;

class ProcessRefundAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        if (! $bettingRound->bets()->exists()) {
            return null;
        }

        logger("BettingRound#{$bettingRound->id} result is Cancelled All bets will be refunded");

        $bettingRound->bets()->whereNull('refund_processed_at')->chunk(300, function ($bets) {
            foreach ($bets as $bet) {
                ProcessBetRefundJob::dispatchSync($bet);
            }
        });

        return null;
    }
}
