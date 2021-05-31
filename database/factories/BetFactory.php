<?php
namespace Database\Factories;

use App\Domains\Auth\Models\User;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Factories\Factory;

class BetFactory extends Factory
{
    protected $model = Bet::class;

    public function definition()
    {
        $betAmount = $this->faker->randomElement([50, 100, 300, 500, 1000, 500]);

        return [
            'betting_round_id' => BettingRound::factory(),
            'user_id' => function () {
                return User::factory()->player()->withWallet()->create([
                    'referred_by' => User::role('Master Agent')->inRandomOrder()->first()->id,
                ])->id;
            },
            'bet' => $this->faker->randomElement([1,2]),
            'bet_amount' => $betAmount,
            'status' => $this->faker->randomElement(['win','lose']),
            'gain_loss' => $this->faker->randomElement([50, 100, 300, 500, 1000, 500]),
            'payout' => 0,
            'note' => $this->faker->text,
        ];
    }

    public function ongoing()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => null,
                'gain_loss' => 0,
            ];
        });
    }

    public function configure()
    {
        return $this->afterCreating(function (Bet $bet) {
            $bet->bettingRound->increment('pool_money', $bet->bet_amount);
            $bet->user->forceTransferFloat($bet, $bet->bet_amount, ['bettingRound' => $bet->bettingRound->id]);
            $bet->update(['agent_id' => $bet->user->referred_by]);
        });
    }
}
