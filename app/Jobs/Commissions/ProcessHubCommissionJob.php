<?php

namespace App\Jobs\Commissions;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Hub\Models\Hub;
use App\Jobs\Traits\WalletAndCommission;
use App\Jobs\TransferToWalletJob;
use App\Models\Company;
use Brick\Math\BigDecimal;
use DB;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Cache;
class ProcessHubCommissionJob implements ShouldQueue, ShouldBeUnique
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
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


    /**
     * The unique ID of the job.
     *
     * @return string
     */
    public function uniqueId()
    {
        return "hub-".$this->bet->user->masterAgent->hub->id;
    }

    public function middleware()
    {
        return [(new WithoutOverlapping("hub-".$this->bet->user->masterAgent->hub->id))->releaseAfter(30)];
    }

    public function uniqueVia()
    {
        return Cache::driver('database');
    }

    public function handle()
    {
        $bet = $this->bet;
        $player = $bet->user;
        $masterAgent = $player->masterAgent;
        /** @var Hub $hub */
        $hub = $masterAgent->hub;
        $bettingRound = $bet->bettingRound;
        $percentage = (3 - $masterAgent->commission_rate);
        $rate = ($percentage / 100) ?? 0.01;
        $commission = BigDecimal::of($bet->bet_amount * $rate)->toFloat();

        try {
            DB::beginTransaction();;
            logger("ProcessHubCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Hub #{$hub->id} {$hub->name} will receive $percentage%($commission) commission from Player#{$player->id} bet of {$bet->bet_amount}");
            $hubWallet = $this->getWallet($hub, 'Income Wallet');
            $hubWallet->refreshBalance();
            $currentBalance = $hubWallet->balanceFloat;
            $hubWallet->depositFloat($commission, ['betting_round_id' => $bettingRound->id, 'previous_balance' => $currentBalance,  'commission' => true, 'from_referral' => $player->id, 'bet' => $bet->id]);
            logger("ProcessHubCommissionJob BettingRound#{$bettingRound->id} Bet#{$bet->id} Hub #{$hub->id} {$hub->name}  new balance {$hubWallet->balanceFloat}");
            $rate = BigDecimal::of($rate * 100)->toFloat();

            $this->createCommission($bet, $hub, 'hub', $commission, $rate,  []);
            $hubWallet->refreshBalance();
            activity('commissions')
                ->performedOn($hub)
                ->causedBy($bettingRound)
                ->withProperties(['bet' => $bet->id, 'bettingRound' => $bettingRound->id, 'rate' => $rate, 'from_referral' => $player->id, 'previous_balance' => $currentBalance, 'new_balance' => $hubWallet->balanceFloat])
                ->log("Hub with balance of $currentBalance received $rate%($commission) commission. New Balance is {$hubWallet->balanceFloat}");

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }

    }
}
