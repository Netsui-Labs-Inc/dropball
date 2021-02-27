<?php

namespace App\Jobs\Traits;

use App\Domains\Bet\Models\Bet;
use App\Models\Company;
use Str;

trait WalletAndCommission
{
    public function getOperator()
    {
        return Company::firstOrCreate(['name' => 'Operator']);
    }

    public function getDevelopers()
    {
        return Company::firstOrCreate(['name' => 'System']);
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

    public function processDevelopersCommission(Bet $bet)
    {
        $developer = $this->getDevelopers();
        $operator = $this->getOperator();
        $bettingRound = $bet->bettingRound;
        $rate = 0.01;
        $commission = $bet->bet_amount * $rate;
        logger("BettingRound#{$bettingRound->id} Developers Current Balance is {$developer->balanceFloat}");
        logger("BettingRound#{$bettingRound->id} Developers will receive 1%($commission) commission  from Player#{$bet->user->id} bet of {$bet->bet_amount}");
        $operator->forceTransferFloat($developer, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $bet->user->id]);
        logger("BettingRound#{$bettingRound->id} Developers New Balance is {$developer->balanceFloat}");
        $this->createCommission($bet, $developer, 'system', $commission, $rate * 100);
    }

    public function createCommission(Bet $bet, $commissionable, $type, $amount, $rate, $meta = null)
    {
        $commissionable->commissions()->create([
            'type' => $type,
            'amount' => $amount,
            'rate' => $rate,
            'bet_id' => $bet->id,
            'meta' => $meta,
        ]);
    }
}
