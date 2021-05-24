<?php

namespace App\Jobs\Commissions;

use App\Domains\Bet\Models\Bet;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;
use DB;

class ProcessSubAgentCommissionJob implements ShouldQueue, ShouldBeUnique
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
        return [
            (new WithoutOverlapping("bet-".$this->bet->id))->dontRelease(),
        ];
    }

    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "bet-".$this->bet->id;
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
            logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} Master Agent #{$masterAgent->id} {$masterAgent->name} referral will receive $commission from Sub agent#{$subAgent->id}");

            $masterAgentWallet = $masterAgent->getWallet('income-wallet');
            logger("BettingRound#{$bettingRound->id} Bet#{$bet->id}  Master Agent #{$masterAgent->id} {$masterAgent->name} current balance {$masterAgent->balanceFloat}");
            logger("BettingRound#{$bettingRound->id} Bet#{$bet->id}  Master agent #{$masterAgent->id} {$masterAgent->name} new balance {$masterAgent->balanceFloat}");

            TransferToWalletJob::dispatch($bet, $masterAgentWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'master_agent' => $masterAgent->id, 'unilevel' => true])->onQueue('commissions');

            $this->createCommission($bet, $masterAgent, 'referred_master_agent', $commission, $rate * 100,  ['sub_agent_id' => $subAgent->id]);

        }
    }
}
