@extends('frontend.layouts.app')

@section('title', __(' My Withdrawal / Deposit History'))

@section('content')
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <x-frontend.card headerClass="bg-gradient-primary">
                    <x-slot name="header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="h2 text-white mb-0"> @lang("Withdrawal / Deposit History")</h2>
                            </div>
                            <div class="col text-right">
                                <x-utils.link
                                    class="btn btn-sm btn-white"
                                    dataTarget="#requestWithdrawal"
                                    :text="__('Request Withdrawal')"
                                />
                            </div>
                        </div>
                    </x-slot>
                    <x-slot name="body">
                        <livewire:transactions-table :user="$user" :excludeBetTransactions="true" />
                    </x-slot>
                </x-frontend.card>
            </div>
        </div>
    </div>
    @include('includes.partials.request-withdrawal-form', [
    'walletBallance' => number_format(auth()->user()->balanceFloat),
    'route' => '#'
    ])
@endsection
