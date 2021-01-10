@extends('frontend.layouts.app')

@section('title', __('Betting History'))

@section('content')
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <x-frontend.card headerClass="bg-gradient-primary">
                    <x-slot name="header">
                        <h2 class="h2 text-white mb-0">My Bet History</h2>
                    </x-slot>
                    <x-slot name="body">
                        <livewire:bets-table :user="$user" />
                    </x-slot>
                </x-frontend.card>
            </div>
        </div>
    </div>
@endsection
