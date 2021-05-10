<?php

namespace App\Listeners;

use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\ProcessBetCommissionsDistributionJob;
use App\Jobs\ProcessBetRefundJob;
use App\Jobs\ProcessBetWinningsDistributionJob;
use App\Jobs\ProcessOtherCommissionsJob;
use App\Jobs\Traits\WalletAndCommission;
use Str;

class DistributeBettingRoundWinnings
{
    use WalletAndCommission;
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

        if ($bettingRound->betOption->name != 'BOKYA') {
            //Process winnings
            logger("BettingRound#{$bettingRound->id} Processing Winners Payout");
            $bettingRound->bets()->where('bet', $bettingRound->result)->chunk(400, function ($bets) use ($bettingRound) {
                dispatch(new ProcessBetWinningsDistributionJob($bets, $bettingRound))->onQueue('winners');
            });
        }

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
            return true;
        }
        logger("BettingRound#{$bettingRound->id} result is Cancelled All bets will be refunded");

        $bettingRound->bets()->chunk(400, function ($bets) use ($bettingRound) {
            dispatch(new ProcessBetRefundJob($bets, $bettingRound));
        });

        return true;
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
