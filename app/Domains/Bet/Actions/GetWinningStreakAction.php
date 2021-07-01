<?php

namespace App\Domains\Bet\Actions;

use App\Domains\Auth\Models\User;
use Carbon\Carbon;

class GetWinningStreakAction
{
    public function __invoke(User $user)
    {
        $bets = $user->bets()->latest()->whereDate('created_at', Carbon::now()->format('Y-m-d'))->get();
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
