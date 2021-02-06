<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use Faker\Generator as Faker;

$factory->define(\App\Domains\Hub\Models\Hub::class, function (Faker $faker) {
    return [
        'admin_id' => factory(\App\Domains\Auth\Models\User::class)->state('virtual-hub')->create(['email' => 'virtual@hub.com'])->id,
        'name' => 'Hub',
    ];
});
