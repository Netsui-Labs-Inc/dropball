<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Livewire\Component;

class VideoHeader extends Component
{
    public $bettingEvent;

    public $bettingRound;

    public $userBet = null;

    public $message = null;

    public $payout = 0;

    public function mount($bettingEventId)
    {
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
        $this->userBet = $this->bettingRound ? $this->bettingRound->userBet(auth()->user()->id) : null;
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
        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->userBet = $this->bettingRound->userBet(auth()->user()->id) ?? null;
        $this->setPayouts();
    }

    public function showResult($data)
    {
        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        /** @var Bet $userBet */
        $userBet = $this->bettingRound->userBet(auth()->user()->id);
        $this->setPayouts();
        $result = $this->bettingRound->result;
        if (! $userBet) {
        } elseif ($this->bettingRound->result === 'draw') {
            $result = "You've been credited <strong class='text-info'>".number_format($userBet->bet_amount). "</strong>";
        } elseif ($userBet->bet == $this->bettingRound->result) {
            $result = "You've WON <strong class='text-success'>".number_format($this->payout). "</strong>";
        } else {
            $result = "You've LOST <strong class='text-danger'>-".number_format($userBet->bet_amount). "</strong>";
        }

        $this->message = $result;
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
        $userBet = $this->userBet;
        $totalMeron = $this->bettingRound->totalBetType('meron');
        $totalWala = $this->bettingRound->totalBetType('wala');
        if ($userBet) {
            $meronPayout = $totalWala ? ($totalMeron * $userBet->bet_amount) / $totalWala : 0;
            $this->meronPayout = $meronPayout - $meronPayout * .10;

            $walaPayout = $totalMeron ? ($totalWala * $userBet->bet_amount) / $totalMeron : 0;
            $this->walaPayout = $walaPayout - $walaPayout * .10;

            $this->payout = $userBet->bet === 'meron' ? $this->meronPayout : $this->walaPayout;
        }
    }

    public function lastCall()
    {
        $this->emit('swal:alert', [
            'icon' => 'warning',
            'title' => "<span>BettingRound #{$this->bettingRound->queue} is starting soon. Last call to place your bets.</span>",
            'timeout' => 10000,
        ]);
    }

    public function render()
    {
        return view('livewire.frontend.video-header')
            ->with('play', $this->bettingRound);
    }
}
