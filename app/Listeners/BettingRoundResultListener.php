<?php

namespace App\Listeners;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Commissions\ProcessDeveloperCommissionJob;
use App\Jobs\Commissions\ProcessHubCommissionJob;
use App\Jobs\Commissions\ProcessMasterAgentCommissionJob;
use App\Jobs\Commissions\ProcessOperatorCommissionJob;
use App\Jobs\Commissions\ProcessOtherCommissionsJob;
use App\Jobs\Commissions\ProcessSubAgentCommissionJob;
use App\Jobs\ProcessBetBalanceJob;
use App\Jobs\ProcessBetRefundJob;
use App\Jobs\ProcessBetStatusJob;
use App\Jobs\ProcessPlayerWinningsJob;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Support\Facades\Bus;

class BettingRoundResultListener
{
    use WalletAndCommission;
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        /** @var BettingRound $bettingRound */
        $bettingRound = $event->bettingRound;

        if ($bettingRound->status == 'cancelled') {
            logger("BettingRound#{$bettingRound->id} was Cancelled");

            return $this->refund($bettingRound);
        }

        logger("BettingRound#{$bettingRound->id} Result ".strtoupper($bettingRound->betOption->name));
        logger("BettingRound#{$bettingRound->id} total pool money {$bettingRound->balanceFloat}");

        $totalPayouts = getPayout($bettingRound->totalBetType($bettingRound->result));
        logger("BettingRound#{$bettingRound->id} Total Payout $totalPayouts");

        ProcessBetStatusJob::dispatchNow($bettingRound);

        $this->processWinners($bettingRound);

        $this->processCommissions($bettingRound);

        ProcessOtherCommissionsJob::dispatch($bettingRound)->onQueue('other-commissions');
    }

    public function processWinners(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', $bettingRound->result)->chunk(100, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRound#{$bettingRound->id} Processing Winners Payout Batch #$batch");
            foreach ($bets as $bet) {
                ProcessPlayerWinningsJob::dispatch($bet)->onQueue('winners');
            }
        });
    }

    public function processCommissions(BettingRound $bettingRound)
    {
        $bettingRound->bets()->orderBy('agent_id')->chunk(100, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRound#{$bettingRound->id} Processing Commissions Batch #$batch");
            foreach ($bets as $bet) {
                Bus::chain([
                    new ProcessMasterAgentCommissionJob($bet),
                    new ProcessSubAgentCommissionJob($bet),
                    new ProcessHubCommissionJob($bet),
                    new ProcessDeveloperCommissionJob($bet),
                    new ProcessOperatorCommissionJob($bet),
                    new ProcessBetBalanceJob($bet),
                ])->onQueue('commissions')->dispatch();
            }
        });
    }

    public function refund($bettingRound)
    {
        if (! $bettingRound->bets()->exists()) {
            return true;
        }
        logger("BettingRound#{$bettingRound->id} result is Cancelled All bets will be refunded");

        $bettingRound->bets()->chunk(30, function ($bets) use ($bettingRound) {
            dispatch(new ProcessBetRefundJob($bets, $bettingRound));
        });

        return true;
    }
}
