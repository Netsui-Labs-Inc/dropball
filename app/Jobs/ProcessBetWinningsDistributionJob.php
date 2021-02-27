<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessBetWinningsDistributionJob implements ShouldQueue
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
        $this->updateBetStatus($bettingRound);

        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
                logger("BettingRound#{$bettingRound->id} Current Pool Money {$bettingRound->balanceFloat}");
                $this->processWinners($bet);
                logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetResultDistribution.error = ".$e->getMessage());
                DB::rollBack();
            }
        }
    }

    public function updateBetStatus(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', $bettingRound->result)->update([
            'status' => 'win',
            'gain_loss' => DB::raw('(2 * bets.bet_amount) - (bets.bet_amount * .10)'),
        ]);
    }

    public function refund($bettingRound)
    {
        logger("BettingRound#{$bettingRound->id} result is {$bettingRound->result} All bets will be refunded");

        foreach ($bettingRound->bets as $bet) {
            $bettingRound->forceTransferFloat($bet->user, $bet->bet_amount, ['betting_round_id' => $bettingRound->id, 'refund' => true]);
        }
    }

    public function processWinners($bet)
    {
        $bettingRound = $this->bettingRound;
        logger("BettingRound#{$bettingRound->id} Process Commission for winners");
        $payout = $this->payout($bet);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} Current balance is {$bet->user->balanceFloat}");
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} won and will receive {$payout}");
        $bettingRound->forceTransferFloat($bet->user, $payout, ['betting_round_id' => $bettingRound->id]);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} New balance is now {$bet->user->balanceFloat}");
    }

    public function payout(Bet $bet)
    {
        return getPayout($bet->bet_amount);
    }

}
