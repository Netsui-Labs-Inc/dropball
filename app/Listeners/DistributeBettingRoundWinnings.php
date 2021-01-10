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
        $this->processCompanyCommission($bettingRound, $payout);
        $this->processMasterAgentCommission($bettingRound, $bet->user, $payout);
    }

    public function payout($bet)
    {
        /** @var BettingRound $bettingRound */
        $bettingRound = $bet->bettingRound;
        $totalMeron = $bettingRound->totalBetType('meron');
        $totalWala = $bettingRound->totalBetType('wala');

        $meronPayout = ($totalMeron * $bet->bet_amount) / $totalWala;
        $meronPayout = $meronPayout - ($meronPayout * .10);

        $walaPayout = ($totalWala * $bet->bet_amount) / $totalMeron;
        $walaPayout = $walaPayout - ($walaPayout * .10);

        return $bet->bet === 'meron' ? $meronPayout :$walaPayout;
    }

    public function processMasterAgentCommission(BettingRound $bettingRound, User $bettingRounder, $payout)
    {
        $masterAgent = $bettingRounder->masterAgent;
        $commission = $payout * .01;
        logger("Master agent will receive $commission from BettingRound #{$bettingRound->id}");
        $bettingRound->forceTransferFloat($masterAgent, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $bettingRounder->id]);
    }

    public function processCompanyCommission(BettingRound $bettingRound, $payout)
    {
        $company = Company::first();
        $commission = $payout * .09;
        if ($commission > 0) {
            logger("Transferring amount of $commission to Company");
            $bettingRound->forceTransferFloat($company, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true]);
        }
    }

    public function processLosers($bet)
    {
        $bet->update([
            'status' => 'lose',
            'gain_loss' => $bet->bet_amount * -1,
        ]);
    }
}
