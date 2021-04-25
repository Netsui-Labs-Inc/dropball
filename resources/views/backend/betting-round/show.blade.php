@extends('backend.layouts.app')

@section('title', __('Betting Round Management'))

@section('content')
    <div class="row">
        <div class="col-6">
            <x-backend.card headerClass="bg-info">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0">
                                @lang('Betting Round Info')
                            </h3>
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    @include('backend.betting-round.includes.info')
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-6">
            <x-backend.card headerClass="bg-primary">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0">
                                @lang('Control')
                            </h3>
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    @include('backend.betting-round.includes.control')
                </x-slot>
            </x-backend.card>
        </div>
    </div>
    @can('admin.access.betting-rounds.bets')
    <x-backend.card headerClass="bg-info">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0">
                        @lang('Betting Round Bets')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:bets-table :bettingRound="$bettingRound" />
        </x-slot>
    </x-backend.card>
    @endcan
@endsection
@section('page-action')
    @if($nextBettingRound)
    <a class="c-subheader-nav-link" href="{{route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $nextBettingRound])}}">Next Betting Round <i class="ml-2 fa fa-arrow-right"></i></a>
    @endif
@endsection
