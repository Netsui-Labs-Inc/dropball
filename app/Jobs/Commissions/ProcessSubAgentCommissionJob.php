<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;
use DB;

class ProcessSubAgentCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
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
        return "master-agent-".$this->bet->user->masterAgent->id;
    }

    public function handle()
    {
        $bet = $this->bet;
        $player = $this->bet->user;
        $subAgent = $player->masterAgent;
        if (! $subAgent) {
            return;
        }
        if ($subAgent->hasRole('Master Agent') && $subAgent->masterAgent) {
            $masterAgent = $subAgent->masterAgent;
            $bettingRound = $bet->bettingRound;
            $rate = 0.0025;
            $commission = $bet->bet_amount * $rate;
            logger("ProcessSubAgentCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} referral will receive $commission from Sub agent#{$subAgent->id}");
            $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
//            TransferToWalletJob::dispatch($bet, $masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true])->onQueue('commissions');
            $masterAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
            $rate = $rate * 100;

            $this->createCommission($bet, $masterAgent, 'referred_master_agent', $commission, $rate,  ['sub_agent_id' => $subAgent->id]);

            activity('commissions')
                ->performedOn($masterAgent)
                ->causedBy($bet)
                ->withProperties(['bet' => $bet, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $subAgent->id, 'balance' => $masterAgent->balanceFloat])
                ->log("Sub Agent #{$masterAgent->id} {$masterAgent->name} received $rate%($commission) commission. New Balance is {$masterAgent->balanceFloat}");

        }
    }
}
