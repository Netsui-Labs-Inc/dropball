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

class ProcessBetLossesDistributionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bettingRound;
    public $bets;
    /**
     * Create a new job instance.
     *
     * @return void
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
        $bettingRound = $this->bettingRound;

        $this->processLosers($bettingRound);

        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
                logger("BettingRound#{$bettingRound->id} Player#{$bet->user->id} {$bet->user->name} Loss {$bet->bet_amount} ");
                $this->processMasterAgentCommissionForLosers($bettingRound, $bet);
                logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetResultDistribution.error = ".$e->getMessage());

                DB::rollBack();
            }
        }
    }

    public function processMasterAgentCommission(BettingRound $bettingRound, Company $operator, User $player, $bet)
    {
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }

        $commission = $bet * .02;

        logger("BettingRound#{$bettingRound->id} Master agent  #{$masterAgent->id} {$masterAgent->name} will receive 2%($commission) commission  from Player#{$player->id} bet of {$bet}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $operator->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id]);
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");
        $this->processMasterAgentReferredCommission($bettingRound, $masterAgent, $bet);
    }

    public function processMasterAgentCommissionForLosers(BettingRound $bettingRound, Bet $bet)
    {
        $player = $bet->user;

        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            logger("BettingRound#{$bettingRound->id} User#{$player->name} has no master agent");

            return;
        }

        $operator = $this->getOperator();

        logger("BettingRound#{$bettingRound->id} Process Commission for loss bets");
        $rate = 0.02;
        $commission = $bet->bet_amount * $rate;
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name} will receive 2%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $transaction = $operator->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id]);
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");

        $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);

        $this->processMasterAgentReferredCommission($bettingRound, $masterAgent, $bet);
    }

    public function processMasterAgentReferredCommission(BettingRound $bettingRound, User $masterAgent, Bet $bet)
    {
        if ($masterAgent->hasRole('Player') && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $operator = $this->getOperator();
            $masterAgentReferred = $masterAgent->masterAgent;
            $rate = 0.01;
            $commission = $bet->bet_amount * $rate;
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} referral will receive $commission from Operator #{$operator->id}");
            $masterAgentReferredWallet = $this->getWallet($masterAgentReferred, 'Income Wallet');
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} current balance {$masterAgentReferredWallet->balanceFloat}");
            $transaction = $operator->forceTransfer($masterAgentReferredWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $masterAgent->id, 'unilevel' => true]);
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} new balance {$masterAgentReferredWallet->balanceFloat}");
            $this->createCommission($bet, $masterAgentReferred, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid, 'sponsor_master_agent' => $masterAgent->id]);
        }
    }

    public function processLosers(BettingRound $bettingRound)
    {
        $bettingRound->bets()->where('bet', '!=', $bettingRound->result)->update([
           'status' => 'lose',
           'gain_loss' => DB::raw('-1 * bets.bet_amount'),
        ]);
    }
}
