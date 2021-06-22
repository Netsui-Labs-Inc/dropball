<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class BettingRoundPoolMoney extends Component
{
    public $bettingRound;
    public $bettingEvent;

    public $theme = 'default';

    public $puti = 0;
    public $pula = 0;
    public $jackpot = 0;
    public $poolMoney = 0;

    public function mount($bettingRoundId, $theme = 'default')
    {
        $this->theme = $theme;
        $this->bettingRound = BettingRound::find($bettingRoundId);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->bettingRoundBetPlaced();
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }
        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBetPlaced" => 'bettingRoundBetPlaced',
        ];
    }

    public function bettingRoundBetPlaced()
    {
        /** @var BettingRound $bettingRound */
        $bettingRound = $this->bettingRound;
        $totalPuti = $bettingRound->totalBetType(Bet::PUTI);
        $totalPula = $bettingRound->totalBetType(Bet::PULA);
        $totalJackpot = $bettingRound->totalBetType(Bet::JACKPOT);

        $this->puti = $totalPuti;
        $this->pula = $totalPula;
        $this->jackpot = $totalJackpot;
        $this->poolMoney = $totalPuti + $totalPula + $totalJackpot;
    }


    public function render()
    {
        return view('livewire.'.$this->theme.'.pool-money')
            ->with('bettingRound', $this->bettingRound);
    }
}
