<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessBetBalanceJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bet;

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
        logger("ProcessBetBalanceJob.handle :: Bet#{$this->bet->id} Balance ".$this->bet->balance);
        $this->bet->update([
            'commission_processed' => true,
            'other_commissions' => $this->bet->balance > 0 ? $this->bet->balance : 0,
      ]);
    }
}
