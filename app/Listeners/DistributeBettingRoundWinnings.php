<?php

namespace App\Listeners;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Company;
use Str;

class DistributeBettingRoundWinnings
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        /** @var BettingRound $bettingRound */
        $bettingRound = $event->bettingRound;
        logger("BettingRound#{$bettingRound->id} Result ".strtoupper($bettingRound->betOption->name));
        logger("BettingRound#{$bettingRound->id} total pool money {$bettingRound->balanceFloat}");

        if (in_array($bettingRound->result, ['draw','cancelled']) && $bettingRound->bets()->exists()) {
            return $this->refund($bettingRound);
        }

        $totalPayouts = getPayout($bettingRound->totalBetType($bettingRound->result));
        logger("BettingRound#{$bettingRound->id} Total Payout $totalPayouts");

        foreach ($bettingRound->bets as $bet) {
            logger("\n------------------ START USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------");

            if ($bet->bet === $bettingRound->result) {
                $this->processWinners($bet);
            } else {
                logger("BettingRound#{$bettingRound->id} Player#{$bet->user->id} {$bet->user->name} Loss {$bet->bet_amount} ");
                $this->processLosers($bet);
                $this->processMasterAgentCommissionForLosers($bettingRound, $bet->user, $bet->bet_amount);
            }
            logger("------------------ END USER#{$bet->user->id} BettingRound#{$bettingRound->id} -------------\n");
        }
        // 1% to developers
        $this->processDeveloperCommissionFromPoolMoney($bettingRound);
        // give the rest to the operator
        $this->transferTheRemainingToOperator($bettingRound);
    }

    public function transferTheRemainingToOperator(BettingRound $bettingRound)
    {
        $remainingMoney = $bettingRound->balanceFloat;

        logger("BettingRound#{$bettingRound->id} Transferring the remaining money to Operator : $remainingMoney");

        $operator = $this->getOperator();

        $bettingRound->forceTransferFloat($operator, $remainingMoney,  ['betting_round_id' => $bettingRound->id]);
    }

    public function processDeveloperCommissionFromPoolMoney(BettingRound $bettingRound)
    {
        $developer = $this->getDevelopers();
        $commission = $bettingRound->balanceFloat * .01;
        logger("BettingRound#{$bettingRound->id} Transferring the 1% money to Developer from pool money ({$bettingRound->balanceFloat}) : $commission");
        $bettingRound->forceTransferFloat($developer, $commission,  ['betting_round_id' => $bettingRound->id]);
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
            $masterAgentReferred = $masterAgent->masterAgent;
            $commission = $bet * .01;
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} referral will receive $commission from Operator #{$operator->id}");
            $masterAgentReferredWallet = $this->getWallet($masterAgentReferred, 'Income Wallet');
            logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgentReferred->id} {$masterAgentReferred->name} current balance {$masterAgentReferredWallet->balanceFloat}");
            $operator->forceTransfer($masterAgentReferredWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'unilevel' => true]);
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

    public function hasWinningBet($userBets, $bettingRound)
    {
        return $userBets->contains('bet', '=',  $bettingRound->result);
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
