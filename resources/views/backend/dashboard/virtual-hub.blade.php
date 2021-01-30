@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <h2 class="mb-4">Welcome Hub Admin {{$logged_in_user->name}}</h2>
    <div class="row">
        <div class="col-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($hub->balanceFloat ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total Balance")</small>
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
    </div>
@endsection
