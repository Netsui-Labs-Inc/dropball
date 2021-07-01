@extends('backend.layouts.app')

@section('title', __('Betting Events Management'))

@section('content')
    <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
        <div class="row align-items-center">
            <div class="col">
                <h3 class="h3 text-white mb-0"> @lang("Betting Event Info")</h3>
            </div>
        </div>
    </x-slot>

        <x-slot name="body">
            @include('backend.betting-event.includes.info')
        </x-slot>
    </x-backend.card>

    <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0"> @lang("Event Betting Rounds")</h3>
                </div>
                <div class="col text-right">
                    @if($bettingRound)
                        <x-utils.form-button
                            :action="route('admin.betting-events.betting-rounds.show', [$bettingEvent, $bettingRound])"
                            method="get"
                            button-class="btn btn-success text-white"
                            icon="fas fa-eye"
                            name="view-play"
                        >
                            @lang('View Active Betting Round')
                        </x-utils.form-button>
                    @endif
                    @can('admin.access.betting-rounds.create')
                    <x-utils.link
                        class="btn btn-info text-white"
                        dataTarget="#createBettingRound"
                        :text="__('Create Betting Round')"
                    />
                    @endcan
                </div>
            </div>
        </x-slot>

        <x-slot name="body">
            <livewire:betting-rounds-table :betting-event="$bettingEvent" />
        </x-slot>
    </x-backend.card>

    <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0"> @lang("Event Jackpot Rounds")</h3>
                </div>
                <div class="col text-right">
                    @can('admin.access.betting-rounds.create')
                        <x-utils.link
                            class="btn btn-info text-white"
                            dataTarget="#createJackpot"
                            :text="__('Create Jackpot')"
                        />
                    @endcan
                </div>
            </div>
        </x-slot>

        <x-slot name="body">
            <livewire:jackpots-table :betting-event="$bettingEvent"> </livewire:jackpots-table>
        </x-slot>
    </x-backend.card>

    <x-utils.modal
        :title="'Create Betting Rounds for '. $bettingEvent->name"
        type="form"
        targetId="createBettingRound"
        :action="route('admin.betting-events.betting-rounds.store', $bettingEvent)"
        submitBtn="Create Betting Round"
    >
        <div>
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label">@lang('Number of Betting Rounds')</label>
                <div class="col-md-8">
                    <input type="number" class="form-control" name="quantity" min="1" step="1">
                </div>
            </div>
        </div>
    </x-utils.modal>

    <x-utils.modal
        :title="'Create Jackpot Round for '. $bettingEvent->name"
        type="form"
        :action="route('admin.betting-events.jackpots.store', $bettingEvent)"
        targetId="createJackpot"
        submitBtn="Create Jackpot"
    >
        <div>
            <div class="form-group row">
                <label for="betting_round_id" class="col-md-4 col-form-label">@lang('Betting Round ID')</label>
                <div class="col-md-8">
                    <input type="number" class="form-control" name="betting_round_id" min="1" step="1">
                </div>
            </div>
        </div>
    </x-utils.modal>
@endsection
