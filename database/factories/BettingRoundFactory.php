<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use \App\Domains\BettingRound\Models\BettingRound;
use App\Domains\Bet\Models\Bet;
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

$factory->state(BettingRound::class, 'today', function (Faker $faker) {
    return [
        'betting_event_id' => function () {
            return factory(BettingEvent::class)->state('today')->create()->id;
        },
    ];
});

$factory->state(BettingRound::class, 'ongoing-with-bets', function (Faker $faker) {
    return [
        'status' => 'ongoing',
   ];
});

$factory->afterCreatingState(BettingRound::class, 'ongoing-with-bets', function (BettingRound $bettingRound, Faker $faker) {
    factory(Bet::class, 1000)->state('ongoing')->create(['betting_round_id' => $bettingRound->id]);

    return [];
});
