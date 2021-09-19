<?php

use App\Domains\Wallet\Http\Controllers\CashInController;

Route::group(['middleware' => ['auth', config('boilerplate.access.middleware.verified'), 'is_user']], function () {
    Route::post('/cash-in', [CashInController::class, 'cashIn'])->name('player.cash-in');
    Route::post('/cash-in/refresh', [CashInController::class, 'refresh'])->name('player.cash-in');
    Route::get('/view-cash-in', [CashInController::class, 'index'])->name('cash-in.index');

});

Route::post('/cash-in-callback', [CashInController::class, 'getCashIn']);
