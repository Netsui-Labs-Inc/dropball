<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessBetRefundJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;

    /**
     * Create a new job instance.
     *
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
    }

    public function middleware()
    {
        return [
            (new WithoutOverlapping("bet-".$this->bet->id))->dontRelease(),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "refund-bet-".$this->bet->id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
      $bet = $this->bet;
      try {
          DB::beginTransaction();
          $this->processRefund($bet);
          DB::commit();
      } catch (\Exception $e) {
          logger("ProcessBetRefundJob.error = ".$e->getMessage(), [$e->getTraceAsString()]);
          DB::rollBack();
      }
    }

    public function processRefund(Bet $bet)
    {
        $bet->refresh();
        if($bet->refund_processed_at) {
            return true;
        }

        $bettingRound = $bet->bettingRound;
        logger("BettingRound#{$bettingRound->id} Bet#$bet->id Refunding {$bet->bet_amount} to Player#{$bet->user->id} with current balance of {$bet->user->balanceFloat}");
        TransferToWalletJob::dispatch($bet, $bet->user, $bet->bet_amount, ['betting_round_id' => $bettingRound->id, 'refund' => true])->onQueue('winners');
        $bet->refund_processed_at = now();
        $bet->save();
    }
}
