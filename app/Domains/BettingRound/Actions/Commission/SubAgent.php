<?php


namespace App\Domains\BettingRound\Actions\Commission;


use App\Jobs\Traits\WalletAndCommission;
use DB;
use App\Domains\Bet\Models\Bet;
use Brick\Math\BigDecimal;

class SubAgent
{
    use WalletAndCommission;

    public function __invoke(Bet $bet)
    {
        if($bet->commissions()->where('type', 'referred_master_agent')->exists()) {
            return true;
        }

        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        if(!$masterAgent->masterAgent) {
            return false;
        }
        $parentAgent = $masterAgent->masterAgent;
        $bettingRound = $bet->bettingRound;
        $rate = BigDecimal::of(0.0025 )->toFloat();

        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        logger("ProcessSubAgentCommissionJob.subAgent #{$masterAgent->id} BettingRound#{$bettingRound->id} Bet#{$bet->id} Master Agent #{$parentAgent->id} {$parentAgent->name} referral will receive $commission from Sub agent#{$masterAgent->id}");
        $parentAgentWallet = $this->getWallet($parentAgent, 'Income Wallet');
        $currentBalance = $parentAgentWallet->balanceFloat;
        $parentAgentWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
        $rate = BigDecimal::of($rate * 100)->toFloat();

        $commission = $this->createCommission($bet, $masterAgent, 'referred_master_agent', $commission, $rate,  ['sub_agent_id' => $masterAgent->id]);

        activity('agent referral commissions')
            ->performedOn($masterAgent)
            ->causedBy($bettingRound)
            ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'from_referral' => $masterAgent->id, 'previous_balance' => $currentBalance,'new_balance' => $parentAgentWallet->balanceFloat])
            ->log("Master Agent #{$masterAgent->id} {$masterAgent->name} with balance of $currentBalance received $rate%($commission) of bet amount {$bet->bet_amount} commission from his Sub Agent#{$masterAgent->name}. New Balance is {$parentAgentWallet->balanceFloat}");

        return $commission;
}
}
