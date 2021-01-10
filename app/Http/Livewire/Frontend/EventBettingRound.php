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

    public $totalMeron = 0;

    public $totalWala = 0;

    public $meronPayout = 0;

    public $walaPayout = 0;

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
        $this->bettingRound = BettingRound::find($data['play']['id']);

        $this->emit('swal:alert', [
            'icon' => 'info',
            'title' => 'BettingRound #'.$this->bettingRound->queue ." is now ".$this->bettingRound->status,
        ]);
    }

    public function showResult($data)
    {
        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        /** @var Bet $userBet */
        $userBet = $this->bettingRound->userBet(auth()->user()->id);
        $this->setPayouts();
        switch ($this->bettingRound->result) {
            case 'meron':
                $class = 'text-danger';

                break;
            case 'wala':
                $class = 'text-success';

                break;
            case 'draw':
                $class = 'text-gray';

                break;
            case 'cancelled':
                $class = 'text-warning';

                break;
            default:
                $class = '';

                break;
        }

        $result = "<h1 class='$class'>".strtoupper($this->bettingRound->result)."</h1>";

        if (! $userBet) {
            $icon = 'info';
            $title = 'BettingRound #'.$this->bettingRound->queue;
        } elseif (in_array($this->bettingRound->result,  ['draw','cancelled'])) {
            $icon = 'info';
            $title = "<h1 class='$class'>".strtoupper($this->bettingRound->result)."</h1>";
            $result = "YOU'VE been credited <strong class='text-info'>".number_format($userBet->bet_amount). "</strong>";
        } elseif ($userBet->bet === $this->bettingRound->result) {
            $icon = 'success';
            $title = "<h1 class='$class'>".strtoupper($this->bettingRound->result)."</h1>";
            $result = "YOU'VE WON <strong class='text-success'>".number_format($this->payout). "</strong>";
        } else {
            $icon = 'error';
            $title = "<h1 class='$class'>".strtoupper($this->bettingRound->result)."</h1>";
            $result = "YOU'VE LOST <strong class='text-danger'>-".number_format($userBet->bet_amount). "</strong>";
        }

        $nextBettingRound = $this->bettingEvent->bettingRounds()->where('queue', $this->bettingRound->queue + 1)->first();
        $this->emit('swal:confirm', [
            'icon' => $icon,
            'title' => $title,
            'confirmText' => 'View next play',
            'text' => "<h1 class='animate__animated animate__pulse animate__infinite infinite'>$result</h1>",
            'method' => "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting",
            'params' => ['play' => $nextBettingRound ? $nextBettingRound->toArray() : null],
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
        if (! $data['play']) {
            $this->bettingRound = null;
            $this->emit('swal:alert', [
                'icon' => 'info',
                'title' => "<span>No BettingRound Available</span>",
            ]);

            return;
        }

        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->emit('swal:alert', [
            'icon' => 'info',
            'title' => "<span>Upcoming BettingRound #{$this->bettingRound->queue}</span>",
        ]);
    }


    public function updatedBettingWindow($data)
    {
        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $status = $this->bettingRound->is_betting_open ? "<strong class='text-success'>OPEN</strong>" : "<strong class='text-danger'>CLOSED</strong>";
        $this->emit('swal:alert', [
            'icon' => $this->bettingRound->is_betting_open ? 'success' : 'error',
            'title' => "<span>Betting for BettingRound #{$this->bettingRound->queue} is now $status </span>",
        ]);
    }

    public function setPayouts()
    {
        $userBet = $this->bettingRound->userBet(auth()->user()->id);
        $totalMeron = $this->bettingRound->totalBetType('meron');
        $totalWala = $this->bettingRound->totalBetType('wala');
        if ($userBet) {
            $meronPayout = ($totalMeron * $userBet->bet_amount) / $totalWala;
            $this->meronPayout = $meronPayout - $meronPayout * .10;

            $walaPayout = ($totalWala * $userBet->bet_amount) / $totalMeron;
            $this->walaPayout = $walaPayout - $walaPayout * .10;

            $this->payout = $userBet->bet === 'meron' ? $this->meronPayout : $this->walaPayout;
        }
    }

    public function render()
    {
        return view('livewire.frontend.event-betting-round')
            ->with('play', $this->bettingRound);
    }
}
