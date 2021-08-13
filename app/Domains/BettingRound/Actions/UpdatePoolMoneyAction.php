<?php


namespace App\Domains\BettingRound\Actions;


use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;

class UpdatePoolMoneyAction
{
    /**
     * @param BettingRound $bettingRound
     * @return null
     */
    public function __invoke(BettingRound $bettingRound)
    {
        $poolMoney = $bettingRound->bets()->sum('bet_amount');
        $payouts = (new CalculateOddsAction)($bettingRound);
        $totalBets = 0;
        if($bettingRound->result === Bet::PULA) {
            $totalBets = $bettingRound->totalBetType(Bet::PULA) ;
            $winningPayout = ($totalBets * $payouts['pula']) / 100;
        } elseif($bettingRound->result === Bet::PUTI) {
            $totalBets = $bettingRound->totalBetType(Bet::PUTI) ;
            $winningPayout = ($totalBets * $payouts['puti']) / 100;
        } elseif($bettingRound->result === Bet::JACKPOT) {
            $totalBets = $bettingRound->totalBetType(Bet::JACKPOT) ;
            $winningPayout = $totalBets * 5;
        } else {
            $winningPayout = 0;
        }
        $payouts['betPayout'] = $winningPayout;

        $bettingRound->update([
            'pool_money' => $poolMoney,
            'meta' => ['winningPayout' => floor($winningPayout), 'totalBets' => $totalBets],
            'payouts' => $payouts]);

        logger("updatePoolMoney#$bettingRound->id Winning Payout = $winningPayout");
        logger("updatePoolMoney#$bettingRound->id Pool Money = $poolMoney");
    }
}
