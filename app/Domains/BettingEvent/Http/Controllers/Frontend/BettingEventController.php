<?php

namespace App\Domains\BettingEvent\Http\Controllers\Frontend;

use App\Domains\BettingEvent\Models\BettingEvent;
use App\Http\Controllers\Controller;

class BettingEventController extends Controller
{
    public function index()
    {
        return view('frontend.betting-event.index');
    }

    public function eventToday()
    {
        $user = auth()->user();
        if (! $user) {
            return view('frontend.index');
        }

        $bettingEvent = BettingEvent::today($user->timezone)->first();

        if (! $bettingEvent) {
            return redirect()->route('frontend.user.dashboard');
        }
        $bettingRound = $bettingEvent->upcomingBettingRound()->first();

        return view('frontend.pages.betting-event.show')
            ->with('bettingEvent', $bettingEvent)
            ->with('play', $bettingRound);
    }

    public function show(BettingEvent $bettingEvent)
    {
        $bettingRound = $bettingEvent->upcomingBettingRound()->first();

        return view('frontend.pages.betting-event.show')
            ->with('bettingEvent', $bettingEvent)
            ->with('bettingRound', $bettingRound);
    }
}
