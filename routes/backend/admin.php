<?php

use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventBettingRoundController;
use App\Domains\BettingEvent\Http\Controllers\Backend\BettingEventController;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\Hub\Http\Controllers\Backend\HubController;
use App\Domains\MasterAgent\Http\Controllers\Backend\MasterAgentController;
use App\Domains\MasterAgent\Http\Controllers\Backend\SubAgentController;
use App\Domains\MasterAgent\Http\Controllers\Backend\MyCommissionsLogController;
use App\Domains\Player\Http\Controllers\Backend\PlayerController;

use App\Domains\Wallet\Http\Controllers\Backend\WalletController;
use App\Http\Controllers\Backend\DashboardController;
use Tabuna\Breadcrumbs\Trail;
use App\Domains\Player\Http\Controllers\Backend\PlayerBetsController;
use App\Domains\Wallet\Http\Controllers\Backend\WithdrawalController;
use App\Domains\BettingEvent\Http\Controllers\Backend\JackpotController;

// All route names are prefixed with 'admin.'.
//Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->breadcrumbs(function (Trail $trail) {
        $trail->push(__('Home'), route('admin.dashboard'));
    });


// Wallet
Route::get('wallet-transactions', [WalletController::class, 'index'])->name('wallet.index');
Route::get('wallet-transactions/{transaction}', [WalletController::class, 'show'])->name('wallet.show');
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

Route::get('betting-events/{bettingEvent}/edit', [BettingEventController::class, 'edit'])
    ->name('betting-events.edit')
    ->middleware('can:admin.access.betting-events.edit')
    ->breadcrumbs(function (Trail $trail, $bettingEvent) {
        $trail->parent('admin.dashboard');
        $trail->push(__('Edit Betting Event'), route('admin.betting-events.edit', $bettingEvent));
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
Route::post('betting-events/{bettingEvent}/jackpots', [JackpotController::class, 'store'])
    ->name('betting-events.jackpots.store');
Route::post('betting-events/{bettingEvent}/jackpots/{jackpot}', [JackpotController::class, 'setAsActive'])
    ->name('betting-events.jackpots.activate');
Route::delete('betting-events/{bettingEvent}/jackpots/{jackpot}', [JackpotController::class, 'setInactive'])
    ->name('betting-events.jackpots.deactivate');

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}', [BettingEventBettingRoundController::class, 'show'])
    ->name('betting-events.betting-rounds.show')
    ->middleware(['permission:admin.access.betting-rounds.show|admin.access.betting-rounds.moderate'])
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("BettingRound #".$bettingRound->id, route('admin.betting-events.betting-rounds.show', [$bettingEvent, $bettingRound]));
    });

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}/reports', [BettingEventBettingRoundController::class, 'report'])
    ->name('betting-events.betting-rounds.report')
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("BettingRound #".$bettingRound->id. " Report", route('admin.betting-events.betting-rounds.report', [$bettingEvent, $bettingRound]));
    });

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}/activity-logs', [BettingEventBettingRoundController::class, 'activityLogs'])
    ->name('betting-events.betting-rounds.activity-logs')
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("BettingRound #".$bettingRound->id. " Activity Logs", route('admin.betting-events.betting-rounds.activity-logs', [$bettingEvent, $bettingRound]));
    });

Route::get('betting-events/{bettingEvent}/betting-rounds/{bettingRound}/edit', [BettingEventBettingRoundController::class, 'edit'])
    ->name('betting-events.betting-rounds.edit')
    ->middleware('can:admin.access.betting-rounds.edit')
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $bettingRound) {
        $trail->parent('admin.betting-events.show', $bettingEvent);
        $trail->push("Edit BettingRound #".$bettingRound->id, route('admin.betting-events.betting-rounds.edit', [$bettingEvent, $bettingRound]));
    });
Route::get('reload',[BettingRoundController::class, 'reloadPage'])
    ->name('admin.reload');

Route::get('betting-events/{bettingEvent}/jackpots/{jackpot}', [JackpotController::class, 'show'])
    ->name('betting-events.jackpots.show')
    ->middleware('can:admin.access.betting-rounds.edit')
    ->breadcrumbs(function (Trail $trail, $bettingEvent, $jackpot) {
        $trail->parent('admin.betting-events.index');
        $trail->push("Betting Event Jackpot", route('admin.betting-events.jackpots.show', [$bettingEvent, $jackpot]));
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
    Route::post('betting-rounds/{bettingRound}/draw', [BettingRoundController::class, 'drawBettingRound'])->name('betting-rounds.draw');
    Route::match(['GET','POST'],'betting-rounds/{bettingRound}/results', [BettingRoundController::class, 'setResult'])->name('betting-rounds.results');
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

Route::get('player/{player}/edit', [PlayerController::class, 'edit'])
    ->name('player.edit')
    ->middleware('can:admin.access.players.edit')
    ->breadcrumbs(function (Trail $trail, $player) {
        $trail->parent('admin.players.index');
        $trail->push("Player Edit", route('admin.player.edit', $player));
    });
Route::get('players/{player}/wallet', [PlayerController::class, 'cashBalance'])
    ->name('players.wallet')
    ->middleware('can:admin.access.players.wallet')
    ->breadcrumbs(function (Trail $trail, $player) {
        $trail->parent('admin.players.index');
        $trail->push("Player Wallet", route('admin.players.wallet', $player));
    });

Route::get('players-transactions', [PlayerController::class, 'transactions'])
    ->name('players.transactions')
    ->middleware('can:admin.access.players.wallet')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.players.index');
        $trail->push("Player Transactions", route('admin.players.transactions'));
    });

