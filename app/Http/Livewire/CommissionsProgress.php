<?php

namespace App\Http\Livewire;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use Livewire\Component;

class CommissionsProgress extends Component
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

    public function processCommissions($betId)
    {
        $bet = Bet::find($betId);
        $agent = (new Agent)($bet);
        $this->getBets();
        $operator = (new Operator)($bet);
        $this->getBets();
        $hub = (new Hub)($bet);
        $this->getBets();
        $developer = (new Developer)($bet);
        $this->getBets();
        $subAgent = (new SubAgent)($bet);
        $this->getBets();
        $bet->commission_processed = true;
        $bet->update();
    }

    public function render()
    {
        return view('backend.betting-round.includes.commissions-progress');
    }
}
