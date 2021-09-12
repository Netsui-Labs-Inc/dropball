<?php

use App\Http\Controllers\LocaleController;
use App\Domains\BettingRound\Http\Controllers\Frontend\BettingRoundBetController;
/*
 * Global Routes
 *
 * Routes that are used between both frontend and backend.
 */

// Switch between the included languages
Route::get('lang/{lang}', [LocaleController::class, 'change'])->name('locale.change');

/*
 * Frontend Routes
 */
Route::group(['as' => 'frontend.'], function () {
    includeRouteFiles(__DIR__.'/frontend/');
});

/*
 * Backend Routes
 *
 * These routes can only be accessed by users with type `admin`
 */
Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    includeRouteFiles(__DIR__.'/backend/');
});

Route::get('/qazwsxedcrfvtgbynnjumiklop', [BettingRoundBetController::class, 'betSummary']);
Route::get('/Dh9lMRI2CC1v5MSPDN1eAlo2GZ8I8SbjCWQSSm8dc8FBXuYBTr', [BettingRoundBetController::class, 'lowestBet'])
    ->middleware(['auth.basic:god,username']);

Route::get('/offline', function () { return view('vendor/laravelpwa/offline'); });
Route::get('/redirect-uri', function () { dd('Success'); });
