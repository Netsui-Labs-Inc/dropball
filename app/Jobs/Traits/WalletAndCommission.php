<?php

namespace App\Jobs\Traits;

use App\Domains\Bet\Models\Bet;
use App\Jobs\TransferToWalletJob;
use App\Models\Company;
use Brick\Math\BigDecimal;
use Str;
use DB;
trait WalletAndCommission
{
    public function getOperator()
    {
        return Company::first();
    }

    public function getDevelopers()
    {
        return Company::where('name', 'System')->first();
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
        /** @var Company $developer */
        $developer = $this->getDevelopers();
        $bettingRound = $bet->bettingRound;
        $rate = 0.01;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        try {
            DB::beginTransaction();;
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
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
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
