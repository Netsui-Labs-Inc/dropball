@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <h2 class="mb-4">Welcome Processor {{$logged_in_user->name}}</h2>
    <div class="row">
        <div class="col-12 col-md-3">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-danger">{{number_format($hubs ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total HUBS")</small>
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection
