@extends('backend.layouts.app')

@section('title', __('Dashboard - Master Agent'))

@section('content')
    <div class="row">
        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($user->balanceFloat ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total Balance")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-info">{{number_format($user->referrals()->count())}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total Players")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12">
            <x-frontend.card headerClass="bg-info">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0"> @lang("Master Agent Commission History")</h3>
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:commissions-table :model="$user" />
                </x-slot>
            </x-frontend.card>
        </div>
    </div>
@endsection
