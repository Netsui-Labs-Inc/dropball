<?php

use App\Http\Controllers\Frontend\TermsController;
use Tabuna\Breadcrumbs\Trail;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */

Route::get('terms', [TermsController::class, 'index'])
    ->name('pages.terms')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('frontend.index')
            ->push(__('Terms & Conditions'), route('frontend.pages.terms'));
    });


Route::get('test' , function () {
     $user = \App\Domains\Auth\Models\User::find(8);
     $bettingEvent =  \App\Domains\BettingEvent\Models\BettingEvent::first();
     $winning =  (new \App\Domains\Bet\Actions\GetWinningStreakAction)($user, \App\Domains\BettingEvent\Models\BettingEvent::first());

     dd($bettingEvent->activeJackpot->winners()->create(['user_id' => 8]));
});
