<?php

use App\Domains\Bet\Http\Controllers\Frontend\BetController;

Route::group(['as' => 'bets.', 'prefix' => 'bet'], function () {
    Route::group(['middleware' => ['auth', config('boilerplate.access.middleware.verified'), 'is_user']], function () {
        Route::get('/', [BetController::class, 'index'])->name('index');
    });
});
