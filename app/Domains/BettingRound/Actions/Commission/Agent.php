<?php

namespace App\Domains\BettingRound\Actions\Commission;

use DB;
use App\Jobs\Traits\WalletAndCommission;
use App\Domains\Bet\Models\Bet;
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
        $bettingRound = $bet->bettingRound;
        $rate = BigDecimal::of(($masterAgent->commission_rate / 100) ?? .01)->toFloat();
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        logger("ProcessMasterAgentCommissionJob.masterAgent BettingRound#{$bettingRound->id}  Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");
        $masterAgent->refresh();
        $masterAgentWallet = $this->getWallet($masterAgent, 'Income Wallet');
        $currentBalance = $masterAgentWallet->balanceFloat;
        $masterAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        $rate = BigDecimal::of($rate * 100)->toFloat();
        $commission = $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate,  []);

        activity('agent commissions')
            ->performedOn($masterAgent)
            ->causedBy($bettingRound)
            ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $player->id, 'previous_balance' => $currentBalance, 'new_balance' => $masterAgentWallet->balanceFloat])
            ->log("Master Agent #{$masterAgent->id} {$masterAgent->name} with balance of $currentBalance received $rate%($commission) commission. New Balance is {$masterAgentWallet->balanceFloat}");

        return $commission;
    }
}
