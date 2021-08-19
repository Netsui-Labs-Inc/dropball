<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use App\Events\BetCommissionsProcessingFailed;
use App\Events\BetCommissionsProcessingFinished;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ProcessAllCommissionsJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Bet $bet;

    /**
     * Create a new job instance.
     *
     * @return void
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
        return "bet-".$this->bet->id;
    }

    public function backoff()
    {
        return [1, 5, 10, 30];
    }

    public function middleware()
    {
        return [(new WithoutOverlapping("bet-".$this->bet->id))->releaseAfter(2)];
    }

    public function uniqueVia()
    {
        return \Cache::driver('database');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $bet = $this->bet;

        try {
            DB::beginTransaction();
            $agent = (new Agent)($bet);
            $operator = (new Operator)($bet);
            $hub = (new Hub)($bet);
            $developer = (new Developer)($bet);
            $subAgent = (new SubAgent)($bet);

            $bet->commission_processed = true;
            $bet->save();

            DB::commit();
            event(new BetCommissionsProcessingFinished($bet));
        } catch (\Exception $exception) {
            DB::rollBack();
            logger("ProcessAllCommissionsJob ERROR: ".$exception->getMessage());
            event(new BetCommissionsProcessingFailed($bet, $exception->getMessage()));
        }
    }
}
