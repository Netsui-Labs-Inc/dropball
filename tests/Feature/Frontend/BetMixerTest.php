<?php


namespace Tests\Feature\Frontend;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BetMixerTest extends TestCase
{
    use WithFaker;
    /** @test */
    public function it_should_generate_random_bets()
    {
        $max = 999999;
        $diff = $this->faker->numberBetween(5, 35);
        $winPool = $this->faker->numberBetween(400000, $max);
        $winner = $this->faker->randomElement(['pula', 'puti']);
        $multiplier = $this->faker->randomNumber(1);
        $betAmount = $this->faker->randomElement([ 50, 100, 300, 500, 1000, 5000, 10000]);

        $meta = [
            'winner' => $winner,
            'win-pool' => $winPool,
            'lose-pool' => $winPool - ($diff / 100 * $winPool),
            'pula' => 0 , 'puti' => 0
        ];

        $meta[$winner];

        dd($meta);
    }
}
