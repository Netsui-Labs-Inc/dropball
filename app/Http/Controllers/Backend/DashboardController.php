<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Http\Controllers\Controller;
use App\Models\Company;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {

        /** @var User $user */
        $user = auth()->user();
        if ($user->hasRole('Master Agent')) {
            return $this->masterAgent();
        } elseif ($user->hasRole('Bet Admin')) {
            return $this->betAdmin();
        } else {
            return $this->superAdmin();
        }
    }

    public function masterAgent()
    {
        /** @var User $user */
        $user = auth()->user();
        $bettingEvent = BettingEvent::today($user->timezone)->first() ?? null;

        return view('backend.dashboard.master-agent')
            ->with('user', $user)
            ->with('transactions', $user->transactions);
    }

    public function betAdmin()
    {
        /** @var User $user */
        $user = auth()->user();
        $bettingEvent = BettingEvent::today($user->timezone)->where('bet_admin_id', $user->id)->first() ?? null;

        return view('backend.dashboard.bet-admin')
            ->with('user', $user)
            ->with('bettingEvent', $bettingEvent);
    }

    public function superAdmin()
    {
        $user = auth()->user();
        $company = Company::first();
        $players = User::doesntHave('roles')->onlyActive()->count();
        $events = BettingEvent::count();
        $bettingRound = BettingRound::count();
        $bettingEvent = BettingEvent::today($user->timezone)->first() ?? null;

        return view('backend.dashboard.super-admin')
            ->with('company', $company)
            ->with('players', $players)
            ->with('events', $events)
            ->with('bettingRound', $bettingRound)
            ->with('bettingEvent', $bettingEvent)
            ->with('transactions', $company->transactions);


    }
}
