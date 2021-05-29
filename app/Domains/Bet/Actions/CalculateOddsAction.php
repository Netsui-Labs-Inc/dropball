<?php

namespace App\Domains\Bet\Actions;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;

class CalculateOddsAction
{
    public function __invoke(BettingRound $bettingRound, Bet $bet = null)
    {
        $percentage = env('BET_PERCENTAGE', 0.05);
        $pulaTotalBet = $bettingRound->totalBetType(Bet::PULA);
        $putiTotalBet = $bettingRound->totalBetType(Bet::PUTI);
        $potMoney = $pulaTotalBet + $putiTotalBet;
        $potMoney = $potMoney - ($potMoney * (float) $percentage);
        $putiPayout = 0;
        $pulaPayout = 0;
        if ($potMoney) {
            $pulaPayout = $pulaTotalBet ? $potMoney / $pulaTotalBet : 0;
            $putiPayout = $putiTotalBet ? $potMoney / $putiTotalBet : 0;
        }

        if ($bet && $bet->bet === Bet::PUTI) {
            $betPayout = floor($putiPayout) * $bet->bet_amount;
        } elseif ($bet && $bet->bet === Bet::PULA) {
            $betPayout = floor($pulaPayout) * $bet->bet_amount;
        } else {
            $betPayout = 0;
        }

        return [
            'puti' => floor($putiPayout * 100),
            'pula' => floor($pulaPayout * 100),
            'betPayout' => floor($betPayout),
        ];
    }
}
