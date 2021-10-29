<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use App\Models\CommissionRate;
use App\Models\Company;
use App\Models\OverallCommissionRate;
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
        $playersCount = User::role('Player')
                        ->where('referred_by', $user->id)
                        ->onlyActive()
                        ->count();
        $this->logoutUser(!$user->hub_id);
        $bettingEvent = BettingEvent::today($user->timezone)->first() ?? null;

        $agents = User::role('Master Agent')
            ->where('referred_by', $user->id)
            ->whereNotNull('referred_by')
            ->onlyActive()->count();
        $isAgent = false;
        $commissionRateConversion = new CommissionRatesConversion($user);
        $agentCommissionRate = $commissionRateConversion->convertAgent()->agentCommissionRate();
        if($user->referred_by)
        {
            $isAgent = true;
            $agentCommissionRate = $commissionRateConversion->convertAgent()->agentCommissionRate();
        } else {
            $agentCommissionRate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();
        }

        return view('backend.dashboard.master-agent')
            ->with('user', $user)
            ->with('players', $playersCount)
            ->with('transactions', $user->transactions)
            ->with('agents', $agents)
            ->with('isAgent', $isAgent)
            ->with('commissionRate', $agentCommissionRate);
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
        $hubs = Hub::all()->count();
        $masterAgents = User::role('Master Agent')
            ->whereNull('referred_by')
            ->onlyActive()->count();

        $agents = User::role('Master Agent')
            ->whereNotNull('referred_by')
            ->onlyActive()->count();

        return view('backend.dashboard.super-admin')
            ->with('company', $company->getWallet('income-wallet'))
            ->with('players', $players)
            ->with('events', $events)
            ->with('bettingRound', $bettingRound)
            ->with('bettingEvent', $bettingEvent)
            ->with('transactions', $company->transactions)
            ->with('hubs', $hubs)
            ->with('masterAgents', $masterAgents)
            ->with('agents', $agents);
    }

    public function virtualHub()
    {
        $user = auth()->user();
        $hub = Hub::where('admin_id', $user->id)->first();
        $this->logoutUser(!$hub);
        $masterAgents = User::role('Master Agent')
            ->where('hub_id', $hub->id)
            ->onlyActive()->count();
        $players = User::role('Player')
            ->where('hub_id', $hub->id)
            ->onlyActive()->count();
        $agents = User::role('Master Agent')
            ->where('hub_id', $hub->id)
            ->whereNotNull('referred_by')
            ->onlyActive()->count();

        $commissionConversion = new CommissionRatesConversion($hub, true);
        $hubRate = $commissionConversion->convertHub()->hubCommissionRate();
        return view('backend.dashboard.virtual-hub')
            ->with('masterAgents', $masterAgents)
            ->with('hub', $hub)
            ->with('players', $players)
            ->with('agents', $agents)
            ->with('commissionRate', $hubRate);
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
