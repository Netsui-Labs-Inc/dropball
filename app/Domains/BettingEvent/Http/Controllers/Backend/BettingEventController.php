<?php

namespace App\Domains\BettingEvent\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Http\Requests\StorebettingEventRequest;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Services\BettingEventService;
use App\Http\Controllers\Controller;

class BettingEventController extends Controller
{
    protected $bettingEventService;

    public function __construct(BettingEventService $bettingEventService)
    {
        $this->bettingEventService = $bettingEventService;
    }

    public function index()
    {
        $user = auth()->user();
        if ($user->hasRole('Bet Admin')) {
            $bettingEvent = BettingEvent::today($user->timezone)->where('bet_admin_id', $user->id)->first() ?? null;
        } else {
            $bettingEvent = BettingEvent::today($user->timezone)->first() ?? null;
        }

        return view('backend.betting-event.index')
            ->with('bettingEvent', $bettingEvent);
    }

    public function show(BettingEvent $bettingEvent)
    {
        $bettingRound = $bettingEvent->activeBettingRound()->first();

        return view('backend.betting-event.show')
            ->with('bettingEvent', $bettingEvent)
            ->with('bettingRound', $bettingRound);
    }

    public function create()
    {
        $admins = User::onlyActive()->admins()->role('Bet Admin')->get();

        return view('backend.betting-event.create')
            ->with('admins', $admins);
    }

    public function store(StorebettingEventRequest $request)
    {
        $bettingEvent = $this->bettingEventService->store($request->validated());

        return redirect()->route('admin.betting-events.show', $bettingEvent)->withFlashSuccess(__('The stag event was successfully created.'));
    }
    public function update()
    {
    }
    public function destroy()
    {
    }
}
