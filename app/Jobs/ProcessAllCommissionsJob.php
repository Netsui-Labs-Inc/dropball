<?php

namespace App\Jobs;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use App\Events\BetCommissionsProcessingFinished;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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

        $agent = (new Agent)($bet);
        $operator = (new Operator)($bet);
        $hub = (new Hub)($bet);
        $developer = (new Developer)($bet);
        $subAgent = (new SubAgent)($bet);
        $bet->commission_processed = true;
        $bet->update();

        event(new BetCommissionsProcessingFinished($bet));
    }
}
