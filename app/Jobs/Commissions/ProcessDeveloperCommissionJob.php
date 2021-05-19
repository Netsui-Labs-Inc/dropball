<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessDeveloperCommissionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bet;

    /**
     * ProcessDeveloperCommissionJob constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
    }

    public function middleware()
    {
        $developer = $this->getDevelopers();

        return [
            new WithoutOverlapping($developer->id, 3),
        ];
    }
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->processDevelopersCommission($this->bet);
    }
}
