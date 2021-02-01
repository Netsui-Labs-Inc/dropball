<?php

use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventBettingRoundController;
use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventController;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\MasterAgent\Http\Controllers\Backend\MasterAgentController;
use App\Domains\Player\Http\Controllers\Backend\PlayerController;
use App\Domains\Hub\Http\Controllers\Backend\HubController;


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


Route::group(['middleware' => 'can:admin.access.betting-rounds.moderate'], function () {
    Route::put('betting-rounds/{bettingRound}', [BettingRoundController::class, 'update']);

    Route::post('betting-rounds/{bettingRound}/open-betting', [BettingRoundController::class, 'openBetting'])->name('betting-rounds.betting.open');
    Route::post('betting-rounds/{bettingRound}/last-call', [BettingRoundController::class, 'lastCallBetting'])->name('betting-rounds.betting.last-call');
    Route::post('betting-rounds/{bettingRound}/close-betting', [BettingRoundController::class, 'closeBetting'])->name('betting-rounds.betting.close');

    Route::post('betting-rounds/{bettingRound}/starts', [BettingRoundController::class, 'startBettingRound'])->name('betting-rounds.start');
    Route::post('betting-rounds/{bettingRound}/ends', [BettingRoundController::class, 'endBettingRound'])->name('betting-rounds.end');
    Route::post('betting-rounds/{bettingRound}/cancel', [BettingRoundController::class, 'cancelBettingRound'])->name('betting-rounds.cancel');
    Route::post('betting-rounds/{bettingRound}/results', [BettingRoundController::class, 'setResult'])->name('betting-rounds.results');
});


/** End BettingRounds */

/* BettingRounds */

Route::get('players', [PlayerController::class, 'index'])
    ->name('players.index')
    ->middleware('can:admin.access.players.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Players", route('admin.players.index'));
    });

Route::get('players/{player}', [PlayerController::class, 'show'])
    ->name('players.info')
    ->middleware('can:admin.access.players.info')
    ->breadcrumbs(function (Trail $trail, $player) {
        $trail->parent('admin.players.index');
        $trail->push("Players", route('admin.players.info', $player));
    });

Route::get('players/{player}/wallet', [PlayerController::class, 'cashBalance'])
    ->name('players.wallet')
    ->middleware('can:admin.access.players.wallet')
    ->breadcrumbs(function (Trail $trail, $player) {
        $trail->parent('admin.players.index');
        $trail->push("Player Wallet", route('admin.players.wallet', $player));
    });

Route::post('players/{player}/wallet', [PlayerController::class, 'deposit'])->name('players.wallet.deposit');
Route::post('players/{player}/verification', [PlayerController::class, 'verify'])->name('players.verify');

/** Master Agents */

Route::get('master-agents', [MasterAgentController::class, 'index'])->name('master-agents.index')
    ->middleware('can:admin.access.master-agents.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Master Agents", route('admin.master-agents.index'));
    });

Route::get('master-agents/{masterAgent}', [MasterAgentController::class, 'show'])
    ->name('master-agents.info')
    ->middleware('can:admin.access.master-agents.info')
    ->breadcrumbs(function (Trail $trail, $masterAgent) {
        $trail->parent('admin.master-agents.index');
        $trail->push("Master Agents", route('admin.master-agents.info', $masterAgent));
    });

Route::get('master-agents/{masterAgent}/wallet', [MasterAgentController::class, 'cashBalance'])
    ->name('master-agents.wallet')
    ->middleware('can:admin.access.master-agents.wallet')
    ->breadcrumbs(function (Trail $trail, $masterAgent) {
        $trail->parent('admin.master-agents.index');
        $trail->push("Master Agent Wallet", route('admin.master-agents.wallet', $masterAgent));
    });

Route::post('master-agents/{masterAgent}/wallet', [MasterAgentController::class, 'deposit'])->name('master-agents.wallet.deposit');


Route::get('master-agent-transactions', [MasterAgentController::class, 'transactions'])->name('master-agents.transactions')
    ->middleware('can:admin.access.master-agents.transactions')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Master Agent Transactions", route('admin.master-agents.transactions'));
    });


/** Hubs */

Route::get('hubs', [HubController::class, 'index'])->name('hubs.index')
    ->middleware('can:admin.access.hubs.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Hubs", route('admin.hubs.index'));
    });

Route::get('hubs/{hub}', [HubController::class, 'show'])
    ->name('hubs.info')
    ->middleware('can:admin.access.hubs.info')
    ->breadcrumbs(function (Trail $trail, $hub) {
        $trail->parent('admin.hubs.index');
        $trail->push("Hubs", route('admin.hubs.info', $hub));
    });

Route::get('hubs/{hub}/wallet', [HubController::class, 'cashBalance'])
    ->name('hubs.wallet')
    ->middleware('can:admin.access.hubs.wallet')
    ->breadcrumbs(function (Trail $trail, $hub) {
        $trail->parent('admin.hubs.index');
        $trail->push("Hub Wallet", route('admin.hubs.wallet', $hub));
    });

Route::post('hubs/{hub}/wallet', [HubController::class, 'deposit'])->name('hubs.wallet.deposit');


Route::get('hubs-transactions', [HubController::class, 'transactions'])->name('hubs.transactions')
    ->middleware('can:admin.access.hubs.transactions')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Hub Transactions", route('admin.hubs.transactions'));
    });


Route::get('my-wallet', [WalletController::class, 'myWallet'])->name('my.wallet.transactions')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("My Wallet Transactions", route('admin.my.wallet.transactions'));
    });

Route::post('my-wallet', [WalletController::class, 'withdraw'])->name('my.wallet.transactions.withdraw');

