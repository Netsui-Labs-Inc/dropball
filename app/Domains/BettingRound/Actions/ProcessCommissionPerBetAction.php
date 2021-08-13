<?php

namespace App\Domains\BettingRound\Actions;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;

class ProcessCommissionPerBetAction
{
    public function __invoke(Bet $bet)
    {
        $agent = (new Agent)($bet);
        $operator = (new Operator)($bet);
        $hub = (new Hub)($bet);
        $developer = (new Developer)($bet);
        $subAgent = (new SubAgent)($bet);

        $bet->commission_processed = true;
        $bet->update();

        return compact('agent', 'operator', 'hub', 'developer', 'subAgent');
    }
}
