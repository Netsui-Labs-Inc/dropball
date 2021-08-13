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
                (new ProcessCommissionPerBetAction)($bet);
            }
        });
    }
}
