@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <h2 class="mb-4">Welcome Bet Admin {{$logged_in_user->name}}</h2>
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
                                @lang('Moderate Betting Round')
                            </x-utils.form-button>
                        @else
                            <span class="lead text-lg-center"> No Betting Round Available</span>
                        @endif
                    @else
                        <span class="lead text-lg-center"> No Event for Today</span>
                    @endif
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection