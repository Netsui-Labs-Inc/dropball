<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Cache;
class ProcessDeveloperCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;
    public Company $developer;

    /**
     * ProcessDeveloperCommissionJob constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
        $this->developer = $this->getDevelopers();
    }


    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "company-".$this->developer->id;
    }

    public function middleware()
    {
        return [new WithoutOverlapping($this->developer->id)];
    }


    public function uniqueVia()
    {
        return Cache::driver('database');
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
