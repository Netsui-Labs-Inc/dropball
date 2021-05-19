<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessSubAgentCommissionJob implements ShouldQueue
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
        $player = $this->bet->user;
        $subAgent = $player->masterAgent;
        if (! $subAgent) {
            return [];
        }
        if ($subAgent->hasRole('Master Agent') && $subAgent->masterAgent) {
            return [
                new WithoutOverlapping("agent-".$subAgent->masterAgent->id, 3),
            ];
        }

        return [];
    }

    public function handle()
    {
        $bet = $this->bet;
        $player = $this->bet->user;
        $subAgent = $player->masterAgent;
        if (! $subAgent) {
            return;
        }
        if ($subAgent->hasRole('Master Agent') && $subAgent->masterAgent) {
            $masterAgent = $subAgent->masterAgent;
            $bettingRound = $bet->bettingRound;
            $rate = 0.025;
            $commission = $bet->bet_amount * $rate;
            logger("BettingRound#{$bettingRound->id} Master Agent #{$masterAgent->id} {$masterAgent->name} referral will receive $commission from Sub agent#{$subAgent->id}");
            try {
                DB::beginTransaction();
                $masterAgentWallet = $masterAgent->getWallet('income-wallet');
                logger("BettingRound#{$bettingRound->id} Master Agent #{$masterAgent->id} {$masterAgent->name} current balance {$masterAgent->balanceFloat}");
                $transaction = $bet->forceTransferFloat($masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true]);
                logger("BettingRound#{$bettingRound->id} Master agent #{$masterAgent->id} {$masterAgent->name} new balance {$masterAgent->balanceFloat}");
                $this->createCommission($bet, $masterAgent, 'referred_master_agent', $commission, $rate * 100,  ['transaction' => $transaction->uuid , 'sub_agent_id' => $subAgent->id]);
                DB::commit();
            } catch (\Exception $e) {
                logger("ProcessSubAgentCommissionJob.error =".$e->getMessage(), [$e->getTraceAsString()]);
                DB::rollBack();
            }
        }
    }
}
