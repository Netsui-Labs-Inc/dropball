<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use \App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Faker\Generator as Faker;

$factory->define(BettingRound::class, function (Faker $faker) {
    return [
        'betting_event_id' => function () {
            return factory(BettingEvent::class)->create()->id;
        },
        'is_betting_open' => false,
        'status' => 'upcoming',
    ];
});
