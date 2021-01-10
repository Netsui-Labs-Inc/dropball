@extends('backend.layouts.app')

@section('title', __('Betting Events Management'))

@section('content')
<div class="row">
    <div class="col-12">
        <x-backend.card headerClass="bg-gradient-info" class="text-center">
            <x-slot name="header">
                <h3 class="h3 text-white mb-0"><i class="fa fa-calendar"></i> {{\Carbon\Carbon::now(auth()->user()->timezone)->format('Y-m-d')}}</h3>
            </x-slot>
            <x-slot name="body">
                @if($bettingEvent)
                    @if($bettingEvent->activeBettingRound()->first())
                        <x-utils.form-button
                            :action="route('admin.betting-events.betting-rounds.show', [$bettingEvent, $bettingEvent->activeBettingRound()->first()])"
                            method="get"
                            button-class="btn btn-info btn-lg text-white"
                            icon="fas fa-eye"
                            name="view-play"
                        >
                            @lang('Moderate Betting Event BettingRound')
                        </x-utils.form-button>
                    @else
                        <span class="lead text-lg-center"> No BettingRound Available</span>
                    @endif
                @else
                    <span class="lead text-lg-center"> No Event for Today</span>
                @endif
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col-12">
        <x-backend.card headerClass="bg-primary">
            <x-slot name="header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="h3 text-white mb-0">@lang('Betting Events Management')</h3>
                    </div>
                    <div class="col text-right">
                        <x-utils.link
                            class="btn btn-info text-white"
                            permission="true"
                            :href="route('admin.betting-events.create')"
                            :text="__('Create Event')"
                        />
                    </div>
                </div>
            </x-slot>
            <x-slot name="body">
                <livewire:betting-events-table />
            </x-slot>
        </x-backend.card>
    </div>
</div>
@endsection
