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
            $winningStreak = (new GetWinningStreakAction)($player);
            logger("SetPlayerWinningStreakJob.handle :: Player#{$player->id} {$player->name} winning streak is $winningStreak");
            $player->winning_streak = $winningStreak;
            $player->update();
            if($winningStreak === 5) {
                /** @var User $player */
                $player = $this->bet->user;
                $bettingRound = $this->bet->bettingRound;
                /** @var BettingEvent $bettingEvent */
                $bettingEvent = $bettingRound->bettingEvent;
                /** @var Jackpot $activeJackpot */
                $activeJackpot = $bettingEvent->activeJackpot();
                if(!$activeJackpot) {
                    return;
                }
                logger("AddEntryToJackpotRound.handle Player#{$player->id} won the jackpot");
                $activeJackpot->winners()->create([
                    'user_id' => $player->id,
                ]);
            }
            DB::commit();
        } catch (\Exception $e) {
            \Sentry::captureLastError();
            DB::rollBack();
        }

    }
}
