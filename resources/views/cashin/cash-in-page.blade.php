@extends('backend.layouts.app')

@section('title', __('Wallet Management'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 mb-0">
                        @lang('Cash In History')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:cash-in-table />
        </x-slot>
    </x-backend.card>
@endsection
