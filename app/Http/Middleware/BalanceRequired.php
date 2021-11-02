<?php

namespace App\Http\Middleware;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Closure;

class BalanceRequired
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = auth()->user();

        if (! $user) {
            return redirect()->route('frontend.user.login')->withErrors("Unauthorized");
        }
        $bettingEvent = BettingEvent::today($user->timezone)->first() ?? null;
        if (! $bettingEvent) {
            return $next($request);
        }
        /** @var BettingRound $activeBettingRound */
        $activeBettingRound = $bettingEvent->activeBettingRound()->first();
        if ($activeBettingRound) {
            if ($activeBettingRound->userBet($user->id)) {
                return $next($request);
            };
        }

        if ($user->balanceFloat < config('dropball.streaming_minimum_balance')) {
            $amount = config('dropball.streaming_minimum_balance');
            return redirect()->route('frontend.user.dashboard')->withErrors("Insufficient Balance. At least PHP $amount is required");
        }

        return $next($request);
    }
}
