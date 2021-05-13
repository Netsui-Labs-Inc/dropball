<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessMasterAgentCommissionJob implements ShouldQueue
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

    public function handle()
    {
        $bet = $this->bet;
        $player = $this->bet->user;
        $masterAgent = $player->masterAgent;
        if (! $masterAgent) {
            return;
        }
        $bettingRound = $bet->bettingRound;
        $rate = ($masterAgent->commission_rate / 100) ?? .01;
        $commission = $bet->bet_amount * $rate;

        logger("BettingRound#{$bettingRound->id} Master Agent #{$masterAgent->id} {$masterAgent->name} will receive {$masterAgent->commission_rate}%($commission) commission  from Player#{$player->id} bet of {$bet->bet_amount}");

        try {
            DB::beginTransaction();
            $masterAgentWallet = $masterAgent->getWallet('income-wallet');
            $transaction = $bet->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
            logger("BettingRound#{$bettingRound->id} Master Agent #{$masterAgent->id} {$masterAgent->name}  new balance {$masterAgentWallet->balanceFloat}");
            $this->createCommission($bet, $masterAgent, 'master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);
            DB::commit();
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function fail($exception = null)
    {
        DB::rollBack();
        logger("ProcessMasterAgentCommissionJob.error =".$exception->getMessage());
    }

}
