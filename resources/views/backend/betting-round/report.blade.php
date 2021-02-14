@extends('backend.layouts.app')

@section('title', __('Betting Round Management'))

@section('content')
    <x-backend.card headerClass="bg-info">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0">
                        @lang('Pool Money')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <h2>{{ number_format($bettingRound->bets()->sum('bet_amount') ?? 0)}}</h2>
        </x-slot>
    </x-backend.card>

    <x-backend.card headerClass="bg-info">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0">
                        @lang('Result')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <h2>{{ $bettingRound->betOption->name ?? 'N/A' }}</h2>
        </x-slot>
    </x-backend.card>

@endsection
@section('page-action')
    @if($nextBettingRound)
    <a class="c-subheader-nav-link" href="{{route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $nextBettingRound])}}">Next BettingRound <i class="ml-2 fa fa-arrow-right"></i></a>
    @endif
@endsection
