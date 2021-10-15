<?php

namespace App\Domains\BettingRound\Actions\Commission;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\CommissionRate;
use Brick\Math\BigDecimal;

use DB;

class Hub
{
    use WalletAndCommission;

    public function __invoke(Bet $bet)
    {
        if($bet->commissions()->where('type', 'hub')->exists()) {
            return true;
        }
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        /** @var Hub $hub */
        $hub = $player->hub;
        $bettingRound = $bet->bettingRound;

        $percentage = $this->getCommissionRate($hub, $masterAgent);

        $rate = ($percentage / 100) ?? 0.01;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        $hubWallet = $this->getWallet($hub, 'Income Wallet');
        $hubWallet->refreshBalance();
        $currentBalance = $hubWallet->balanceFloat;
        $hubWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'previous_balance' => $currentBalance,  'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        $rate = BigDecimal::of($rate * 100)->toFloat();

        $commissionModel = $this->createCommission($bet, $hub, 'hub', $commission, $rate,  []);
        $properties = ['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'from_referral' => $player->id, 'previous_balance' => $currentBalance, 'new_balance' => $hubWallet->balanceFloat];
        logger("ProcessHubCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Hub #{$hub->id} {$hub->name} will receive $percentage%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}", $properties);
        activity('hub commissions')
            ->performedOn($hub)
            ->causedBy($bettingRound)
            ->withProperties($properties)
            ->log("Hub with balance of $currentBalance received $rate%($commission) commission. New Balance is {$hubWallet->balanceFloat}");

        return $commissionModel;
    }

    private function getCommissionRate($hub, $agent)
    {

        $query = CommissionRate::where('hub_id', $hub->id);

        if ($agent->referred_by)
        {
            $query->where('master_agent_id', $agent->referred_by);
        }
        else
        {
            $query->where('master_agent_id', $agent->id);
        }

        return number_format($query->get()->first()->commission_rate * $hub->commission_rate, 1);

    }
}
