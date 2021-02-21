<?php
use App\Domains\BettingEvent\Http\Controllers\Frontend\BettingEventController;
use Tabuna\Breadcrumbs\Trail;

Route::group(['middleware' => ['auth', 'is_user', config('boilerplate.access.middleware.verified'),'balance.required']], function () {
    Route::get('/', [BettingEventController::class, 'eventToday'])->name('index');

    Route::get('betting-events/{bettingEvent}', [BettingEventController::class, 'show'])
        ->name('betting-events.show')
        ->breadcrumbs(function (Trail $trail, $bettingEvent) {
            $trail->parent('frontend.index');
            $trail->push($bettingEvent->name, route('frontend.betting-events.show', $bettingEvent));
        });
});
