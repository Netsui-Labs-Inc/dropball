<?php

namespace App\Console\Commands;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Console\Command;

class SeedBettingRound extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'betting-round:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate the betting round with dummy bets';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $bettingRoundId = $this->ask("Enter the Betting Round ID:");

        $bettingRound = BettingRound::findOrFail($bettingRoundId);

        $betsCount = $this->ask("How many dummy bets you want to add?");

        Bet::factory()->count($betsCount)->ongoing()->create(['betting_round_id' => $bettingRoundId]);

        $bettingRound->refresh();

        $this->info("Betting Round has pool money of ".$bettingRound->bets()->sum('bet_amount'));
    }
}
