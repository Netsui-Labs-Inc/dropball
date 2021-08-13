<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\ProcessPlayerWinningsJob;

class ProcessWinnersAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        $bettingRound->bets()->whereNull('winnings_processed_at')->where('bet', $bettingRound->result)->chunk(300, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRoundResultListener.processWinners :: BettingRound#{$bettingRound->id} Processing Winners Payout Batch #$batch");
            foreach ($bets as $bet) {
                ProcessPlayerWinningsJob::dispatchSync($bet);
            }
        });
    }
}
