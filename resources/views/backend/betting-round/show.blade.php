@extends('backend.layouts.app')

@section('title', __('Betting Round Management'))

@section('content')
<div class="row">
    <div class="col-12">
        <x-backend.card headerClass="bg-primary" bodyClass="p-0 m-0">
            <x-slot name="header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="h3 text-white mb-0">
                           Betting Round #{{$bettingRound->queue}} | {!!$bettingRound->statusLabel()!!}
                        </h3>
                    </div>
                </div>
            </x-slot>
            <x-slot name="body">
                @if($bettingEvent->stream_url)
                    <iframe src="{{$bettingEvent->stream_url}}&autoplay=true"
                            javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));
                            style="height:59vh;width:100%;border:none;overflow:hidden;"
                            allow="autoplay; picture-in-picture"
                            frameborder="0"></iframe>
                @else
                    <h2 class="text-gray text-center">No Stream Found</h2>
                @endif
            </x-slot>
        </x-backend.card>
    </div>

    <div class="col-12" style="display: {{ $sVisible }}">
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

                <livewire:front-end.select-winning-option theme="tailwind" :bettingOptions="$bettingOptions" :bettingEventId="$bettingEvent->id" />
                @can('admin.access.betting-rounds.report')
                    @if ($bettingRound->status == 'ended')
                        <div class="row">
                            <div class="col-6 h1 text-center">
                                {!! $bettingRound->resultLabel() !!}
                            </div>
                            <div class="col-3 h2">
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
                            <div class="col-3 h2">
                                <x-utils.form-button
                                    :action="route('admin.betting-events.betting-rounds.activity-logs', [$bettingRound->bettingEvent, $bettingRound, 'sorts' => ['log_name' => 'desc']])"
                                    method="get"
                                    button-class="btn btn-info btn-lg btn-block text-white"
                                    icon="fas fa-chart-bar"
                                    name="view-activity-logs"
                                >
                                    @lang('View Logs')
                                </x-utils.form-button>
                            </div>
                        </div>

                    @endif
                @endcan
            </x-slot>
        </x-backend.card>
    </div>
    <div class="col-12">
        <x-backend.card headerClass="bg-primary">
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
                <livewire:betting-round-pool-money :bettingRoundId="$bettingRound->id" />
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
