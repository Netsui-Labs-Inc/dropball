<?php

namespace App\Domains\BettingRound\Actions;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Commissions\ProcessOtherCommissionsJob;

class ProcessBettingRoundResultAction
{

    public function __invoke(BettingRound $bettingRound)
    {
        if ($bettingRound->status === 'cancelled') {
            logger("BettingRound#{$bettingRound->id} was Cancelled");
            activity('betting-round')->performedOn($bettingRound)->log("Betting Round #{$bettingRound->id} was cancelled");
            return (new ProcessRefundAction)($bettingRound);
        }

        activity('betting-round')->performedOn($bettingRound)->log("Betting Round #{$bettingRound->id} result is {$bettingRound->betOption->name}");

        logger("BettingRound#{$bettingRound->id} Result ".strtoupper($bettingRound->betOption->name));

        (new UpdatePoolMoneyAction)($bettingRound);
        (new UpdateWinnersAction)($bettingRound);
        (new UpdateLosersAction)($bettingRound);
        (new ProcessWinnersAction)($bettingRound);
        (new ProcessCommissionsAction)($bettingRound);

        ProcessOtherCommissionsJob::dispatch($bettingRound)->onQueue('other-commissions')->delay(now()->addMinute());
    }

}
