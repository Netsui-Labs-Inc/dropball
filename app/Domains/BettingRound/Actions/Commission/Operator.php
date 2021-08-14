<?php


namespace App\Domains\BettingRound\Actions\Commission;


use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Brick\Math\BigDecimal;
use DB;
class Operator
{
    use WalletAndCommission;

    public function __invoke(Bet $bet)
    {
        if($bet->commissions()->where('type', 'operator')->exists()) {
            return true;
        }
        $operator = $this->getOperator();
        $operatorWallet = $this->getWallet($operator, 'Income Wallet');

        $rate = $this->hasSubAgent($bet->user) ? .0675 : .07;
        $bettingRound = $bet->bettingRound;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        if(!$commission) {
            return $operatorWallet;
        }

        $currentBalance = $operatorWallet->balanceFloat;
        $operatorWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'previous_balance' => $currentBalance, 'commission' => true]);
        $rate = BigDecimal::of($rate * 100)->toFloat();

        $commission = $this->createCommission($bet, $operator, 'operator', $commission, $rate,  []);

        $properties = ['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'commission' => $commission, 'previous_balance' => $currentBalance, 'new_balance' => $operatorWallet->balanceFloat];

        logger("ProcessOperatorCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Operator Current balance is {$operatorWallet->balanceFloat}", $properties);

        activity('operator commissions')
            ->performedOn($operator)
            ->causedBy($bet->bettingRound)
            ->withProperties($properties)
            ->log("Operator #{$operator->id} {$operator->name} with balance of $currentBalance received $rate%($commission) commission. New Balance is {$operatorWallet->balanceFloat}");

        return $commission;

    }
}
