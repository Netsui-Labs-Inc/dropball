<?php

namespace App\Console\Commands;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Actions\Commission\Agent;
use App\Domains\BettingRound\Actions\Commission\Developer;
use App\Domains\BettingRound\Actions\Commission\Hub;
use App\Domains\BettingRound\Actions\Commission\Operator;
use App\Domains\BettingRound\Actions\Commission\SubAgent;
use App\Events\BetCommissionsProcessingFailed;
use App\Events\BetCommissionsProcessingFinished;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ProcessCommissionsPerBetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'commissions:process {betId?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Process Commissions Per Bet';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $betId = $this->argument('betId') ?? $this->ask("Enter BET ID");

        $bet = Bet::find($betId);

        if(!$betId) {
            $this->error("BET ID not found");;
            return false;
        }

        if($bet->commission_processed) {
            $this->error("BET ID#$betId already processed");
            return false;
        }

        try {
            DB::beginTransaction();
            $agent = (new Agent)($bet);
            $this->info("Agent Commissions Done");
            $operator = (new Operator)($bet);
            $this->info("Operator Commissions Done");
            $hub = (new Hub)($bet);
            $this->info("Hub Commissions Done");
            $developer = (new Developer)($bet);
            $this->info("Developer Commissions Done");
            $subAgent = (new SubAgent)($bet);
            $this->info("Sub agent Commissions Done");

            $bet->commission_processed = true;
            $bet->save();

            DB::commit();
            event(new BetCommissionsProcessingFinished($bet));
        } catch (\Exception $exception) {
            DB::rollBack();
            logger("ProcessAllCommissionsJob ERROR: ".$exception->getMessage());
            event(new BetCommissionsProcessingFailed($bet, $exception->getMessage()));
            $this->error($exception->getMessage());
        }
    }
}
