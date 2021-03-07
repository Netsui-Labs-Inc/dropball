<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
use App\Jobs\Traits\WalletAndCommission;
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
        $this->processLosers($bettingRound);

        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
                logger("BettingRound#{$bettingRound->id} Current Pool Money {$bettingRound->balanceFloat}");
                $this->processCommissions($bet);
                logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetWinningsCommissionsDistributionJob.error = ".$e->getMessage());
                DB::rollBack();
            }
        }
    }

    public function processCommissions($bet)
    {
        $bettingRound = $this->bettingRound;

        logger("BettingRound#{$bettingRound->id} New Pool Money Balance {$bettingRound->balanceFloat}");
        $hasReferredAgent = $this->processMasterAgentCommission($bet);

        $this->processDevelopersCommission($bet);

        $this->processOperatorCommission($bet, $hasReferredAgent);

    }

    public function payout(Bet $bet)
    {
        return getPayout($bet->bet_amount);
    }

    public function processMasterAgentCommission(Bet $bet)
    {
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }
        $rate = .01;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;

        logger("BettingRound#{$bettingRound->id} Master agent  #{$masterAgent->id} {$masterAgent->name} will receive 1%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $transaction = $bettingRound->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");

        $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);

        $this->processHubCommission($bet, $masterAgent->hub);

        return $this->processMasterAgentReferredCommission($bet, $masterAgent);

    }

    public function processMasterAgentReferredCommission(Bet $bet, User $masterAgent)
    {
        if ($masterAgent->hasRole('Player') && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $masterAgentReferred = $masterAgent->masterAgent;
            $bettingRound = $bet->bettingRound;
            $rate = 0.01;
            $commission = $bet->bet_amount * $rate;
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} referral will receive $commission from Operator");
            $masterAgentReferredWallet = $this->getWallet($masterAgentReferred, 'Income Wallet');
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} current balance {$masterAgentReferredWallet->balanceFloat}");
            $transaction = $bettingRound->forceTransfer($masterAgentReferredWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} new balance {$masterAgentReferredWallet->balanceFloat}");
            $this->createCommission($bet, $masterAgentReferred, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid , 'sponsor_master_agent' => $masterAgent->id]);

            return true;
        }

        return false;
    }

    public function processOperatorCommission(Bet $bet, $hasReferredAgent = false)
    {
        $operator = $this->getOperator();
        $rate = $hasReferredAgent ? .06 : .07;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;
        if ($commission > 0) {
            logger("BettingRound#{$bettingRound->id} Operator Current balance is {$operator->balanceFloat}");
            logger("BettingRound#{$bettingRound->id} Transferring amount of $commission to Operator");
            $transaction = $bettingRound->forceTransferFloat($operator, $commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true]);
            logger("BettingRound#{$bettingRound->id} Operator new balance is {$operator->balanceFloat}");
        }

        $this->createCommission($bet, $operator, 'operator', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);

        return $operator;
    }

    public function processLosers(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', '!=', $bettingRound->result)->update([
            'status' => 'lose',
            'gain_loss' => DB::raw('-1 * bets.bet_amount'),
        ]);
    }

    public function processHubCommission(Bet $bet, Hub $hub)
    {
        $rate = .01;
        $player = $bet->user;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;

        logger("BettingRound#{$bettingRound->id} Hub  #{$hub->id} {$hub->name} will receive 1%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}");
        $hubWallet = $this->getWallet($hub, 'Income Wallet');
        $transaction = $bettingRound->forceTransferFloat($hubWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        logger("BettingRound#{$bettingRound->id} Hub #{$hub->id} {$hub->name}  new balance {$hubWallet->balanceFloat}");

        $this->createCommission($bet, $hub, 'hub', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);
    }
}
