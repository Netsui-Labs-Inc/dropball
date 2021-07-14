<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Actions\GetWinningStreakAction;
use App\Domains\Bet\Models\Bet;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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
        /** @var User $player */
        $player = $this->bet->user;
        $winningStreak = (new GetWinningStreakAction)($player);
        logger("SetPlayerWinningStreakJob.handle :: Player#{$player->id} {$player->name} winning streak is $winningStreak");
        $player->winning_streak = $winningStreak;
        $player->update();
        if($winningStreak === 5) {
            AddEntryToJackpotRoundJob::dispatch($this->bet);
        }
    }
}
