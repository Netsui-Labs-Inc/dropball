<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AddEntryToJackpotRoundJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public Bet $bet;

    /**
     * Create a new job instance.
     *
     * @param $bet
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
}
