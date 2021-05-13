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

    public $bets;

    /**
     * Create a new job instance.
     *
     * @param $bets
     * @param BettingRound $bettingRound
     */
    public function __construct($bets)
    {
        $this->bets = $bets;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->bets as $bet) {
            ProcessPlayerWinningsJob::dispatch($bet);
        }
    }
}
