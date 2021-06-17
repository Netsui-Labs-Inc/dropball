<?php

namespace App\Listeners;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\Bet;
use App\Domains\Bet\Models\BetOption;
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
use Illuminate\Bus\Batch;
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
            activity('betting-round')->performedOn($bettingRound)->log("Betting Round #{$bettingRound->id} was cancelled");
            return $this->refund($bettingRound);
        }

        activity('betting-round')->performedOn($bettingRound)->log("Betting Round #{$bettingRound->id} result is {$bettingRound->betOption->name}");

        logger("BettingRound#{$bettingRound->id} Result ".strtoupper($bettingRound->betOption->name));

        $this->updatePoolMoney($bettingRound);
        $this->updateWinners($bettingRound);
        $this->updateLosers($bettingRound);

        $this->processWinners($bettingRound);

        $this->processCommissions($bettingRound);

        ProcessOtherCommissionsJob::dispatch($bettingRound)->onQueue('other-commissions')->delay(now()->addMinute());
    }

    public function processWinners(BettingRound $bettingRound)
    {
        $bettingRound->bets()->whereNull('winnings_processed_at')->where('bet', $bettingRound->result)->chunk(300, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRoundResultListener.processWinners :: BettingRound#{$bettingRound->id} Processing Winners Payout Batch #$batch");
            foreach ($bets as $bet) {
                ProcessPlayerWinningsJob::dispatchSync($bet);
            }
        });
    }

    public function processCommissions(BettingRound $bettingRound)
    {
        logger("BettingRound#{$bettingRound->id} ".$bettingRound->bets()->count(). " bets to process");
        $bettingRound->bets()->chunk(300, function ($bets, $batch) use ($bettingRound) {
            logger("BettingRound#{$bettingRound->id} Processing Commissions Batch #$batch");
            foreach ($bets as $bet) {
                Bus::chain([
                    new ProcessMasterAgentCommissionJob($bet),
                    new ProcessMasterAgentCommissionJob($bet, true),
                    new ProcessDeveloperCommissionJob($bet),
                    new ProcessOperatorCommissionJob($bet),
                    new ProcessHubCommissionJob($bet),
                ])->catch(function(\Exception $e) {
                    logger($e->getMessage());
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

        $bettingRound->bets()->whereNull('refund_processed_at')->chunk(300, function ($bets) {
            foreach ($bets as $bet) {
                ProcessBetRefundJob::dispatchSync($bet);
            }
        });

        return null;
    }

    public function updatePoolMoney(BettingRound $bettingRound)
    {
        $poolMoney = $bettingRound->bets()->sum('bet_amount');
        $payouts = (new CalculateOddsAction)($bettingRound);
        $totalBets = 0;
        if($bettingRound->result == Bet::PULA) {
            $totalBets = $bettingRound->totalBetType(Bet::PULA) ;
            $winningPayout = ($totalBets * $payouts['pula']) / 100;
        } elseif($bettingRound->result == Bet::PUTI) {
            $totalBets = $bettingRound->totalBetType(Bet::PUTI) ;
            $winningPayout = ($totalBets * $payouts['puti']) / 100;
        } else {
            $winningPayout = 0;
        }
        $payouts['betPayout'] = $winningPayout;

        $bettingRound->update([
            'pool_money' => $poolMoney,
            'meta' => ['winningPayout' => floor($winningPayout), 'totalBets' => $totalBets],
            'payouts' => $payouts]);

        logger("updatePoolMoney#$bettingRound->id Winning Payout = $winningPayout");
        logger("updatePoolMoney#$bettingRound->id Pool Money = $poolMoney");
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
