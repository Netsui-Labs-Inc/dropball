@extends('backend.layouts.app')
@section('title', __('Player Bet History'))
@section('content')
    <h2 class="mb-4">{{$player->name}} Bet History</h2>
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <x-frontend.card headerClass="bg-primary">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h4 class="h4 text-white mb-0"> @lang("Bet History")</h4>
                        </div>

                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:bets-table :user="$player" />
                </x-slot>
            </x-frontend.card>
        </div>
    </div>
@endsection
