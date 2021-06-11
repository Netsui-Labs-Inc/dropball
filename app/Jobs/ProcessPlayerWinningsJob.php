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
use Cache;
class ProcessPlayerWinningsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;

    public $tries = 25;

    /**
     * Create a new job instance.
     *
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
    }

    public function backoff()
    {
        return [1, 5, 10, 30];
    }


    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "player-".$this->bet->user->id;
    }

    public function uniqueVia()
    {
        return Cache::driver('database');
    }

    public function middleware()
    {
        return [
            (new WithoutOverlapping("bet-".$this->bet->id))->releaseAfter(10),
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
        $player = $bet->user;
        if ($bet->winnings_processed_at ||
            $player->transactions()
                ->where('meta->betting_round_id', $bet->bettingRound->id)
                ->where('meta->bet_id', $bet->id)
                ->where('meta->type', 'win')
                ->exists()
        ) {
            logger("Duplicate Winning Bet#$bet->id", $bet->toArray());
            throw new \Exception("Duplicate Winning");
        }

        $bettingRound = $bet->bettingRound;
        $player->refresh();
        $playerWallet = $player->getWallet(config('wallet.wallet.default.slug'));
        $currentBalance = $playerWallet->balanceFloat;

        $payout = (new CalculateOddsAction)($bettingRound, $bet);
        $bet->payout = $payout['betPayout'];
        $bet->winnings_processed_at = now();
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} Bet Amount = {$bet->bet_amount} Payout :: ", $payout);
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$player->id} {$player->name} Current balance is $currentBalance");
        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$player->id} {$player->name} Won and will receive {$bet->payout}");

        $transaction = $playerWallet->depositFloat($payout['betPayout'], [
            'betting_round_id' => $bettingRound->id,
            'previous_balance' => $currentBalance,
            'bet_id' => $bet->id,
            'type' => 'win'
        ]);
        $bet->gain_loss = $payout['betPayout'];
        $bet->save();
        $bet->refresh();

        logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} User#{$player->id} {$player->name} New balance is now {$playerWallet->balanceFloat}");
        activity('player winnings')
            ->causedBy($bettingRound)
            ->performedOn($player)
            ->withProperties(['bet' => $bet->id, 'betAmount' => $bet->bet_amount,'payout' => $payout, 'previous_balance' => $currentBalance, 'new_balance' => $player->balanceFloat])
            ->log("Player#{$player->id} {$player->name} with balance of $currentBalance won {$payout['betPayout']} in Betting Round #$bettingRound->id. New Balance is {$player->balanceFloat}");
        return $transaction;
    }
}
