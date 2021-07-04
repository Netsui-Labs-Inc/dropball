<?php

namespace App\Domains\BettingEvent\Http\Controllers\Backend;
use App\Domains\BettingEvent\Http\Requests\StoreJackpotRequest;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Domains\BettingRound\Models\BettingRound;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class JackpotController extends Controller
{
    public function store(BettingEvent $bettingEvent, StoreJackpotRequest $request)
    {
        $jackpot = $bettingEvent->jackpots()->create([
            'betting_round_id' => $request->get('betting_round_id'),
            'prize' => 100,
        ]);

        $bettingRound = BettingRound::find($request->get('betting_round_id'));
        $bettingRound->jackpot_id = $jackpot->id;
        $bettingRound->save();

        return redirect()->back()->withFlashSuccess(__('Betting Rounds Jackpot created'));
    }

    public function show(BettingEvent $bettingEvent, Jackpot $jackpot)
    {
        return view('backend.betting-event.jackpot.show')->with('jackpot', $jackpot);
    }
}
