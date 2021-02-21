<?php

use \App\Domains\Wallet\Http\Controllers\Frontend\WalletController;
Route::group(['as' => 'wallet.', 'prefix' => 'wallet'], function () {
    Route::group(['middleware' => ['auth', 'is_user', config('boilerplate.access.middleware.verified')]], function () {
        Route::get('/', [WalletController::class, 'index'])->name('index');
        Route::post('/', [WalletController::class, 'withdraw'])->name('withdraw');
    });
});
