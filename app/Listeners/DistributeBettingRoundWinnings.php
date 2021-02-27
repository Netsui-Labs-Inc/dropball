<?php

namespace App\Listeners;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\ProcessBetLossesDistributionJob;
use App\Jobs\ProcessBetCommissionsDistributionJob;
use App\Jobs\ProcessBetWinningsDistributionJob;
use App\Jobs\ProcessOtherCommissionsJob;
use Str;

class DistributeBettingRoundWinnings
{
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

        if ($bettingRound->status == 'cancelled') {
            logger("BettingRound#{$bettingRound->id} was Cancelled");

            return $this->refund($bettingRound);
        }

        logger("BettingRound#{$bettingRound->id} Result ".strtoupper($bettingRound->betOption->name));
        logger("BettingRound#{$bettingRound->id} total pool money {$bettingRound->balanceFloat}");

        $totalPayouts = getPayout($bettingRound->totalBetType($bettingRound->result));
        logger("BettingRound#{$bettingRound->id} Total Payout $totalPayouts");


        //Process winnings
        logger("BettingRound#{$bettingRound->id} Processing Winners Payout");

        $bettingRound->bets()->where('bet', $bettingRound->result)->chunk(400, function ($bets) use ($bettingRound) {
            dispatch(new ProcessBetWinningsDistributionJob($bets, $bettingRound))->onQueue('winners');
        });

        logger("BettingRound#{$bettingRound->id} Processing Commissions");

        $bettingRound->bets()->chunk(400, function ($bets) use ($bettingRound) {
            dispatch(new ProcessBetCommissionsDistributionJob($bets, $bettingRound))->onQueue('commissions');
        });

        logger("BettingRound#{$bettingRound->id} Processing Other Commissions");

        dispatch(new ProcessOtherCommissionsJob($bettingRound))->onQueue('other-commissions');
    }

    public function transferTheRemainingToOperator(BettingRound $bettingRound)
    {
        $remainingMoney = $bettingRound->balanceFloat;

        logger("BettingRound#{$bettingRound->id} Transferring the remaining money to Operator : $remainingMoney");

        $operator = $this->getOperator();

        $bettingRound->forceTransferFloat($operator, $remainingMoney,  ['betting_round_id' => $bettingRound->id]);
    }

    public function refund($bettingRound)
    {
        if (! $bettingRound->bets()->exists()) {
            return;
        }
        logger("BettingRound#{$bettingRound->id} result is Cancelled All bets will be refunded");

        foreach ($bettingRound->bets as $bet) {
            $bettingRound->forceTransferFloat($bet->user, $bet->bet_amount, ['betting_round_id' => $bettingRound->id, 'refund' => true]);
        }
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