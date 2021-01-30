<?php

namespace App\Http\Controllers\Frontend;

use App\Domains\BettingEvent\Models\BettingEvent;
use App\Http\Controllers\Controller;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
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
            ->with('bettingRound', $bettingRound);

        return view('frontend.index')->with(compact('bettingEvent'));
    }
}
