<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use DB;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;

class ProcessMasterAgentCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;

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
        return [
            (new WithoutOverlapping("bet-".$this->bet->id))->dontRelease(),
        ];
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

    public function handle()
    {
        $bet = $this->bet;
        $player = $this->bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }
        $bettingRound = $bet->bettingRound;
        $rate = ($masterAgent->commission_rate / 100) ?? .01;
        $commission = $bet->bet_amount * $rate;

        logger("ProcessMasterAgentCommissionJob BettingRound#{$bettingRound->id}  Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        TransferToWalletJob::dispatch($bet, $masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id])->onQueue('commissions');
        $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate * 100,  []);
    }

    public function fail($exception = null)
    {
        DB::rollBack();
        logger("ProcessMasterAgentCommissionJob.error =".$exception->getMessage());
    }
}
