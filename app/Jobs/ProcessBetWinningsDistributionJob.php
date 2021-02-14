<?php

namespace App\Jobs;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Company;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Str;

class ProcessBetWinningsDistributionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

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
        foreach ($this->bets as $bet) {
            DB::beginTransaction();

            try {
                $bettingRound = $this->bettingRound;
                logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");
                $this->processWinners($bet);
                logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessBetResultDistribution.error = ".$e->getMessage());

                DB::rollBack();
            }
        }
    }


    public function refund($bettingRound)
    {
        logger("BettingRound#{$bettingRound->id} result is {$bettingRound->result} All bets will be refunded");

        foreach ($bettingRound->bets as $bet) {
            $bettingRound->forceTransferFloat($bet->user, $bet->bet_amount, ['betting_round_id' => $bettingRound->id, 'refund' => true]);
        }
    }

    public function processWinners($bet)
    {
        /** @var BettingRound $bettingRound */
        $bettingRound = $bet->bettingRound;
        logger("BettingRound#{$bettingRound->id} Process Commission for winners");
        $payout = $this->payout($bet);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} won and will receive {$payout}");
        $bet->update(['status' => 'win', 'gain_loss' => $payout]);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} Current balance is {$bet->user->balanceFloat}");
        $bettingRound->forceTransferFloat($bet->user, $payout, ['betting_round_id' => $bettingRound->id]);
        logger("BettingRound#{$bettingRound->id} User#{$bet->user->id} {$bet->user->name} New balance is now {$bet->user->balanceFloat}");
        $operator = $this->processOperatorCommission($bettingRound, $bet->bet_amount);
        $this->processMasterAgentCommission($bettingRound, $operator, $bet->user, $bet->bet_amount);
    }

    public function payout($bet)
    {
        return getPayout($bet->bet_amount);
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

    public function processMasterAgentCommissionForLosers(BettingRound $bettingRound, User $player, $bet)
    {
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            logger("BettingRound#{$bettingRound->id} User#{$player->name} has no master agent");

            return;
        }
        logger("BettingRound#{$bettingRound->id} Process Commission for loss bets");
        $commission = $bet * .02;
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name} will receive 2%($commission) commission from Player#{$player->id} bet of {$bet}");
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $bettingRound->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id]);
        logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");
        $this->processMasterAgentReferredCommission($bettingRound, $masterAgent, $bet);
    }

    public function processMasterAgentReferredCommission(BettingRound $bettingRound, User $masterAgent, $bet)
    {
        if ($masterAgent->hasRole('Player') && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $operator = $this->getOperator();
            $masterAgentReferred = $masterAgent->masterAgent;
            $commission = $bet * .01;
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} referral will receive $commission from Operator");
            $masterAgentReferredWallet = $this->getWallet($masterAgentReferred, 'Income Wallet');
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} current balance {$masterAgentReferredWallet->balanceFloat}");
            $operator->forceTransfer($masterAgentReferredWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'unilevel' => true]);
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} new balance {$masterAgentReferredWallet->balanceFloat}");
        }
    }

    public function processOperatorCommission(BettingRound $bettingRound, $bet)
    {
        $operator = $this->getOperator();
        $commission = $bet * .10;
        if ($commission > 0) {
            logger("BettingRound#{$bettingRound->id} Transferring amount of $commission to Operator");
            logger("BettingRound#{$bettingRound->id} Operator Current balance is {$operator->balanceFloat}");
            $bettingRound->forceTransferFloat($operator, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true]);
            logger("BettingRound#{$bettingRound->id} Operator new balance is {$operator->balanceFloat}");
        }

        return $operator;
    }

    public function processDevelopersCommission(BettingRound $bettingRound, Company $operator, $bet)
    {
        $developers = $this->getDevelopers();
        $commission = $bet * .01;
        if ($commission > 0) {
            logger("BettingRound#{$bettingRound->id} Transferring amount of $commission to Developers");
            $operator->forceTransferFloat($developers, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true]);
        }
        logger("BettingRound#{$bettingRound->id} Developers new Balance {$developers->balanceFloat}");
    }

    public function processLosers($bet)
    {
        $bet->update([
            'status' => 'lose',
            'gain_loss' => $bet->bet_amount * -1,
        ]);
    }

    public function getOperator()
    {
        return Company::firstOrCreate(['name' => 'Operator']);
    }

    public function getDevelopers()
    {
        return Company::firstOrCreate(['name' => 'Developers']);
    }

    public function getWallet($walletHolder, $walletName)
    {
        $walletSlug = Str::kebab($walletName);
        if ($walletHolder->hasWallet($walletSlug)) {
            return $walletHolder->getWallet($walletSlug);
        }

        return $walletHolder->createWallet([
            'name' => $walletName,
            'slug' => $walletSlug,
        ]);
    }
}
