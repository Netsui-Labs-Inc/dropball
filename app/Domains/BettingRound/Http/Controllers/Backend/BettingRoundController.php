<?php

namespace App\Domains\BettingRound\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBettingLastCall;
use App\Events\BettingRoundBettingWindowUpdated;
use App\Events\BettingRoundResultUpdated;
use App\Events\BettingRoundStatusUpdated;
use App\Events\ConfirmBetResult;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use Faker\Factory;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BettingRoundController extends Controller
{
    public function index()
    {
        return view('backend.betting-round.index');
    }

    public function show(BettingRound $bettingRound)
    {

        $sVisible = (auth()->user()->hasRole('Dealer Admin') === true) ? 'none' : '';
        return view('backend.betting-round.show')
            ->with('bettingRound', $bettingRound)
            ->with('sVisible', $sVisible);
    }

    public function reloadPage()
    {
        return redirect()->back()->withFlashSuccess(__('Betting round has ended'));
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
        $bettingRound->refresh();
        event(new BettingRoundBettingWindowUpdated($bettingRound));

        $this->setMixer($bettingRound);
        return redirect()->back()->withFlashSuccess(__('Betting window was opened'));
    }

    public function lastCallBetting(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'placing_bets') {
            throw new GeneralException("Cannot Send Last Call");
        }
        $bettingRound->refresh();
        event(new BettingRoundBettingLastCall($bettingRound));

        return redirect()->back()->withFlashSuccess(__('Betting last call was broadcast'));
    }

    public function closeBetting(BettingRound $bettingRound)
    {
        $bettingRound->update([
            'is_betting_open' => false,
        ]);
        $bettingRound->refresh();
        event(new BettingRoundBettingWindowUpdated($bettingRound));

        return redirect()->back()->withFlashSuccess(__('Betting window was closed'));
    }

    public function startBettingRound(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'placing_bets') {
            throw new GeneralException("Cannot Open BettingRound at the moment");
        }

        $this->validateTreshold($bettingRound);

        $bettingRound->status = 'ongoing';
        $bettingRound->is_betting_open = false;
        $bettingRound->save();
        $bettingRound->refresh();
        event(new BettingRoundStatusUpdated($bettingRound));
        logger("BettingRound#{$bettingRound->id} has started : Betting window is closed");
        logger("---------- BettingRound#{$bettingRound->id} BETTING CLOSED ------------");

        return redirect()->back()->withFlashSuccess(__('Betting Round started'));
    }

    public function endBettingRound(BettingRound $bettingRound)
    {
        if ($bettingRound->status !== 'ongoing') {
            throw new GeneralException("Cannot Open Betting Round at the moment");
        }
        $bettingRound->status = 'ended';
        $bettingRound->save();
        $bettingRound->refresh();
        event(new BettingRoundStatusUpdated($bettingRound));

        return redirect()->back()->withFlashSuccess(__('Betting Round Ended'));
    }

    public function cancelBettingRound(BettingRound $bettingRound)
    {
        if (! in_array($bettingRound->status, ['upcoming','placing_bets', 'ongoing'])) {
            throw new GeneralException("Cannot Cancel Betting Round at the moment");
        }

        $bettingRound->status = 'cancelled';
        $bettingRound->result = null;

        $bettingRound->save();
        $bettingRound->refresh();
        event(new BettingRoundStatusUpdated($bettingRound));
        event(new BettingRoundResultUpdated($bettingRound));

        return redirect()->back()->withFlashSuccess(__('Betting Round Cancelled'));
    }

    public function drawBettingRound(BettingRound $bettingRound)
    {
        if (! in_array($bettingRound->status, ['ongoing'])) {
            throw new GeneralException("Cannot Cancel Betting Round at the moment");
        }

        $bettingRound->status = 'ended';
        $bettingRound->result = null;

        $bettingRound->save();
        $bettingRound->refresh();
        event(new BettingRoundStatusUpdated($bettingRound));
        event(new BettingRoundResultUpdated($bettingRound));

        return redirect()->back()->withFlashSuccess(__('Betting Round Bokya'));
    }

    public function setResult(BettingRound $bettingRound, Request $request)
    {
        $this->validateTreshold($bettingRound);
        $bettingRound->result = $request->get('result');
        $bettingRound->status = 'ended';
        $bettingRound->payouts = (new CalculateOddsAction)($bettingRound);
        $bettingRound->save();
        logger("BettingRound#{$bettingRound->id} Payouts :: ", $bettingRound->payouts);

        $bettingRound->refresh();

        BettingRoundResultUpdated::dispatch($bettingRound);

        logger("BettingRound#{$bettingRound->id} has ended the result is {$bettingRound->betOption->name}");
        event(new ConfirmBetResult($bettingRound, 'NOTIFYDEALERADMIN'));
        return redirect()->back()->withFlashSuccess(__('Result was updated'));
    }

    private function validateTreshold(BettingRound $bettingRound)
    {
        $payouts  = (new CalculateOddsAction)($bettingRound);

        $totalPuti = $bettingRound->totalBetType(Bet::PUTI);
        $totalPula = $bettingRound->totalBetType(Bet::PULA);
        $totalJackpot = $bettingRound->totalBetType(Bet::JACKPOT);

        if($totalJackpot * 5 > ($totalPula + $totalPuti)) {
            throw new GeneralException("Jackpot Payout is greater than the PULA + PUTI pool money. You must cancel this round");
        }

        if($payouts['puti'] < 120 || $payouts['pula'] < 120) {
            throw new GeneralException("PULA or PUTI odds is below 120. You must cancel this round");
        }

        return true;

    }

    public function setMixer(BettingRound $bettingRound)
    {
        $faker = Factory::create();
        $max = 999999;
        $diff = $faker->numberBetween(5, 35);
        $winPool = $faker->numberBetween(400000, $max);
        $winner = $faker->randomElement(['pula', 'puti']);

        $meta = [
            'winner' => $winner,
            'win-pool' => $winPool,
            'lose-pool' => $winPool - ($diff / 100 * $winPool),
            'pula' => 0 , 'puti' => 0,
        ];

        $bettingRound->meta = $meta;
        $bettingRound->save();
    }

}
