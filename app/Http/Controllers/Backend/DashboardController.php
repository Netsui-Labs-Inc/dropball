<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Validation\ValidationException;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    public function index()
    {

        /** @var User $user */
        $user = auth()->user();
        if ($user->hasRole('Administrator')) {
            return $this->superAdmin();
        } elseif ($user->hasRole('Processor')) {
            return $this->processor();
        } elseif ($user->hasRole('Master Agent')) {
            return $this->masterAgent();
        } elseif ($user->hasRole('Bet Admin')) {
            return $this->betAdmin();
        } elseif ($user->hasRole('Dealer Admin')) {
            return $this->dealerAdmin();
        } elseif ($user->hasRole('Virtual Hub')) {
            return $this->virtualHub();
        } elseif ($user->hasRole('Operator')) {
            return $this->operator();
        }
    }

    public function processor()
    {
        /** @var User $user */
        $user = auth()->user();
        return view('backend.dashboard.processor')
            ->with('user', $user)
            ->with('hubs', Hub::count());
    }

    public function masterAgent()
    {
        /** @var User $user */
        $user = auth()->user();
        $this->logoutUser(!$user->hub_id);
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
    public function dealerAdmin()
    {
        /** @var User $user */
        $user = auth()->user();
        $bettingEvent = BettingEvent::today($user->timezone)->where('dealer_admin_id', $user->id)->first() ?? null;
        return view('backend.dashboard.dealer-admin')
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
            ->with('company', $company->getWallet('income-wallet'))
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
        $this->logoutUser(!$hub);
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

    private function logoutUser($isNeedTologout)
    {
        if ($isNeedTologout) {
            auth()->logout();
            throw ValidationException::withMessages(
                ['email' => "Something is wrong with your account. Please contact the account administrator"]
            );
        }
    }
}
