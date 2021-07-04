@extends('backend.layouts.app')

@section('title', __('Betting Events Jackpot'))

@section('content')
    <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0"> @lang("Winners")</h3>
                </div>
            </div>
        </x-slot>

        <x-slot name="body">
            <livewire:jackpot-winners-table :jackpot="$jackpot" />
        </x-slot>
    </x-backend.card>
@endsection
