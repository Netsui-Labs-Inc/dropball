<?php

namespace App\Domains\BettingRound\Http\Controllers\Frontend;

use App\Domains\BettingRound\Models\BettingRound;
use App\Http\Controllers\Controller;

class BettingRoundBetController extends Controller
{
    public function betSummary()
    {
        $bettingEvent = \App\Domains\BettingEvent\Models\BettingEvent::today()->first();
        if (! $bettingEvent) {
            return "No Betting Event Today";
        }
        $activeBettingRound = $bettingEvent->activeBettingRound()->first();

        if (! $activeBettingRound) {
            return "No Active Round";
        }
        $betSummary = [];
        $betOptions = \App\Domains\Bet\Models\BetOption::all();
        foreach ($betOptions as $betOption) {
            $betSummary[] = [
                'bet' => strtoupper($betOption->name),
                'color' => strtoupper($betOption->color),
                'total' => $activeBettingRound->bets()->betType($betOption->id)->sum('bet_amount'),
            ];
        }
        usort($betSummary, function ($item1, $item2) {
            return $item1['total'] <=> $item2['total'];
        });

        return view('frontend.pages.betting.summary')
            ->with('event', $bettingEvent)
            ->with('round', $activeBettingRound)
            ->with('bet', $betSummary[0]);
    }

    public function lowestBet()
    {
        $bettingEvent = \App\Domains\BettingEvent\Models\BettingEvent::today()->first();
        if (! $bettingEvent) {
            return "No Betting Event Today";
        }
        $activeBettingRound = $bettingEvent->activeBettingRound()->first();

        if (! $activeBettingRound) {
            return "No Active Round";
        }
        $betSummary = [];
        $betOptions = \App\Domains\Bet\Models\BetOption::all();
        foreach ($betOptions as $betOption) {
            $betSummary[] = [
                'bet' => strtoupper($betOption->name),
                'color' => strtoupper($betOption->color),
                'total' => $activeBettingRound->bets()->betType($betOption->id)->sum('bet_amount'),
            ];
        }
        usort($betSummary, function ($item1, $item2) {
            return $item1['total'] <=> $item2['total'];
        });

        return view('frontend.pages.betting.summary-simple')
            ->with('round', $activeBettingRound)
            ->with('bet', $betSummary[0]);
    }
}
