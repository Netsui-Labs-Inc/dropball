<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Commissions\ProcessDeveloperCommissionJob;
use App\Jobs\Commissions\ProcessHubCommissionJob;
use App\Jobs\Commissions\ProcessMasterAgentCommissionJob;
use App\Jobs\Commissions\ProcessOperatorCommissionJob;
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;

class ProcessCommissionsAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        logger("BettingRound#{$bettingRound->id} ".$bettingRound->bets()->count(). " bets to process");
        $bettingRound->bets()->chunk(500, function($bets) {
            foreach ($bets as $bet) {
                Bus::batch([
                    new ProcessMasterAgentCommissionJob($bet),
                    new ProcessMasterAgentCommissionJob($bet, true),
                    new ProcessDeveloperCommissionJob($bet),
                    new ProcessHubCommissionJob($bet),
                    new ProcessOperatorCommissionJob($bet),
                ])->then(function (Batch $batch) use ($bet) {
                    logger("BettingRoundResultListener.processCommissions :: Bet#$bet->id Successful");
                })->catch(function (Batch $batch, \Throwable $e) use ($bet) {
                    \Sentry::captureEvent($e);
                    logger("BettingRoundResultListener.processCommissions :: Bet#$bet->id Error - ".$e->getMessage());
                })->name('BetId#'.$bet->id)->onQueue('commissions')->dispatch();
            }
        });
    }
}
