@extends('backend.layouts.app')

@section('title', __('Create Betting Event BettingRound'))

@section('content')
    <x-forms.post :action="route('admin.betting-events.betting-rounds.store', $bettingEvent)">
    <x-backend.card>
        <x-slot name="header">
            @lang('Create Betting Event BettingRound')
        </x-slot>
        <x-slot name="body">

        </x-slot>
        <x-slot name="footer">
            <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Create BettingRound')</button>
        </x-slot>
    </x-backend.card>
    </x-forms.post>
@endsection
