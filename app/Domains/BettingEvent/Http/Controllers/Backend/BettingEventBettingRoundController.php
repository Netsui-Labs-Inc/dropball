<?php

namespace App\Domains\BettingEvent\Http\Controllers\Backend;

use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Http\Requests\StorebettingEventBettingRoundRequest;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Http\Controllers\Controller;

class BettingEventBettingRoundController extends Controller
{
    public function show(BettingEvent $bettingEvent, BettingRound $bettingRound)
    {
        $nextBettingRound = $bettingEvent->bettingRounds()->where('queue', $bettingRound->queue + 1)->first();

        return view('backend.betting-round.show')
            ->with('bettingEvent', $bettingEvent)
            ->with('bettingRound', $bettingRound)
            ->with('bettingOptions', BetOption::all())
            ->with('nextBettingRound', $nextBettingRound);
    }

    public function edit(BettingEvent $bettingEvent, BettingRound $bettingRound)
    {
        return view('backend.betting-round.edit')
            ->with('bettingEvent', $bettingEvent)
            ->with('bettingRound', $bettingRound);
    }

    public function create(BettingEvent $bettingEvent)
    {
        return view('backend.betting-event.play.create')
            ->with('bettingEvent', $bettingEvent);
    }

    public function store(BettingEvent $bettingEvent, StorebettingEventBettingRoundRequest $request)
    {
        $lastBettingRound = $bettingEvent->bettingRounds()->latest()->first();
        $queue = $lastBettingRound ? $lastBettingRound->queue : 1;

        foreach (range(1, $request->get('quantity')) as $index) {
            $bettingEvent->bettingRounds()->create([
                    'queue' => ++$queue,
                    'note' => $request->get('note'),
                ]);
        }

        return redirect()->back()->withFlashSuccess(__('Betting Rounds created'));
    }
}
