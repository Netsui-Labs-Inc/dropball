<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Actions\GetWinningStreakAction;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use DB;

class SetPlayerWinningStreakJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

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

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            DB::beginTransaction();
            $player = $this->bet->user;
            $winningStreak = (new GetWinningStreakAction)($player, $this->bet->bettingRound->bettingEvent);
            logger("SetPlayerWinningStreakJob.handle :: Player#{$player->id} {$player->name} winning streak is $winningStreak");
            $player->winning_streak = $winningStreak;
            $player->update();
            if($winningStreak >= config('dropball.jackpot.minimum_streak')) {
                $bettingRound = $this->bet->bettingRound;
                /** @var BettingEvent $bettingEvent */
                $bettingEvent = $bettingRound->bettingEvent;
                /** @var Jackpot $activeJackpot */
                $activeJackpot = $bettingEvent->activeJackpot;
                if(!$activeJackpot) {
                    return;
                }

                logger("AddEntryToJackpotRound.handle Player#{$player->id} won the jackpot");

                $activeWinner = $activeJackpot->winners()->where('user_id', $player->id)->first();

                if($activeWinner && $winningStreak > $activeWinner->winning_streak) {
                    $activeWinner->update(['winning_streak' => $winningStreak]);
                } else {
                    $activeJackpot->winners()->create(['user_id' => $player->id, 'winning_streak' => $winningStreak]);
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            \Sentry::captureLastError();
            DB::rollBack();
        }

    }
}
