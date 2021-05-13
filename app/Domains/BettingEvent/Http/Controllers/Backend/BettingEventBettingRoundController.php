<?php

namespace App\Domains\BettingEvent\Http\Controllers\Backend;

use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Http\Requests\StorebettingEventBettingRoundRequest;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;

class BettingEventBettingRoundController extends Controller
{
    public function show(BettingEvent $bettingEvent, BettingRound $bettingRound)
    {
        $nextBettingRound = $bettingEvent->bettingRounds()->where('queue', $bettingRound->queue + 1)->first();

        $activeBettingRoundId = $bettingRound->bettingEvent->activeBettingRound()->first()->id ?? 1;
        if ($bettingRound->id > $activeBettingRoundId) {
            $activeBettingRoundLink = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $activeBettingRoundId]);
            throw new GeneralException("Cannot Open Betting Round Yet. <a href='$activeBettingRoundLink'>Betting Round #$activeBettingRoundId</a> is still ongoing");
        }

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
        $lastBettingRound = $bettingEvent->bettingRounds()->orderBy('queue', 'desc')->first();
        $queue = $lastBettingRound ? $lastBettingRound->queue : 0;

        foreach (range(1, $request->get('quantity')) as $index) {
            $bettingEvent->bettingRounds()->create([
                    'queue' => ++$queue,
                    'note' => $request->get('note'),
                ]);
        }

        return redirect()->back()->withFlashSuccess(__('Betting Rounds created'));
    }

    public function report(BettingEvent $bettingEvent, BettingRound $bettingRound)
    {
        $nextBettingRound = $bettingEvent->bettingRounds()->where('queue', $bettingRound->queue + 1)->first();

        $totalWinningBets = $bettingRound->bets()->where('bet', $bettingRound->result)->sum('bet_amount');
        $payout = getPayout($totalWinningBets);

        return view('backend.betting-round.report')
            ->with('bettingEvent', $bettingEvent)
            ->with('bettingRound', $bettingRound)
            ->with('bettingOptions', BetOption::all())
            ->with('payout', $payout)
            ->with('nextBettingRound', $nextBettingRound);
    }
}
