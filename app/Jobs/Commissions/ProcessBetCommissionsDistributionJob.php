<?php

namespace App\Jobs\Commissions;

use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessBetCommissionsDistributionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;
    public $bets;

    /**
     * Create a new job instance.
     *
     * @param $bets
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

        }
    }

}
