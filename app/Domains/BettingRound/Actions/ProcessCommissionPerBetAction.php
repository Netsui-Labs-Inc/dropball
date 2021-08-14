<?php

namespace App\Domains\BettingRound\Actions;

use App\Domains\Bet\Models\Bet;
use App\Events\BetCommissionsProcessingStarted;
use App\Jobs\ProcessAllCommissionsJob;

class ProcessCommissionPerBetAction
{
    public function __invoke(Bet $bet)
    {
        event(new BetCommissionsProcessingStarted($bet));

        ProcessAllCommissionsJob::dispatch($bet)->onQueue('commissions');
    }
}
