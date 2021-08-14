<?php

namespace App\Domains\BettingRound\Actions\Commission;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use Brick\Math\BigDecimal;
use DB;

class Developer
{
    use WalletAndCommission;

    public function __invoke(Bet $bet)
    {
        if($bet->commissions()->where('type', 'system')->exists()) {
            return true;
        }
        /** @var Company $developer */
        $developer = $this->getDevelopers();
        $bettingRound = $bet->bettingRound;
        $rate = 0.01;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        $developer->refresh();
        $developerWallet = $this->getWallet($developer, 'Income Wallet');
        logger("ProcessDevelopersCommission BettingRound#{$bettingRound->id} Bet#{$bet->id} Developers will receive 1%($commission) commission from Player#{$bet->user->id} bet of {$bet->bet_amount}");
        $currentBalance = $developerWallet->balanceFloat;
        $developerWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $bet->user->id, 'previous_balance' => $currentBalance]);

        $rate = BigDecimal::of($rate * 100)->toFloat();

        $this->createCommission($bet, $developer, 'system', $commission, $rate);
        activity('developer commissions')
            ->performedOn($developer)
            ->causedBy($bettingRound)
            ->withProperties(['bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'previous_balance' => $currentBalance, 'new_balance' => $developerWallet->balanceFloat])
            ->log("Developer #{$developer->id} with balance of $currentBalance received $rate%($commission) commission. New Balance is {$developerWallet->balanceFloat}");

    }
}
