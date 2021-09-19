@extends('frontend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <div class="container-fluid py-4">
        <div class="row justify-content-center mx-12 mx-md-6">
            <div class="col-12 col-md-6">
                <x-frontend.card headerClass="bg-gradient-primary" class="text-center">
                    <x-slot name="header">
                        <h2 class="h2 text-white mb-0"><i class="fa fa-calendar"></i> {{\Carbon\Carbon::now(auth()->user()->timezone)->format('Y-m-d')}}</h2>
                    </x-slot>
                    <x-slot name="body">
                        @if($bettingEvent)
                            <x-utils.form-button
                                :action="route('frontend.index')"
                                method="get"
                                button-class="btn btn-default"
                                icon="fas fa-play"
                                name="view-betting-event"
                            >
                                @lang('Start Betting') - {{$bettingEvent->name}}
                            </x-utils.form-button>
                        @else
                           <span class="lead text-lg-center"> No Event for Today</span>
                        @endif
                    </x-slot>
                </x-frontend.card>
            </div>
            <div class="col-12 col-md-6">
                <x-frontend.card headerClass="bg-warning" class="text-center">
                    <x-slot name="header">
                        <h2 class="h2 text-white mb-0"><i class="fa fa-dollar-sign"></i> @lang("Your Account Balance")</h2>
                    </x-slot>
                    <x-slot name="body">
                        <span class="lead text-lg-center"> {{number_format(auth()->user()->balanceFloat)}}</span>
                    </x-slot>
                </x-frontend.card>
            </div>
            <div class="col-md-6 py-2">
                <x-frontend.card headerClass="bg-default">
                    <x-slot name="header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="h2 text-white mb-0"> @lang("Bet History")</h6>
                            </div>
                            <div class="col text-right">
                                <a href="{{route('frontend.bets.index')}}" class="btn btn-sm btn-primary text-uppercase">See all</a>
                            </div>
                        </div>
                    </x-slot>
                    <x-slot name="table">
                        <table class="table align-items-center table-flush">
                            @if(count($bets))
                            <thead class="thead-light">
                                <tr>
                                    <th>#</th>
                                    <th>Bet</th>
                                    <th>Status</th>
                                    <th>Gain/Loss</th>
                                    <th>Datetime</th>
                                </tr>
                            </thead>
                            @endif
                            @forelse($bets as $bet)
                                <tr>
                                    <td>#{{$bet->bettingRound->bettingEvent->id."/".$bet->bettingRound->queue}}</td>
                                    <td><span class="badge" style="background-color: {{$bet->option->color}}; color: {{$bet->option->color == "#FFFFFF" ?  "#525f7f" : "#FFFFFF" }}">{{strtoupper($bet->option->name)}}</span> / {{number_format($bet->bet_amount)}}</td>
                                    <td>{!! $bet->statusLabel() !!}</td>
                                    <td>{!! $bet->gainLossLabel() !!}</td>
                                    <td>{{ $bet->created_at->setTimezone($bet->user->timezone)->toDateTimeString() }}</td>
                                </tr>
                            @empty
                                <p class="text-center lead">No Bets History Available</p>
                            @endforelse
                        </table>
                    </x-slot>
                </x-frontend.card>
            </div><!--col-md-10-->
            <div class="col-md-6 py-2">
                <x-frontend.card headerClass="bg-info">
                    <x-slot name="header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="h2 text-white mb-0"> @lang("Withdrawal / Deposit History")</h2>
                            </div>
                            <div class="col text-right">
                                <a href="{{route('frontend.wallet.index')}}" class="btn btn-sm btn-white text-uppercase">See all</a>
                            </div>
                        </div>
                    </x-slot>
                    <x-slot name="table">
                        <table class="table align-items-center table-flush">
                            @if(count($transactions))
                            <thead class="thead-light">
                            <tr>
                                <th>#ID</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Confirmed</th>
                                <th>Date and Time</th>
                            </tr>
                            </thead>
                            @endif
                            @forelse($transactions as $transaction)
                                <tr>
                                    <td>#{{$transaction->id}}</td>
                                    <td><span class="badge {{$transaction->type == 'deposit' ? 'badge-success' : 'badge-default'}}">{!! $transaction->type !!}</span></td>
                                    <td class="{{$transaction->amountFloat < 0 ? 'text-danger': 'text-success'}}">  {{$transaction->amountFloat > 0 ? '+': ' '}}{{number_format($transaction->amountFloat)}}</td>
                                    <td><span class='badge {{$transaction->confirmed ? 'badge-success': 'badge-warning'}}'>{{$transaction->confirmed ? 'confirmed': 'pending'}}</span></td>
                                    <td>{{$transaction->created_at}}</td>
                                </tr>
                            @empty
                                <p class="text-center lead">No Withdrawal History Available</p>
                            @endforelse
                        </table>
                    </x-slot>
                </x-frontend.card>


            </div><!--col-md-10-->
            <div class="col-md-6 py-2">
                <x-frontend.card headerClass="bg-danger">
                    <x-slot name="header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="h2 text-white mb-0"> @lang("Cash-in History")</h2>
                            </div>
                            <div class="col text-right">
                                <a href="{{route('cash-in.index')}}" class="btn btn-sm btn-white text-uppercase">See all</a>
                            </div>
                        </div>
                    </x-slot>
                    <x-slot name="table">
                        <table class="table align-items-center table-flush">
                            @if(count($cashIns))
                            <thead class="thead-light">
                                <tr>
                                    <th>Channel</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            @endif
                            @forelse($cashIns as $cashIn)
                                <tr>
                                    <td>{{ $cashIn->channel }}</td>
                                    <td>{{ $cashIn->amount }}</td>
                                    <td>{{ $cashIn->currency }}</td>
                                    <td>
                                        @if($cashIn->status === 0)
                                            <div class="text-warning cashIn-{{ $cashIn->id }}">Pending</div>
                                        @elseif ($cashIn->status === 1)
                                            <div class="text-success cashIn-{{ $cashIn->id }}">Success</div>
                                        @else
                                            <div class="text-danger cashIn-{{ $cashIn->id }}">Failed</div>
                                        @endif
                                    </td>
                                    <td>{{ $cashIn->created_at }}</td>
                                    <td><button class="btn btn-sm btn-outline-warning btn-refresh fas fa-sync" data-cash_in_id="{{ $cashIn->id }}"
                                        @if($cashIn->status)
                                            disabled="disabled"
                                        @endif
                                        ></button></td>
                                </tr>
                            @empty
                                <p class="text-center lead">No Cash-in History Available</p>
                            @endforelse
                        </table>
                    </x-slot>
                </x-frontend.card>


            </div><!--col-md-10-->
        </div><!--row-->
    </div>
    <div class="container-fluid py-4">
        <div class="row">

        </div><!--row-->
    </div><!--container-->
  

@endsection