Route::get('players-withdrawals/{withdrawal}', [WithdrawalController::class, 'show'])
    ->name('players.withdrawals.show')
    ->middleware('can:admin.access.players.wallet')
    ->breadcrumbs(function (Trail $trail, $withdrawal) {
        $trail->parent('admin.players.index');
        $trail->push("Player Withdrawal", route('admin.players.withdrawals.show', $withdrawal));
    });

Route::post('withdrawals.complete', [WithdrawalController::class, 'complete'])->name('withdrawals.complete');

Route::get('players/{player}/bet-histories', [PlayerBetsController::class, 'index'])
    ->name('players.bet-histories')
    ->middleware('can:admin.access.players.info')
    ->breadcrumbs(function (Trail $trail, $player) {
        $trail->parent('admin.players.index');
        $trail->push("Player Bet History", route('admin.players.bet-histories', $player));
    });


Route::post('players/{player}/wallet', [PlayerController::class, 'deposit'])->name('players.wallet.deposit');
Route::post('players/{player}/verification', [PlayerController::class, 'verify'])->name('players.verify');
Route::put('player/{player}', [PlayerController::class, 'update'])->name('player.update');

/** Master Agents */

Route::get('master-agents', [MasterAgentController::class, 'index'])->name('master-agents.index')
    ->middleware('can:admin.access.master-agents.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Master Agents", route('admin.master-agents.index'));
    });

Route::get('master-agents/create', [MasterAgentController::class, 'create'])->name('master-agents.create')
    ->middleware('can:admin.access.master-agents.create')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.master-agents.index');
        $trail->push("Create Master Agent", route('admin.master-agents.create'));
    });
Route::get('master-agents/{masterAgent}/edit', [MasterAgentController::class, 'edit'])->name('master-agents.edit')
    ->middleware('can:admin.access.master-agents.edit')
    ->breadcrumbs(function (Trail $trail, $masterAgent) {
        $trail->parent('admin.master-agents.index');
        $trail->push("Edit Master Agent", route('admin.master-agents.edit', $masterAgent));
    });

Route::post('master-agents', [MasterAgentController::class, 'store'])->name('master-agents.store');
Route::put('master-agents/{masterAgent}', [MasterAgentController::class, 'update'])->name('master-agents.update');


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

Route::get('master-agents-withdrawals/{withdrawal}', [WithdrawalController::class, 'show'])
    ->name('master-agents.withdrawals.show')
    ->middleware('can:admin.access.master-agents.wallet')
    ->breadcrumbs(function (Trail $trail, $withdrawal) {
        $trail->push("Master-Agent's Withdrawal", route('admin.master-agents.withdrawals.show', $withdrawal));
    });

Route::get('master-agent-transactions', [MasterAgentController::class, 'transactions'])->name('master-agents.transactions')
    ->middleware('can:admin.access.master-agents.transactions')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Master Agent Transactions", route('admin.master-agents.transactions'));
    });

Route::get('sub-agents', [SubAgentController::class, 'index'])
    ->name('sub-agents.index')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Sub Agents", route('admin.sub-agents.index'));
    });

Route::get('sub-agents/pending', [SubAgentController::class, 'pending'])
    ->name('sub-agents.pending')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Pending Suba-agents", route('admin.sub-agents.pending'));
    });

Route::get('sub-agents/create', [SubAgentController::class, 'create'])
    ->name('sub-agents.create')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.sub-agents.index');
        $trail->push("Create Sub Agents", route('admin.sub-agents.create'));
    });

Route::post('sub-agents', [SubAgentController::class, 'store'])->name('sub-agents.store');

/** Hubs */

Route::get('hubs', [HubController::class, 'index'])->name('hubs.index')
    ->middleware('can:admin.access.hubs.list')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.dashboard');
        $trail->push("Hubs", route('admin.hubs.index'));
    });

Route::get('hubs/create', [HubController::class, 'create'])
    ->name('hubs.create')
    ->middleware('can:admin.access.hubs.create')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('admin.hubs.index');
        $trail->push("Create Hub", route('admin.hubs.create'));
    });

Route::get('hubs/{hub}/edit', [HubController::class, 'edit'])
    ->name('hubs.edit')
    ->middleware('can:admin.access.hubs.edit')
    ->breadcrumbs(function (Trail $trail, $hub) {
        $trail->parent('admin.hubs.index');
        $trail->push("Edit Hub", route('admin.hubs.edit', $hub));
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

Route::get('hubs-withdrawal/{withdrawal}', [WithdrawalController::class, 'show'])
    ->name('hubs.withdrawals.show')
    ->middleware('can:admin.access.hubs.wallet')
    ->breadcrumbs(function (Trail $trail, $withdrawal) {
        $trail->push("Hub's Withdrawal", route('admin.hubs.withdrawals.show', $withdrawal));
    });

Route::post('hubs/{hub}/wallet', [HubController::class, 'deposit'])->name('hubs.wallet.deposit');
Route::post('hubs', [HubController::class, 'store'])->name('hubs.store');
Route::put('hubs/{hub}', [HubController::class, 'update'])->name('hubs.update');


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

Route::get('/my-commissions', [MyCommissionsLogController::class, 'index'])->name('my.commissions.index');
Route::get('/fiat-callback', function () { dd('success on fiat'); });
Route::get('/crypto-callbback', function () { dd('success on crypto'); });

Route::get('/crypto-withdrawal-callbback', function () { dd('success on crypto withdrawal'); });

Route::post('amend-transaction/{transaction}', [WalletController::class, 'amendTransaction'])
    ->name('amend.transaction');
