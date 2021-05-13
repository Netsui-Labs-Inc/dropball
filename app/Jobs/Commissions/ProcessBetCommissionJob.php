<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;

class ProcessBetCommissionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;

    /**
     * Create a new job instance.
     *
     * @param $bets
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
        $bet = $this->bet;
        $this->processCommission($bet);
    }

    public function processCommission(Bet $bet)
    {
        Bus::dispatchChain([
            new ProcessMasterAgentCommissionJob($bet),
            new ProcessSubAgentCommissionJob($bet),
            new ProcessHubCommissionJob($bet),
            new ProcessDeveloperCommissionJob($bet),
            new ProcessOperatorCommissionJob($bet),
            function () use ($bet) {
                $bet->update([
                    'commission_processed' => true,
                    'other_commissions' => $bet->balance,
                ]);
            },
        ])->onQueue('commissions');
    }

}
