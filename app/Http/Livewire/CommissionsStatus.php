<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use App\Jobs\ProcessAllCommissionsJob;
use Livewire\Component;

class CommissionsStatus extends Component
{

    public $bettingRound;

    public $bets;

    public function mount($bettingRound)
    {
        $this->bettingRound = $bettingRound;
        $this->getBets();
    }

    public function getBets()
    {
        $this->bets = $this->bettingRound->bets;
    }


    public function render()
    {
        return view('backend.betting-round.includes.commissions-status');
    }
}
