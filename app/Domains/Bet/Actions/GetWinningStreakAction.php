<?php

namespace App\Domains\Bet\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use Carbon\Carbon;

class GetWinningStreakAction
{
    public function __invoke(User $user, BettingEvent $bettingEvent)
    {
        $bets = $user->bets()->whereHas('bettingRound', function($query) use($bettingEvent) {
            $query->where('betting_event_id', $bettingEvent->id);
        })->whereNotNull('status')->where->get();

        $winningStreak = 0;

        foreach ($bets as $bet) {
            if($bet->status === 'win') { $winningStreak++; }
            else {
                return $winningStreak;
            }
        }

        return $winningStreak;
    }
}
