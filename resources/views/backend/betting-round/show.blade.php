@extends('backend.layouts.app')

@section('title', __('Betting Round Management'))

@section('content')
<div class="row">
    <div class="col-md-5 col-sm-6 col-12">
        <x-backend.card headerClass="bg-primary">
            <x-slot name="header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="h3 text-white mb-0">
                            @lang('Betting Round Status')
                        </h3>
                    </div>
                </div>
            </x-slot>
            <x-slot name="body">
                <div class="row">
                    <div class="col-12 col-md-4 h1 text-center">#{{$bettingRound->queue}}</div>
                    <div class="col-12 col-md-8 h1 text-center">{!!$bettingRound->statusLabel()!!}</div>
                </div>
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col-12 col-md-7 col-sm-6">
        <x-backend.card headerClass="bg-primary">
            <x-slot name="header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="h3 text-white mb-0">
                            @lang('Betting Round Control')
                        </h3>
                    </div>
                </div>
            </x-slot>
            <x-slot name="body">
                @include('backend.betting-round.includes.control')
                @can('admin.access.betting-rounds.report')
                    @if ($bettingRound->status == 'ended')
                        <div class="row">
                            <div class="col h1 text-center">
                                {!! $bettingRound->resultLabel() !!}
                            </div>
                            <div class="col h1">
                                <x-utils.form-button
                                    :action="route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $bettingRound])"
                                    method="get"
                                    button-class="btn btn-info btn-lg btn-block text-white"
                                    icon="fas fa-chart-bar"
                                    name="view-reports"
                                >
                                    @lang('View report')
                                </x-utils.form-button>
                            </div>
                        </div>
                    @endif
                @endcan
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col-12">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <x-utils.link
                    :text="__('Betting Round Info')"
                    class="nav-link bg-white active"
                    id="bettting-round-info"
                    data-toggle="pill"
                    href="#betting-round-info"
                    role="tab"
                    aria-controls="active"
                    aria-selected="true" />
                @can('admin.access.betting-rounds.bets')
                    <x-utils.link
                        :text="__('Betting Round Bets')"
                        class="nav-link bg-white"
                        id="betting-round-bets-"
                        data-toggle="pill"
                        href="#betting-round-bets"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true" />
                @endcan
            </div>
        </nav>
        <div class="tab-content" id="tabsContent">
            <div class="tab-pane fade show active" id="betting-round-info" role="tabpanel" aria-labelledby="betting-round-info">
                <x-backend.card>
                    <x-slot name="body">
                        @include('backend.betting-round.includes.info')
                    </x-slot>
                </x-backend.card>
            </div>
            @can('admin.access.betting-rounds.bets')
                <div class="tab-pane fade show" id="betting-round-bets" role="tabpanel" aria-labelledby="betting-round-bets">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:bets-table :bettingRound="$bettingRound" />
                        </x-slot>
                    </x-backend.card>
                </div>
            @endcan
        </div>
    </div>
</div>
@endsection
@section('page-action')
    @if($nextBettingRound)
    <a class="c-subheader-nav-link" href="{{route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $nextBettingRound])}}">Next Betting Round <i class="ml-2 fa fa-arrow-right"></i></a>
    @endif
@endsection
