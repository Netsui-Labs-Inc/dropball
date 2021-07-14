<?php

namespace App\Http\Livewire\FrontEnd;

use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;
use Livewire\Event;

class SelectColor extends Component
{
    public $option;
    private $theme;
    public $bettingEvent;
    public $bettingRound;
    public $color;

    public function mount( $option,  $bettingEventId, $theme = 'default')
    {
        $this->theme = $theme;
        $this->option = $option;
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
    }
    public function getListeners()
    {
        return [
            "confirmBet" => 'confirmBet',
        ];
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

        return $this->bettingEvent->activeBettingRound()->first();
    }

    public function confirmBet($theme = 'default')
    {
        $this->theme = $theme;
        $this->emit('swal:confirm', [
            'icon' => 'info',
            'title' => "Bet Confirmation",
            'text' => "<h1>Total Bet Amount <strong class='text-success'>".$theme. "</strong></h1><h1></strong> </h1>",
            'confirmText' => 'CONFIRM BET ON ',
            'showCancelButton' => true,
            'method' => '',
            'params' => '',
        ]);
    }

    public function render()
    {
        return view('livewire.'. $this->theme .'.select-color')
            ->with('bettingRound', $this->bettingRound);
    }
}
