<?php

namespace App\Http\Controllers\Frontend\User;

use App\Domains\BettingEvent\Models\BettingEvent;
use App\Http\Controllers\Controller;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
     */
    public function index()
    {
        $referer = request()->headers->get('referer');
        if (auth()->user()->isAdmin() && $referer == route('frontend.auth.login')) {
            return redirect()->route('admin.dashboard');
        }

        $user = auth()->user();
        $bettingEvent = BettingEvent::today($user->timezone)->first();
        return view('frontend.user.dashboard')
            ->with('bets', $user->bets()->take(5)->get())
            ->with('transactions', $user->transactions()->latest()->whereNull('meta')->take(5)->get())
            ->with('bettingEvent', $bettingEvent);
    }
}
