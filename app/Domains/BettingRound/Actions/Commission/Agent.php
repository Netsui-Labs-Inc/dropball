<?php

namespace App\Domains\BettingRound\Actions\Commission;

use App\Domains\Auth\Models\User;
use DB;
use App\Jobs\Traits\WalletAndCommission;
use App\Domains\Bet\Models\Bet;
use App\Domains\Hub\Models\Hub;
use Brick\Math\BigDecimal;

class Agent
{
    use WalletAndCommission;

    public function __invoke(Bet $bet)
    {
        if($bet->commissions()->where('type', 'master_agent')->exists()) {
            return true;
        }
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return true;
        }

        $agentRole = 'Master Agent';
        $hubRate = Hub::where('id', $masterAgent->hub_id)->get()->first()->commission_rate;
        $commissionRate = number_format($hubRate * $masterAgent->commission_rate, 1);
        if ($masterAgent->referred_by)
        {
            $parentAgent = User::where('id', $masterAgent->referred_by)
                                ->get()
                                ->first();
            $parentAgentRate = number_format($hubRate * $parentAgent->commission_rate, 1);
            $commissionRate = number_format($parentAgentRate * $masterAgent->commission_rate, 1);
            $agentRole = "Agent";
        }

        $bettingRound = $bet->bettingRound;
        $rate = BigDecimal::of(($commissionRate / 100) ?? .01)->toFloat();
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        logger("ProcessMasterAgentCommissionJob.masterAgent BettingRound#{$bettingRound->id}  Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgent->refresh();
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $masterAgentWallet->refreshBalance();
        $currentBalance = $masterAgentWallet->balanceFloat;
        $masterAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        $rate = BigDecimal::of($rate * 100)->toFloat();
        $commissionModel = $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate,  []);

        activity($agentRole. ' commissions')
            ->performedOn($masterAgent)
            ->causedBy($bettingRound)
            ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $player->id, 'previous_balance' => $currentBalance, 'new_balance' => $masterAgentWallet->balanceFloat])
            ->log("$agentRole #{$masterAgent->id} {$masterAgent->name} with balance of $currentBalance received $rate%($commission) commission. New Balance is {$masterAgentWallet->balanceFloat}");

        return $commissionModel;
    }
}
