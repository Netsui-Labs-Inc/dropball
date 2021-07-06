<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessJackpotWinnersJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public BettingRound $bettingRound;

    /**
     * Create a new job instance.
     *
     * @param $bettingRound
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        /** @var BettingEvent $bettingEvent */
        $bettingEvent = $this->bettingRound->bettingEvent;
        /** @var Jackpot $activeJackpot */
        $activeJackpot = $bettingEvent->activeJackpot();
        if($activeJackpot) {
            $activeJackpot->update(['status' => 'ended']);
        }

        User::update(['winning_streak' => 0]);

        // Flash Winners
    }
}
