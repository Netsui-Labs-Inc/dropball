<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessHubCommissionJob implements ShouldQueue
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
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        $hub = $masterAgent->hub;
        $bettingRound = $bet->bettingRound;
        $percentage = (3 - $masterAgent->commission_rate);
        $rate = ($percentage / 100) ?? 0.01;
        $commission = $bet->bet_amount * $rate;

        logger("BettingRound#{$bettingRound->id} Hub #{$hub->id} {$hub->name} will receive $percentage%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}");
        $hubWallet = $this->getWallet($hub, 'Income Wallet');
        $transaction = $bet->forceTransferFloat($hubWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
        logger("BettingRound#{$bettingRound->id} Hub #{$hub->id} {$hub->name}  new balance {$hubWallet->balanceFloat}");

        $this->createCommission($bet, $hub, 'hub', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);
    }
}
