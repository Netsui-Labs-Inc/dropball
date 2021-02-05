<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use \App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\Auth\Models\User;
use Faker\Generator as Faker;
use Carbon\Carbon;
$factory->define(BettingEvent::class, function (Faker $faker) {
    return [
        'name' => $faker->dayOfWeek. " Event",
        'description' => $faker->text,
        'schedule' => $faker->date('Y-m-d'),
        'bet_admin_id' => function () {
            return factory(User::class)->state('bet_admin')->create()->id;
        },
    ];
});


$factory->state(BettingEvent::class, 'today', function (Faker $faker) {
    return [
        'schedule' => Carbon::now()->format('Y-m-d'),
    ];
});
