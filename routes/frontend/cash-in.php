<?php

use App\Domains\Bet\Http\Controllers\Frontend\BetController;

Route::group(['middleware' => ['auth', config('boilerplate.access.middleware.verified'), 'is_user']], function () {
    Route::get('/cash-in/{type}/{amount}', [BetController::class, 'index'])->name('index');
});

