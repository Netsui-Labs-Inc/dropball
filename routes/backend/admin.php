<?php

use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventBettingRoundController;
use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventController;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\Player\Http\Controllers\Backend\PlayerController;
use App\Domains\Wallet\Http\Controllers\Backend\WalletController;


use App\Http\Controllers\Backend\DashboardController;
use Tabuna\Breadcrumbs\Trail;

// All route names are prefixed with 'admin.'.
//Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->breadcrumbs(function (Trail $trail) {
        $trail->push(__('Home'), route('admin.dashboard'));
    });


// Wallet
Route::get('wallet-transactions', [WalletController::class, 'index'])->name('wallet.index');
Route::post('wallet-transactions/{transaction}', [WalletController::class, 'confirm'])->name('wallet.confirm');

/** Betting Events */
Route::get('betting-events', [BettingEventController::class, 'index'])
    ->name('betting-events.index')
    ->middleware('can:admin.access.betting-events.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push(__('Betting Events'), route('admin.betting-events.index'));
    });

Route::get('betting-events/create', [BettingEventController::class, 'create'])
    ->name('betting-events.create')
    ->middleware('can:admin.access.betting-events.create')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push(__('Create Betting Event'), route('admin.betting-events.create'));
    });

Route::get('betting-events/{bettingEvent}', [BettingEventController::class, 'show'])
    ->name('betting-events.show')
    ->middleware('can:admin.access.betting-events.show')
    ->breadcrumbs(function (Trail $trail, $bettingEvent) {
        $trail->parent('admin.betting-events.index');
        $trail->push("Event #".$bettingEvent->id, route('admin.betting-events.show', $bettingEvent));
    });


Route::post('betting-events', [BettingEventController::class, 'store'])->name('betting-events.store');
Route::put('betting-events/{bettingEvent}', [BettingEventController::class, 'update'])->name('betting-events.update');
Route::delete('betting-events/{bettingEvent}', [BettingEventController::class, 'destroy'])->name('betting-events.destroy');

Route::get('betting-events/{bettingEvent}/betting-rounds/create', [BettingEventBettingRoundController::class, 'create'])
    ->name('betting-events.betting-rounds.create')
    ->middleware('can:admin.access.betting-rounds.create')
    ->breadcrumbs(function (Trail $trail, $bettingEvent) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push(__('Create BettingRound'), route('admin.betting-events.betting-rounds.create', $bettingEvent));
    });

Route::post('betting-events/{bettingEvent}/betting-rounds', [BettingEventBettingRoundController::class, 'store'])
    ->name('betting-events.betting-rounds.store');

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}', [BettingEventBettingRoundController::class, 'show'])
    ->name('betting-events.betting-rounds.show')
    ->middleware(['permission:admin.access.betting-rounds.show|admin.access.betting-rounds.moderate'])
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("BettingRound #".$bettingRound->id, route('admin.betting-events.betting-rounds.show', [$bettingEvent, $bettingRound]));
    });

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}/edit', [BettingEventBettingRoundController::class, 'edit'])
    ->name('betting-events.betting-rounds.edit')
    ->middleware('can:admin.access.betting-rounds.edit')
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("Edit BettingRound #".$bettingRound->id, route('admin.betting-events.betting-rounds.edit', [$bettingEvent, $bettingRound]));
    });

/** End Betting Events */

/** BettingRounds */

Route::get('betting-rounds', [BettingRoundController::class, 'index'])
    ->name('betting-rounds.index')
    ->middleware('can:admin.access.betting-rounds.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push(__('BettingRounds'), route('admin.betting-rounds.index'));
    });

Route::get('betting-rounds/create', [BettingEventController::class, 'create'])
    ->name('betting-rounds.create')
    ->middleware('can:admin.access.betting-rounds.create')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push(__('Create BettingRound'), route('admin.betting-rounds.create'));
    });

Route::get('betting-rounds/{bettingRound}', [BettingRoundController::class, 'show'])
    ->name('betting-rounds.show')
    ->middleware('can:admin.access.betting-rounds.show')
    ->breadcrumbs(function (Trail $trail, $bettingRound) {
        $trail->parent('admin.betting-rounds.index');
        $trail->push("#".$bettingRound->id, route('admin.betting-rounds.show', $bettingRound->id));
    });

Route::post('betting-rounds', [BettingRoundController::class, 'store'])->middleware('can:admin.access.betting-rounds.create');
Route::put('betting-rounds/{bettingRound}', [BettingRoundController::class, 'update']);

Route::post('betting-rounds/{bettingRound}/open-betting', [BettingRoundController::class, 'openBetting'])->name('betting-rounds.betting.open');
Route::post('betting-rounds/{bettingRound}/last-call', [BettingRoundController::class, 'lastCallBetting'])->name('betting-rounds.betting.last-call');
Route::post('betting-rounds/{bettingRound}/close-betting', [BettingRoundController::class, 'closeBetting'])->name('betting-rounds.betting.close');

Route::post('betting-rounds/{bettingRound}/starts', [BettingRoundController::class, 'startBettingRound'])->name('betting-rounds.start');
Route::post('betting-rounds/{bettingRound}/ends', [BettingRoundController::class, 'endBettingRound'])->name('betting-rounds.end');
Route::post('betting-rounds/{bettingRound}/cancel', [BettingRoundController::class, 'cancelBettingRound'])->name('betting-rounds.cancel');
Route::post('betting-rounds/{bettingRound}/results', [BettingRoundController::class, 'setResult'])->name('betting-rounds.results');

/** End BettingRounds */

/* BettingRounds */

Route::get('players', [PlayerController::class, 'index'])
    ->name('players.index')
    ->middleware('can:admin.access.players.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("BettingRounds", route('admin.players.index'));
    });

Route::get('players/{player}', [PlayerController::class, 'show'])
    ->name('players.info')
    ->middleware('can:admin.access.players.info')
    ->breadcrumbs(function (Trail $trail, $bettingRounder) {
        $trail->parent('admin.players.index');
        $trail->push("BettingRounds", route('admin.players.info', $bettingRounder));
    });

Route::get('players/{player}/wallet', [PlayerController::class, 'cashBalance'])
    ->name('players.wallet')
    ->middleware('can:admin.access.players.wallet')
    ->breadcrumbs(function (Trail $trail, $bettingRounder) {
        $trail->parent('admin.players.index');
        $trail->push("Player Wallet", route('admin.players.wallet', $bettingRounder));
    });

Route::post('players/{player}/wallet', [PlayerController::class, 'deposit'])->name('players.wallet.deposit');
Route::post('players/{player}/verification', [PlayerController::class, 'verify'])->name('players.verify');
