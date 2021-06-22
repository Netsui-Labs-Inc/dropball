<?php

namespace Database\Factories;

use \App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Factories\Factory;

class BettingRoundFactory extends Factory
{
    protected $model = BettingRound::class;

    public function definition()
    {
        return [
            'betting_event_id' => BettingEvent::factory(),
            'is_betting_open' => false,
            'queue' => 1,
            'status' => 'upcoming',
        ];
    }

    public function today()
    {
        return $this->state(function () {
            return [
                'betting_event_id' => function () {
                    return BettingEvent::factory()->today()->create()->id;
                },
            ];
        });
    }

    public function openWithBets()
    {
        return $this->state(function () {
            return [
                'status' => 'placing_bets',
                'queue' => 1,
                'is_betting_open' => 1,
            ];
        })->afterCreating(function (BettingRound $bettingRound) {
            Bet::factory()->count(10)->ongoing()->create(['betting_round_id' => $bettingRound->id]);
        });
    }
}
