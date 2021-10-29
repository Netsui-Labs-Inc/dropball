<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;

class UpdateWinnersAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', $bettingRound->result)->update([
            'status' => 'win',
        ]);
    }
}
