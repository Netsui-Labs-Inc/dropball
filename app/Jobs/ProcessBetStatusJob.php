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

class ProcessBetStatusJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;

    /**
     * Create a new job instance.
     *
     * @param BettingRound $bettingRound
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
        $this->updatePoolMoney($this->bettingRound);
        $this->updateWinners($this->bettingRound);
        $this->updateLosers($this->bettingRound);
    }

    public function updatePoolMoney(BettingRound $bettingRound)
    {
        $poolMoney = $bettingRound->bets()->sum('bet_amount');
        $bettingRound->update(['pool_money' => $poolMoney]);
    }

    public function updateWinners(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', $bettingRound->result)->update([
            'status' => 'win',
            'gain_loss' => DB::raw('(2 * bets.bet_amount) - (bets.bet_amount * .10)'),
        ]);
    }

    public function updateLosers(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', '!=', $bettingRound->result)->update([
            'status' => 'lose',
            'gain_loss' => DB::raw('-1 * bets.bet_amount'),
        ]);
    }

}
