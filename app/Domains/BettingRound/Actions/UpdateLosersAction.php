<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\BettingRound\Models\BettingRound;

class UpdateLosersAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', '!=', $bettingRound->result)->update([
            'status' => 'lose',
            'gain_loss' => \DB::raw('-1 * bets.bet_amount'),
        ]);
    }
}
