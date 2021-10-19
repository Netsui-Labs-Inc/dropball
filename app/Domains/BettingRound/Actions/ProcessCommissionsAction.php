<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;

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
