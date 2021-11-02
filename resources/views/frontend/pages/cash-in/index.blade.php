@extends('frontend.layouts.app')

@section('title', __(' My Cash In History'))

@section('content')
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <x-frontend.card headerClass="bg-gradient-danger">
                    <x-slot name="header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="h2 text-white mb-0"> @lang("Cash In History")</h2>
                            </div>

                        </div>
                    </x-slot>
                    <x-slot name="body">
                        <livewire:cash-in-table />
                    </x-slot>
                </x-frontend.card>
            </div>
        </div>
    </div>
@endsection
