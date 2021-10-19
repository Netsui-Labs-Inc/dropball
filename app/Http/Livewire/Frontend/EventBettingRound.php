<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class EventBettingRound extends Component
{
    public $bettingEvent;

    public $bettingRound;

    public $payout = 0;

    public $theme = 'default';

    public function mount($bettingEventId, $theme = 'default')
    {
        $this->theme = $theme;
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
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundCancelled" => 'reload',
        ];
    }

    public function showStatus($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRoundId']);
        if(!$this->bettingRound) {
            return;
        }

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
        $this->bettingRound = BettingRound::find($data['bettingRoundId']);

        if(!$this->bettingRound) {
            return;
        }

        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $userBets = $this->bettingRound->userBets(auth()->user()->id)->get();

        if ($userBets->isEmpty()) {
            if(in_array($this->bettingRound->status,  ['draw','cancelled'])) {
                $result = "<h1 class='text-danger'> Cancelled </h1>";
            } else {
                $color = $this->bettingRound->betOption->id == 2 ? '#8898aa' : $this->bettingRound->betOption->color;
                $result = "<h1 style='color:{$color}'>".strtoupper($this->bettingRound->betOption->name)."</h1>";
            }
            $icon = 'info';
            $title = 'Betting Round #'.$this->bettingRound->queue;
        } elseif (in_array($this->bettingRound->status,  ['draw','cancelled'])) {
            $icon = 'info';
            $title = "<h1 class='text-danger'> Cancelled </h1>";
            $result = "YOU'VE been credited <strong class='text-info'>".number_format($userBets->sum('bet_amount')). "</strong>";
        } elseif ($this->hasWinningBet($userBets)) {
            $this->setPayouts();
            $color = $this->bettingRound->betOption->id == 2 ? '#8898aa' : $this->bettingRound->betOption->color;
            $icon = 'success';
            $title = "<h1 style='color:{$color}'>".strtoupper($this->bettingRound->betOption->name)."</h1>";
            $result = "YOU'VE WON <strong class='text-success'>".number_format($this->payout). "</strong>";
        } else {
            $icon = 'error';
            $color = $this->bettingRound->betOption->id == 2 ? '#8898aa' : $this->bettingRound->betOption->color;

            $title = "<h1 style='color:{$color}'>".strtoupper($this->bettingRound->betOption->name)."</h1>";
            $result = "YOU'VE LOST <strong class='text-danger'>-".number_format($userBets->sum('bet_amount')). "</strong>";
        }

        $nextBettingRound = $this->bettingEvent->bettingRounds()->where('queue', $this->bettingRound->queue + 1)->first();
        $this->emit('swal:confirm', [
            'icon' => $icon,
            'title' => $title,
            'confirmText' => 'View next round',
            'text' => "<h1 class='animate__animated animate__pulse animate__infinite infinite'>$result</h1>",
            'method' => "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting",
            'params' => ['bettingRoundId' => $nextBettingRound ? $nextBettingRound->id : null],
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
        $nextBettingRound = $this->bettingEvent->bettingRounds()->where('queue', $this->bettingRound->queue + 1)->first();
        $title = "<span>Upcoming Betting Round #{$this->bettingRound->queue}</span>";
        if (! isset($data['bettingRoundId'])) {
            $title = "<span>No Betting Round Available</span>";

            $this->bettingRound = null;
        }

        $this->bettingRound = BettingRound::find($data['bettingRoundId']);
        $this->emit('swal:alert', [
            'icon' => 'info',
            'title' => $title,
            'method' => "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundCancelled",
            'params' => ['bettingRound' => $nextBettingRound ? $nextBettingRound->toArray() : null]
        ]);
    }

    public function reload()
    {
        $this->redirect("\\");
    }

    public function updatedBettingWindow($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRoundId']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $status = $this->bettingRound->is_betting_open ? "<strong class='text-success'>OPEN</strong>" : "<strong class='text-danger'>CLOSED</strong>";
        $this->emit('swal:alert', [
            'icon' => $this->bettingRound->is_betting_open ? 'success' : 'error',
            'title' => "<span>Betting for Round#{$this->bettingRound->queue} is now $status </span>",
        ]);
    }

    public function setPayouts()
    {
        $bet = $this->bettingRound->userBet(auth()->user()->id);
        if($bet) {
            $payout = (new CalculateOddsAction)($this->bettingRound, $bet);
            $this->payout = $payout['betPayout'];
        }
    }

    public function render()
    {
        return view('livewire.'.$this->theme.'.event-betting-round')
            ->with('bettingRound', $this->bettingRound);
    }
}
