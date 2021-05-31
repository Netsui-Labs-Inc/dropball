<?php

namespace App\Console\Commands;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundResultUpdated;
use Illuminate\Console\Command;
use Illuminate\Foundation\Testing\WithFaker;

class LocalBettingTest extends Command
{
    use WithFaker;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:winning-distributions {result=1}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Do not run on production';

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
        if (!app()->environment(['local', 'testing'])) {
            return 0;
        }
        $result  = $this->argument('result');
        $bettingRound = BettingRound::factory()->create();

        Bet::factory()->ongoing()->count(40)->create(['betting_round_id' => $bettingRound->id]);

        $bettingRound->update([
            'payouts' => (new CalculateOddsAction)($bettingRound),
            'status' => 'ended',
            'result' => 2,
        ]);
        $bettingRound->refresh();
        BettingRoundResultUpdated::dispatch($bettingRound);

        return 0;
    }
}

