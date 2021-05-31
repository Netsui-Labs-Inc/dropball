<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessBetBalanceJob implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
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
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "bet-".$this->bet->id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->bet->status === 'win') {
            $this->bet->withdrawFloat($this->bet->balanceFloat);
        }

        $this->bet->update([
            'commission_processed' => true,
            'other_commissions' => $this->bet->balanceFloat > 0 ? $this->bet->balanceFloat : 0,
        ]);
        logger("ProcessBetBalanceJob.handle :: Bet#{$this->bet->id} Balance ".$this->bet->balanceFloat);
    }
}
