<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class EventTrend extends Component
{
    public $bettingEvent;
    public $rounds;
    public $bettingRound;
    public $theme = 'default';


    public function mount($bettingEventId, $theme = 'default')
    {
        $this->theme = $theme;
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->rounds = $this->bettingEvent->bettingRounds;
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundResultUpdated" => 'showResult',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting" => 'updateStatus',
        ];
    }

    public function updateStatus($data)
    {
        if (! isset($data['bettingRound']['id'])) {
            return;
        }
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->rounds = $this->bettingEvent->bettingRounds;
    }

    public function showResult($data)
    {
        $this->bettingRound = BettingRound::find($data['bettingRoundId']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->rounds = $this->bettingEvent->bettingRounds;
    }

    public function render()
    {
        return view('livewire.'.$this->theme.'.event-trend')
            ->with('bettingRound', $this->bettingRound);
    }
}
