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
            DB::beginTransaction();
            $this->processWin($bet);
            DB::commit();
        } catch (\Exception $e) {
            logger("Bet#{$bet->id} ProcessPlayerWinningsJob.error = ".$e->getMessage());
            \Sentry::captureLastError();
            DB::rollBack();
        }
    }

    public function processWin(Bet $bet)
    {
        $bet->refresh();
        if ($bet->winnings_processed_at ||
            $bet->user->transactions()
                ->where('meta->betting_round_id', $bet->bettingRound->id)
                ->where('meta->bet_id', $bet->id)
                ->where('meta->type', 'win')
                ->exists()
        ) {
            logger("Duplicate Winning Bet#$bet->id", $bet->toArray());
            throw new \Exception("Duplicate Winning");
        }

        $bettingRound = $bet->bettingRound;
        $payout = (new CalculateOddsAction)($bettingRound, $bet);
        $bet->payout = $payout['betPayout'];
        $bet->winnings_processed_at = now();
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} Bet Amount = {$bet->bet_amount} Payout :: ", $payout);
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$bet->user->id} {$bet->user->name} Current balance is {$bet->user->balanceFloat}");
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$bet->user->id} {$bet->user->name} Won and will receive {$bet->payout}");

        $transaction = $bet->user->depositFloat($payout['betPayout'], [
            'betting_round_id' => $bettingRound->id,
            'bet_id' => $bet->id,
            'type' => 'win'
        ]);
        $bet->gain_loss = $payout['betPayout'];
        $bet->save();
        $bet->refresh();
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$bet->user->id} {$bet->user->name} New balance is now {$bet->user->balanceFloat}");
        return $transaction;
    }
}
