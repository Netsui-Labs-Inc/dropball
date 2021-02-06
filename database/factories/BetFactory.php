<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBetPlaced;
use Faker\Generator as Faker;

$factory->define(Bet::class, function (Faker $faker) {
    return [
        'betting_round_id' => function () {
            return factory(BettingRound::class)->create()->id;
        },
        'user_id' => function () use ($faker) {
            return factory(User::class)->states(['player', 'with-wallet'])->create([
                'referred_by' => User::role('Master Agent')->inRandomOrder()->first()->id,
            ])->id;
        },
        'bet' => $faker->randomElement(\App\Domains\Bet\Models\BetOption::all()->pluck("id")->toArray()),
        'bet_amount' => $faker->randomElement([50, 100, 300, 500, 1000, 500]),
        'status' => $faker->randomElement(['win','lose']),
        'gain_loss' => $faker->randomElement([50, 100, 300, 500, 1000, 500]),
        'note' => $faker->text,
    ];
});

$factory->state(Bet::class, 'ongoing', function (Faker $faker) {
    return [
        'status' => null,
        'gain_loss' => 0,
    ];
});

$factory->afterCreating(Bet::class, function(Bet $bet) {
    $bet->user->forceTransferFloat($bet->bettingRound, $bet->bet_amount, ['bettingRound' => $bet->bettingRound->id]);
});
