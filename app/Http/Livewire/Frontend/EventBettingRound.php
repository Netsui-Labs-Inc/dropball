<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class EventBettingRound extends Component
{
    public $bettingEvent;

    public $bettingRound;

    public $payout = 0;


    public function mount($bettingEventId)
    {
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBettingWindowUpdated" => 'updatedBettingWindow',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStatusUpdated" => 'showStatus',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundResultUpdated" => 'showResult',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting" => 'startingBettingRound',
        ];
    }

    public function showStatus($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);

        $this->emit('swal:alert', [
            'icon' => 'info',
            'title' => 'Betting Round #'.$this->bettingRound->queue ." is now ".$this->bettingRound->status,
        ]);
    }

    public function hasWinningBet($userBets)
    {
        return $userBets->contains('bet', '=',  $this->bettingRound->result);
    }


    public function showResult($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $userBets = $this->bettingRound->userBets(auth()->user()->id)->get();
        $winningBet = $this->hasWinningBet($userBets) ? $userBets->firstwhere('bet', $this->bettingRound->result) : null;

        $result = "<h1 class='text-gray'>".strtoupper($this->bettingRound->result)."</h1>";

        if ($userBets->isEmpty()) {
            $icon = 'info';
            $title = 'Betting Round #'.$this->bettingRound->queue;
        } elseif (in_array($this->bettingRound->result,  ['draw','cancelled'])) {
            $icon = 'info';
            $title = "<h1 class='text-gray'>".strtoupper($this->bettingRound->result)."</h1>";
            $result = "YOU'VE been credited <strong class='text-info'>".number_format($userBets->sum('bet_amount')). "</strong>";
        } elseif ($this->hasWinningBet($userBets)) {
            $icon = 'success';
            $title = "<h1 style='color:{$this->bettingRound->betOption->color}'>".strtoupper($this->bettingRound->betOption->name)."</h1>";
            $result = "YOU'VE WON <strong class='text-success'>".number_format($this->getPayout($winningBet)). "</strong>";
        } else {
            $icon = 'error';
            $title = "<h1 class='text-danger'>".strtoupper($this->bettingRound->result)."</h1>";
            $result = "YOU'VE LOST <strong class='text-danger'>-".number_format($userBets->sum('bet_amount')). "</strong>";
        }

        $nextBettingRound = $this->bettingEvent->bettingRounds()->where('queue', $this->bettingRound->queue + 1)->first();
        $this->emit('swal:confirm', [
            'icon' => $icon,
            'title' => $title,
            'confirmText' => 'View next play',
            'text' => "<h1 class='animate__animated animate__pulse animate__infinite infinite'>$result</h1>",
            'method' => "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting",
            'params' => ['bettingRound' => $nextBettingRound ? $nextBettingRound->toArray() : null],
        ]);
    }

    public function getLatestBettingRound()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
            $this->bettingRound = $this->bettingEvent->bettingRounds()->whereNotIn("betting_rounds.status", ['ended', 'cancelled'])->first();
        }

        if (is_array($this->bettingRound)) {
            $this->bettingRound = BettingRound::find($this->bettingRound['id']);
        }

        return $this->bettingEvent->bettingRounds()->whereNotIn("betting_rounds.status", ['ended', 'cancelled'])->first();
    }

    public function startingBettingRound($data)
    {
        if (! $data['bettingRound']) {
            $this->bettingRound = null;
            $this->emit('swal:alert', [
                'icon' => 'info',
                'title' => "<span>No BettingRound Available</span>",
            ]);

            return;
        }

        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->emit('swal:alert', [
            'icon' => 'info',
            'title' => "<span>Upcoming BettingRound #{$this->bettingRound->queue}</span>",
        ]);
    }

    public function updatedBettingWindow($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $status = $this->bettingRound->is_betting_open ? "<strong class='text-success'>OPEN</strong>" : "<strong class='text-danger'>CLOSED</strong>";
        $this->emit('swal:alert', [
            'icon' => $this->bettingRound->is_betting_open ? 'success' : 'error',
            'title' => "<span>Betting for Round#{$this->bettingRound->queue} is now $status </span>",
        ]);
    }

    public function getPayout(Bet $userBet)
    {
        return $userBet->bet_amount + ($userBet->bet_amount * .5);
    }

    public function setPayouts()
    {
        $userBet = $this->bettingRound->userBet(auth()->user()->id);
    }

    public function render()
    {
        return view('livewire.frontend.event-betting-round')
            ->with('play', $this->bettingRound);
    }
}
