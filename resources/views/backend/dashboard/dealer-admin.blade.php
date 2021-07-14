@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <h2 class="mb-4">Welcome Dealer Admin {{$logged_in_user->name}}</h2>
    <div class="row">
        <div class="col-12">
            <x-backend.card headerClass="bg-gradient-info" class="text-center">
                <x-slot name="header">
                    <h3 class="h3 text-white mb-0"><i class="fa fa-calendar"></i> {{\Carbon\Carbon::now(auth()->user()->timezone)->format('Y-m-d')}}</h3>
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection
