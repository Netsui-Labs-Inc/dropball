<?php

namespace App\Domains\BettingRound\Http\Controllers\Backend;

use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBettingLastCall;
use App\Events\BettingRoundBettingWindowUpdated;
use App\Events\BettingRoundResultUpdated;
use App\Events\BettingRoundStatusUpdated;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BettingRoundController extends Controller
{
    public function index()
    {
        return view('backend.betting-round.index');
    }

    public function show(BettingRound $bettingRound)
    {
        return view('backend.betting-round.show')
            ->with('bettingRound', $bettingRound);
    }

    public function openBetting(BettingRound $bettingRound)
    {
        $activeBettingRoundId = $bettingRound->bettingEvent->activeBettingRound()->first()->id ?? null;
        logger("BettingRound#{$bettingRound->id} betting window is open");
        logger("---------- BettingRound#{$bettingRound->id} Betting Start ------------");

        if ($activeBettingRoundId !== $bettingRound->id) {
            $activeBettingRoundLink = route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $activeBettingRoundId]);

            throw new GeneralException("Cannot Open Betting Round Yet. <a href='$activeBettingRoundLink'>Betting Round #$activeBettingRoundId</a> is still ongoing");
        }
        if ($bettingRound->status !== 'upcoming') {
            throw new GeneralException("Cannot Open BettingRound at the moment");
        }
        $bettingRound->update([
            'is_betting_open' => true,
            'status' => 'placing_bets',
        ]);

        event(new BettingRoundBettingWindowUpdated($bettingRound->fresh()));

        return redirect()->back()->withFlashSuccess(__('Betting window was opened'));
    }

    public function lastCallBetting(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'placing_bets') {
            throw new GeneralException("Cannot Send Last Call");
        }

        event(new BettingRoundBettingLastCall($bettingRound->fresh()));

        return redirect()->back()->withFlashSuccess(__('Betting last call was broadcast'));
    }

    public function closeBetting(BettingRound $bettingRound)
    {
        $bettingRound->update([
            'is_betting_open' => false,
        ]);
        event(new BettingRoundBettingWindowUpdated($bettingRound->fresh()));

        return redirect()->back()->withFlashSuccess(__('Betting window was closed'));
    }

    public function startBettingRound(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'placing_bets') {
            throw new GeneralException("Cannot Open BettingRound at the moment");
        }
        $bettingRound->status = 'ongoing';
        $bettingRound->is_betting_open = false;
        $bettingRound->save();
        event(new BettingRoundStatusUpdated($bettingRound->fresh()));
        logger("BettingRound#{$bettingRound->id} has started : Betting window is closed");
        logger("---------- BettingRound#{$bettingRound->id} BETTING CLOSED ------------");

        return redirect()->back()->withFlashSuccess(__('BettingRound started'));
    }

    public function endBettingRound(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'ongoing') {
            throw new GeneralException("Cannot Open BettingRound at the moment");
        }
        $bettingRound->status = 'ended';
        $bettingRound->save();

        event(new BettingRoundStatusUpdated($bettingRound->fresh()));

        return redirect()->back()->withFlashSuccess(__('BettingRound Ended'));
    }

    public function cancelBettingRound(BettingRound $bettingRound)
    {
        if (! in_array($bettingRound->status, ['upcoming', 'ongoing'])) {
            throw new GeneralException("Cannot Open BettingRound at the moment");
        }
        $bettingRound->status = 'cancelled';
        $bettingRound->result = null;

        $bettingRound->save();
        event(new BettingRoundStatusUpdated($bettingRound->fresh()));
        event(new BettingRoundResultUpdated($bettingRound->fresh()));

        return redirect()->back()->withFlashSuccess(__('BettingRound Cancelled'));
    }

    public function setResult(BettingRound $bettingRound, Request $request)
    {
        $bettingRound->result = $request->get('result');
        $bettingRound->status = 'ended';
        $bettingRound->save();

        BettingRoundResultUpdated::dispatch($bettingRound->fresh());

        logger("BettingRound#{$bettingRound->id} has ended the result is {$bettingRound->betOption->name}");

        return redirect()->back()->withFlashSuccess(__('Result was updated'));
    }
}