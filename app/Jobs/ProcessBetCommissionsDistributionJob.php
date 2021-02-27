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

class ProcessBetCommissionsDistributionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;
    public $bets;

    /**
     * Create a new job instance.
     *
     * @param $bets
     * @param BettingRound $bettingRound
     */
    public function __construct($bets, BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
        $this->bets = $bets;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //update bets status
        $bettingRound = $this->bettingRound;

        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
                logger("BettingRound#{$bettingRound->id} Current Pool Money {$bettingRound->balanceFloat}");
                $this->processWinners($bet);
                logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetWinningsCommissionsDistributionJob.error = ".$e->getMessage());
                DB::rollBack();
            }
        }
    }

    public function processWinners($bet)
    {
        $bettingRound = $this->bettingRound;
        $operator = $this->processOperatorCommission($bet);
        logger("BettingRound#{$bettingRound->id} New Pool Money Balance {$bettingRound->balanceFloat}");
        $this->processMasterAgentCommission($bet, $operator);
        $this->processDevelopersCommission($bet);
    }

    public function payout(Bet $bet)
    {
        return getPayout($bet->bet_amount);
    }

    public function processMasterAgentCommission(Bet $bet, Company $operator)
    {
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }
        $rate = .02;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;

        logger("BettingRound#{$bettingRound->id} Master agent  #{$masterAgent->id} {$masterAgent->name} will receive 2%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $transaction = $operator->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");

        $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);

        $this->processMasterAgentReferredCommission($bet, $masterAgent);
    }

    public function processMasterAgentReferredCommission(Bet $bet, User $masterAgent)
    {
        if ($masterAgent->hasRole('Player') && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $operator = $this->getOperator();
            $masterAgentReferred = $masterAgent->masterAgent;
            $bettingRound = $bet->bettingRound;
            $rate = 0.01;
            $commission = $bet->bet_amount * $rate;
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} referral will receive $commission from Operator");
            $masterAgentReferredWallet = $this->getWallet($masterAgentReferred, 'Income Wallet');
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} current balance {$masterAgentReferredWallet->balanceFloat}");
            $transaction = $operator->forceTransfer($masterAgentReferredWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} new balance {$masterAgentReferredWallet->balanceFloat}");
            $this->createCommission($bet, $masterAgentReferred, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid , 'sponsor_master_agent' => $masterAgent->id]);
        }
    }

    public function processOperatorCommission(Bet $bet)
    {
        $operator = $this->getOperator();
        $rate = .10;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;
        if ($commission > 0) {
            logger("BettingRound#{$bettingRound->id} Operator Current balance is {$operator->balanceFloat}");
            logger("BettingRound#{$bettingRound->id} Transferring amount of $commission to Operator");
            $transaction = $bettingRound->forceTransferFloat($operator, $commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true]);
            logger("BettingRound#{$bettingRound->id} Operator new balance is {$operator->balanceFloat}");
        }

        return $operator;
    }

}
