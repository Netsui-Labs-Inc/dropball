<?php

namespace Tests\Feature\Frontend;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundResultUpdated;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Domains\Bet\Models\Bet;

class DistributionOfWinningsTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function it_should_distribute_the_winnings_to_players()
    {
        $bettingRound = BettingRound::factory()->create();

        Bet::factory()->ongoing()->count(100)->create(['betting_round_id' => $bettingRound->id]);

        $this->assertDatabaseCount('bets', 100);

        $bettingRound->update([
            'payouts' => (new CalculateOddsAction)($bettingRound),
            'status' => 'ended',
            'result' => $this->faker->randomElement([1,2])
        ]);

        BettingRoundResultUpdated::dispatch($bettingRound->fresh());

    }
}
