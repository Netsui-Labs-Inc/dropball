<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;
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
        if ($user->hasRole('Administrator')) {
            return $this->superAdmin();
        } elseif ($user->hasRole('Master Agent')) {
            return $this->masterAgent();
        } elseif ($user->hasRole('Bet Admin')) {
            return $this->betAdmin();
        } elseif ($user->hasRole('Virtual Hub')) {
            return $this->virtualHub();
        } elseif ($user->hasRole('Operator')) {
            return $this->operator();
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
        $players = User::role('Player')->onlyActive()->count();
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

    public function virtualHub()
    {
        $user = auth()->user();
        $hub = Hub::where('admin_id', $user->id)->first();
        if (! $hub) {
            auth()->logout();
            throw new GeneralException("Something is wrong with your account");
        }
        $masterAgents = User::role('Master Agent')
            ->where('hub_id', $hub->id)
            ->onlyActive()->count();

        return view('backend.dashboard.virtual-hub')
            ->with('masterAgents', $masterAgents)
            ->with('hub', $hub);
    }

    public function operator()
    {
        $operator = Company::firstOrCreate(['name' => 'Operator']);

        return view('backend.dashboard.operator')
            ->with('operator', $operator);
    }
}
