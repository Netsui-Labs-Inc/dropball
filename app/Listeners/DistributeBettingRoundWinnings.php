<?php

namespace App\Listeners;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Company;

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

        if (in_array($bettingRound->result, ['draw','cancelled']) && $bettingRound->bets()->exists()) {
            return $this->refund($bettingRound);
        }

        foreach ($bettingRound->bets as $bet) {
            if ($bet->bet === $bettingRound->result) {
                $this->processWinners($bet);
            } else {
                $this->processLosers($bet);
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
        $payout = $this->payout($bet);
        $bet->update([
            'status' => 'win',
            'gain_loss' => $payout,
        ]);
        $bettingRound->forceTransferFloat($bet->user, $payout, ['betting_round_id' => $bettingRound->id]);
        $operator = $this->processOperatorCommission($bettingRound, $bet->bet_amount);
        $this->processMasterAgentCommission($bettingRound, $operator, $bet->user, $bet->bet_amount);
        $this->processDevelopersCommission($bettingRound, $operator, $bet->bet_amount);
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

        logger("Master agent will receive $commission from Operator #{$operator->id}");

        $operator->forceTransferFloat($masterAgent, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id]);

        if ($masterAgent->hasRole('Player') && $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent) {
            $commission = $bet * .01;
            logger("Master agent referral will receive $commission from Operator #{$operator->id}");
            $operator->forceTransfer($masterAgent->masterAgent, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'unilevel' => true]);
        }
    }

    public function processOperatorCommission(BettingRound $bettingRound, $bet)
    {
        $operator = $this->getOperator();
        $commission = $bet * .10;
        if ($commission > 0) {
            logger("Transferring amount of $commission to Operator");
            $bettingRound->forceTransferFloat($operator, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true]);
        }

        return $operator;
    }

    public function processDevelopersCommission(BettingRound $bettingRound, Company $operator, $bet)
    {
        $developers = $this->getDevelopers();
        $commission = $bet * .01;
        if ($commission > 0) {
            logger("Transferring amount of $commission to Developers");
            $operator->forceTransferFloat($developers, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true]);
        }
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
}
