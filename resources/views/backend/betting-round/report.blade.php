@extends('backend.layouts.app')

@section('title', __('Betting Round Management'))

@section('content')
<div class="row">
    <div class="col">
        <x-backend.card headerClass="bg-danger">
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
                <h2 class="text-muted">{{ number_format($bettingRound->bets()->sum('bet_amount') ?? 0, 2)}}</h2>
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col">
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
                <h2 class="text-muted">{{ $bettingRound->betOption->name ?? 'N/A' }}</h2>
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col">
        <x-backend.card headerClass="bg-warning">
            <x-slot name="header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="h3 text-white mb-0">
                            @lang('Payout')
                        </h3>
                    </div>
                </div>
            </x-slot>
            <x-slot name="body">
                <h2 class="text-muted">{{ number_format($payout, 2) }}</h2>
            </x-slot>
        </x-backend.card>
    </div>
</div>

<div class="row">
    <div class="col-12">
    <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0">
                        @lang('Bet Commissions')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:bet-commissions-table :bettingRound="$bettingRound"/>
        </x-slot>
    </x-backend.card>
    </div>
</div>
@endsection
@section('page-action')
    @if($nextBettingRound)
    <a class="c-subheader-nav-link" href="{{route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $nextBettingRound])}}">Next BettingRound <i class="ml-2 fa fa-arrow-right"></i></a>
    @endif
@endsection
