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
use DB;
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

        $this->updatePoolMoney($bettingRound);
        $this->updateWinners($bettingRound);
        $this->updateLosers($bettingRound);

        $this->processWinners($bettingRound);

        $this->processCommissions($bettingRound);

        ProcessOtherCommissionsJob::dispatch($bettingRound)->onQueue('other-commissions');
    }

    public function processWinners(BettingRound $bettingRound)
    {
        $bettingRound->bets()->whereNull('winnings_processed_at')->where('bet', $bettingRound->result)->chunk(1000, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRound#{$bettingRound->id} Processing Winners Payout Batch #$batch");
            foreach ($bets as $bet) {
                ProcessPlayerWinningsJob::dispatchSync($bet);
            }
        });
    }

    public function processCommissions(BettingRound $bettingRound)
    {
        $bettingRound->bets()->orderBy('agent_id')->chunk(1000, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRound#{$bettingRound->id} Processing Commissions Batch #$batch");
            foreach ($bets as $bet) {
                Bus::chain([
                    new ProcessMasterAgentCommissionJob($bet),
                    new ProcessSubAgentCommissionJob($bet),
                    new ProcessHubCommissionJob($bet),
                    new ProcessDeveloperCommissionJob($bet),
                    new ProcessOperatorCommissionJob($bet),
                    new ProcessBetBalanceJob($bet),
                ])->catch(function(\Exception $e) {
                    logger($e->getTraceAsString());
                    \Sentry::captureException($e);
                })->onQueue('commissions')->dispatch();
            }
        });
    }

    public function refund($bettingRound)
    {
        if (! $bettingRound->bets()->exists()) {
            return null;
        }

        logger("BettingRound#{$bettingRound->id} result is Cancelled All bets will be refunded");

        $bettingRound->bets()->whereNull('refund_processed_at')->chunk(1000, function ($bets) {
            foreach ($bets as $bet) {
                ProcessBetRefundJob::dispatch($bet)->onQueue('winners');
            }
        });

        return null;
    }

    public function updatePoolMoney(BettingRound $bettingRound)
    {
        $poolMoney = $bettingRound->bets()->sum('bet_amount');
        $bettingRound->update(['pool_money' => $poolMoney]);
    }

    public function updateWinners(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', $bettingRound->result)->update([
            'status' => 'win',
        ]);
    }

    public function updateLosers(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', '!=', $bettingRound->result)->update([
            'status' => 'lose',
            'gain_loss' => DB::raw('-1 * bets.bet_amount'),
        ]);
    }
}
