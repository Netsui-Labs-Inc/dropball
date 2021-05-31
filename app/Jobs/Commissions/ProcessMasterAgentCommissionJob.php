<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
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
    public $isSubAgent = false;
    public User $masterAgent;

    /**
     * ProcessDeveloperCommissionJob constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet, $isSubAgent = false)
    {
        $this->bet = $bet;
        $masterAgent = $bet->user->masterAgent;

        $this->isSubAgent = $isSubAgent;

        if($this->isSubAgent && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $this->masterAgent  = $masterAgent->masterAgent;
        } else {
            $this->masterAgent = $masterAgent;
        }
    }

    public function middleware()
    {
        return [
            (new WithoutOverlapping("master-agent-".$this->masterAgent->id))->dontRelease(),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "master-agent-".$this->masterAgent->id;
    }

    public function handle()
    {
        $player = $this->bet->user;
        $subAgent = $player->masterAgent;
        if (! $subAgent) {
            return;
        }

        if($this->isSubAgent) {
            if($subAgent->hasRole('Master Agent') && $subAgent->masterAgent) {
                $this->subAgent();
            }
            return;
        } else {
            $this->masterAgent();
        }
    }

    public function masterAgent()
    {
        $bet = $this->bet;
        $player = $this->bet->user;
        $masterAgent = $this->masterAgent;
        if (! $masterAgent) {
            return;
        }
        $bettingRound = $bet->bettingRound;
        $rate = ($masterAgent->commission_rate / 100) ?? .01;
        $commission = $bet->bet_amount * $rate;

        logger("ProcessMasterAgentCommissionJob BettingRound#{$bettingRound->id}  Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $masterAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        $rate = $rate * 100;
        $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate,  []);

        activity('commissions')
            ->performedOn($masterAgent)
            ->causedBy($bet)
            ->withProperties(['bet' => $bet, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $player->id, 'balance' => $masterAgent->balanceFloat])
            ->log("Master Agent #{$masterAgent->id} {$masterAgent->name} received $rate%($commission) commission. New Balance is {$masterAgent->balanceFloat}");
    }

    public function subAgent()
    {
        $masterAgent = $this->masterAgent;
        $bettingRound = $this->bet->bettingRound;
        $bet = $this->bet;
        $rate = 0.0025;
        $commission = $bet->bet_amount * $rate;
        logger("ProcessSubAgentCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} referral will receive $commission from Sub agent#{$subAgent->id}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
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
