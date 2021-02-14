@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <h2 class="mb-4">Welcome Hub Admin {{$logged_in_user->name}}</h2>
    @if($hub)
    <div class="row">
        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($hub->balanceFloat ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Credit Balance")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($hub->hasWallet('income-wallet') ? $hub->getWallet('income-wallet')->balanceFloat : 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Income Balance")</small>
                </x-slot>
            </x-backend.card>
        </div>

        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-danger">{{number_format($masterAgents ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total Master Agents")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12">
            <x-frontend.card headerClass="bg-info">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0"> @lang("Transactions History")</h3>
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:transactions-table :model="$hub" />
                </x-slot>
            </x-frontend.card>
        </div>
    </div>
    @endif
@endsection
