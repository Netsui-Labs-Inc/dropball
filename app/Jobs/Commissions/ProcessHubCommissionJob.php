<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Jobs\Traits\WalletAndCommission;
use App\Models\Company;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;

class ProcessHubCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    use WalletAndCommission;

    public Bet $bet;

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
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        $hub = $masterAgent->hub;
        $bettingRound = $bet->bettingRound;
        $percentage = (3 - $masterAgent->commission_rate);
        $rate = ($percentage / 100) ?? 0.01;
        $commission = $bet->bet_amount * $rate;

        try {
            DB::beginTransaction();;
            logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} Hub #{$hub->id} {$hub->name} will receive $percentage%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}");
            $hubWallet = $this->getWallet($hub, 'Income Wallet');
            $transaction = $bet->forceTransferFloat($hubWallet, $commission, ['betting_round_id' => $bettingRound->id, 'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
            logger("BettingRound#{$bettingRound->id} Bet#{$bet->id} Hub #{$hub->id} {$hub->name}  new balance {$hubWallet->balanceFloat}");

            $this->createCommission($bet, $hub, 'hub', $commission, $rate * 100,  ['transaction' => $transaction->uuid]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }

    }
}
