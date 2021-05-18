<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessBetRefundJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;
    public $bets;

    /**
     * Create a new job instance.
     *
     * @param $bets
     * @param BettingRound $bettingRound
     */
    public function __construct($bets, BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
        $this->bets = $bets;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //update bets status
        $bettingRound = $this->bettingRound;
        logger("\n------------------ START Refund BettingRound#{$bettingRound->id} -------------");
        logger("BettingRound#{$bettingRound->id} result was Cancelled/Draw. All bets will be refunded");

        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                logger("BettingRound#{$bettingRound->id} Pot Money : {$bettingRound->balanceFloat}");
                $this->processRefund($bet);
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetRefundJob.error = ".$e->getMessage(), [$e->getTraceAsString()]);

                DB::rollBack();
            }
        }
        logger("------------------ END Refund BettingRound#{$bettingRound->id} -------------\n");
    }

    public function processRefund(Bet $bet)
    {
        $bettingRound = $bet->bettingRound;
        logger("BettingRound#{$bettingRound->id} Refunding {$bet->bet_amount} to Player#{$bet->user->id} with current balance of {$bet->user->balanceFloat}");
        $bet->forceTransferFloat($bet->user, $bet->bet_amount, ['betting_round_id' => $bettingRound->id, 'refund' => true]);
        //logger("BettingRound#{$bettingRound->id} Updated Pot Money : {$bettingRound->balanceFloat} Player New Balance : {$bet->user->balanceFloat}");
    }
}
