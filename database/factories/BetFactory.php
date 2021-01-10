<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Faker\Generator as Faker;

$factory->define(Bet::class, function (Faker $faker) {
    return [
        'betting_round_id' => function () {
            return factory(BettingRound::class)->create()->id;
        },
        'user_id' => function () {
            return factory(User::class)->state('user')->create()->id;
        },
        'bet' => $faker->randomElement(['meron', 'wala']),
        'bet_amount' => $faker->randomElement([100, 300, 500, 1000, 500, 10000]),
        'status' => $faker->randomElement(['win','lose']),
        'gain_loss' => $faker->randomElement([100, 300, 500, 1000, 500, 10000]),
        'note' => $faker->text,
    ];
});
