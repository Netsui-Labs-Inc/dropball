<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Brick\Math\BigDecimal;
use DB;
use Cache;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessMasterAgentCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;
    public $isSubAgent = false;
    public User $masterAgent;

    public $tries = 25;

    /**
     * ProcessMasterAgentCommissionJob constructor.
     * @param Bet $bet
     * @param false $isSubAgent
     */
    public function __construct(Bet $bet, $isSubAgent = false)
    {
        $this->bet = $bet;
        $masterAgent = $bet->user->masterAgent;

        $this->isSubAgent = $isSubAgent;

        if($this->isSubAgent) {
            $this->masterAgent = $masterAgent->masterAgent;
        } else {
            $this->masterAgent = $masterAgent;
        }
    }

    public function backoff()
    {
        return [1, 5, 10, 30];
    }

    public function middleware()
    {
        return [(new WithoutOverlapping("bet-".$this->bet->id."-master-agent-".$this->masterAgent->id))->dontRelease()];
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

    public function uniqueVia()
    {
        return Cache::driver('database');
    }

    public function handle()
    {
        $player = $this->bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }

        if($this->isSubAgent) {
            $this->subAgent();
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
        $rate = BigDecimal::of(($masterAgent->commission_rate / 100) ?? .01)->toFloat();
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();
        try {
            DB::beginTransaction();
            logger("ProcessMasterAgentCommissionJob.masterAgent BettingRound#{$bettingRound->id}  Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
            $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
            $masterAgentWallet->refreshBalance();
            $currentBalance = $masterAgentWallet->balanceFloat;
            $masterAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
            $rate = BigDecimal::of($rate * 100)->toFloat();
            $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate,  []);

            activity('agent commissions')
                ->performedOn($masterAgent)
                ->causedBy($bettingRound)
                ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $player->id, 'previous_balance' => $currentBalance, 'new_balance' => $masterAgentWallet->balanceFloat])
                ->log("Master Agent #{$masterAgent->id} {$masterAgent->name} with balance of $currentBalance received $rate%($commission) commission. New Balance is {$masterAgentWallet->balanceFloat}");

            DB::commit();
        } catch (\Exception $exception) {
            logger("ProcessMasterAgentCommissionJob.masterAgent BettingRound#{$bettingRound->id}  Master Agent #{$masterAgent->id} ".$exception->getMessage());
            DB::rollBack();
        }

    }

    public function subAgent()
    {
        $player = $this->bet->user;
        $masterAgent = $player->masterAgent;
        if(!$masterAgent->masterAgent) {
            return;
        }
        $parentAgent = $masterAgent->masterAgent;
        $bettingRound = $this->bet->bettingRound;
        $bet = $this->bet;
        $rate = BigDecimal::of(0.0025 )->toFloat();

        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();
        try {
            DB::beginTransaction();
            logger("ProcessSubAgentCommissionJob.subAgent BettingRound#{$bettingRound->id} Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} referral will receive $commission from Sub agent#{$masterAgent->id}");
            $parentAgentWallet = $this->getWallet($parentAgent, 'Income Wallet');
            $parentAgentWallet->refreshBalance();
            $currentBalance = $parentAgentWallet->balanceFloat();
            $parentAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
            $rate = BigDecimal::of($rate * 100)->toFloat();

            $this->createCommission($bet, $masterAgent, 'referred_master_agent', $commission, $rate,  ['sub_agent_id' => $masterAgent->id]);

            activity('agent referral commissions')
                ->performedOn($masterAgent)
                ->causedBy($bettingRound)
                ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $masterAgent->id, 'previous_balance' => $currentBalance,'new_balance' => $parentAgentWallet->balanceFloat])
                ->log("Master Agent #{$masterAgent->id} {$masterAgent->name} with balance of $currentBalance received $rate%($commission) commission from his Sub Agent#{$masterAgent->nanme}. New Balance is {$parentAgentWallet->balanceFloat}");

            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            logger("ProcessSubAgentCommissionJob.subAgent BettingRound#{$bettingRound->id}  Master Agent #{$masterAgent->id} ".$exception->getMessage());
        }
    }

    /**
     * Handle a job failure.
     *
     * @param  \Throwable  $exception
     * @return void
     */
    public function failed(\Throwable $exception)
    {
        // Send user notification of failure, etc...
        logger("ProcessAgentCommissionJob ERROR :: Bet#".$this->bet->id." ".$exception->getMessage());
    }

}
