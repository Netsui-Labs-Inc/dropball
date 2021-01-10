<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use \App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\Auth\Models\User;
use Faker\Generator as Faker;

$factory->define(BettingEvent::class, function (Faker $faker) {
    return [
        'name' => $faker->dayOfWeek. " Event",
        'description' => $faker->text,
        'schedule' => $faker->date('Y-m-d'),
        'bet_admin_id' => function () {
            return factory(User::class)->create()->id;
        },
    ];
});
