<?php

use App\Domains\CashIn\Http\Controllers\CashInController;
use App\Domains\CashIn\Http\Controllers\PaymentOrderController;

Route::group(['middleware' => ['auth', config('boilerplate.access.middleware.verified'), 'is_user']], function () {
    Route::post('/cash-in', [PaymentOrderController::class, 'requestPaymentOrder'])->name('player.cash-in');
    Route::post('/cash-in/refresh', [CashInController::class, 'refresh'])->name('player.cash-in');
    Route::post('/cash-in/wallet-address', [CashInController::class, 'getWalletAddress'])->name('player.cashin.get.wallet');
    Route::get('/view-cash-in', [CashInController::class, 'index'])->name('cash-in.index');
});

Route::post('/cash-in-callback', [CashInController::class, 'getCashIn']);
