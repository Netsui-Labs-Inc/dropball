<?php

namespace App\Jobs;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessPlayerWinningsJob implements ShouldQueue
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
        $this->onQueue('winners');
        $this->bet = $bet;
    }

    public function middleware()
    {
        return [
            (new WithoutOverlapping("bet-".$this->bet->id))->dontRelease(),
        ];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $bettingRound = $this->bet->bettingRound;
            $bet = $this->bet;
            logger("------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
            DB::beginTransaction();
            $this->processWin($bet);
            logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
            DB::commit();
        } catch (\Exception $e) {
            logger("ProcessPlayerWinningsJob.error = ".$e->getMessage());
            DB::rollBack();
        }
    }

    public function processWin(Bet $bet)
    {
        $bettingRound = $bet->bettingRound->fresh();
        logger("BettingRound#{$bettingRound->id} Payouts :: ", $bettingRound->payouts);
        $payout = (new CalculateOddsAction)($bettingRound, $bet);
        $bet->payout = $payout['betPayout'];
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} Current balance is {$bet->user->balanceFloat}");
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} Won and will receive {$bet->payout}");
        $bet->user->depositFloat($payout['betPayout'], ['betting_round_id' => $bettingRound->id]);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} New balance is now {$bet->user->balanceFloat}");
        $bet->save();
    }
}
