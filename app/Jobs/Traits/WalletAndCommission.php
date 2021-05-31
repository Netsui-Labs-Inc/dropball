<?php

namespace App\Jobs\Traits;

use App\Domains\Bet\Models\Bet;
use App\Jobs\TransferToWalletJob;
use App\Models\Company;
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
        $developer = $this->getDevelopers();
        $bettingRound = $bet->bettingRound;
        $rate = 0.01;
        $commission = $bet->bet_amount * $rate;

        try {
            DB::beginTransaction();;
            logger("ProcessDevelopersCommission BettingRound#{$bettingRound->id} Bet#{$bet->id} Developers Current Balance is {$developer->balanceFloat}");
            logger("ProcessDevelopersCommission BettingRound#{$bettingRound->id}  Bet#{$bet->id}  Developers will receive 1%($commission) commission  from Player#{$bet->user->id} bet of {$bet->bet_amount}");
            TransferToWalletJob::dispatch($bet, $developer, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $bet->user->id])->onQueue('commissions');

            logger("ProcessDevelopersCommission BettingRound#{$bettingRound->id} Bet#{$bet->id} Developers New Balance is {$developer->balanceFloat}");
            $this->createCommission($bet, $developer, 'system', $commission, $rate * 100);
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
