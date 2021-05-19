<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessOperatorCommissionJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public $bet;

    /**
     * ProcessDeveloperCommissionJob constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bet = $bet;
    }

    public function middleware()
    {
        $operator = $this->getOperator();

        return [
            new WithoutOverlapping("operator-".$operator->id, 3),
        ];
    }

    public function handle()
    {
        $operator = $this->getOperator();
        $bet = $this->bet;

        $rate = $this->hasSubAgent($bet->user) ? .0675 : .07;
        $bettingRound = $bet->bettingRound;
        $commission = $bet->bet_amount * $rate;
        if ($commission > 0) {
            logger("BettingRound#{$bettingRound->id} Operator Current balance is {$operator->balanceFloat}");
            logger("BettingRound#{$bettingRound->id} Transferring amount of $commission to Operator");
            $transaction = $bet->forceTransferFloat($operator, $commission, ['betting_round_id' => $bettingRound->id, 'bet' => $bet->id, 'commission' => true]);
            logger("BettingRound#{$bettingRound->id} Operator new balance is {$operator->balanceFloat}");
        }

        $this->createCommission($bet, $operator, 'operator', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);

        $bettingRound->update(['meta' => [
            'operator_balance' => $operator->balanceFloat,
        ]]);

        return $operator;
    }

    public function hasSubAgent(User $player)
    {
        $masterAgent = $player->masterAgent;

        return $masterAgent->hasRole('Master Agent') && $masterAgent->masterAgent;
    }
}
