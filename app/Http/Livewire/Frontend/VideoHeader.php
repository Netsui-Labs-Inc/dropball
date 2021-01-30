<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class VideoHeader extends Component
{
    public $bettingEvent;

    public $bettingRound;

    public $userBet = null;

    public $message = null;

    public $payout = 0;

    public $userBets = [];

    public function mount($bettingEventId)
    {
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
        $this->userBets = $this->bettingRound ? $this->bettingRound->userBets(auth()->user()->id)->get() : null;
        if ($this->bettingRound) {
            $this->setPayouts();
        }
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBetPlaced" => 'updateStatus',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBettingWindowUpdated" => 'updateStatus',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStatusUpdated" => 'updateStatus',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundResultUpdated" => 'showResult',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting" => 'updateStatus',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBettingLastCall" => 'lastCall',
        ];
    }

    public function updateStatus($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->userBets = $this->bettingRound ? $this->bettingRound->userBets(auth()->user()->id)->get() : null;
        $this->setPayouts();
    }

    public function showResult($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;

        /** @var Collection $userBets */
        $userBets = $this->bettingRound->userBets(auth()->user()->id)->get();
        $this->setPayouts();
        $result = $this->bettingRound->result;
        if (empty($userBets)) {
        } elseif ($this->hasWinningBet($userBets)) {
            $result = "You've WON <strong class='text-success'>".number_format($this->payout). "</strong>";
        } else {
            $result = "You've LOST <strong class='text-danger'>-".number_format($userBets->sum('bet_amount')). "</strong>";
        }

        $this->message = $result;
    }

    public function hasWinningBet($userBets)
    {
        return $userBets->contains('bet', '=',  $this->bettingRound->result);
    }

    public function getLatestBettingRound()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        if (is_array($this->bettingRound)) {
            $this->bettingRound = BettingRound::find($this->bettingRound['id']);
        }

        return $this->bettingEvent->activeBettingRound()->first();
    }

    public function setPayouts()
    {

    }

    public function lastCall()
    {
        $this->emit('swal:alert', [
            'icon' => 'warning',
            'title' => "<span>Betting Round #{$this->bettingRound->queue} is starting soon. Last call to place your bets.</span>",
            'timeout' => 10000,
        ]);
    }

    public function render()
    {
        return view('livewire.frontend.video-header')
            ->with('bettingRound', $this->bettingRound);
    }
}
