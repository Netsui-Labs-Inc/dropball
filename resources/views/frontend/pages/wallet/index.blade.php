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
    {{-- <x-utils.modal
        title="Request Withdrawal"
        type="form"
        targetId="requestWithdrawal"
        action="#"
        submitBtn="Send Request"
        bodyClass="pt-0"
    >
        <div>
            <p class="text-center m-0">
                Current Balance:
                <span>{{number_format(auth()->user()->balanceFloat)}}</span>
            </p>
            <label for="amount" class="col-form-label">@lang('Amount')</label>
            <div class="form-group mb-0">
                <input type="number" class="form-control" name="amount" min="1" step="1">
            </div>
                <label for="amount" class=" col-form-label">@lang('Channel')</label>
            <div class="form-group mb-0">
                <select name="channel" class="form-control">
                    <option value="gcash">GCash</option>
                    <option value="paymaya">Paymaya</option>
                    <option value="bank">Bank</option>
                </select>
            </div>
            <label for="amount" class="col-form-label">@lang('Account number')</label>
            <div class="form-group mb-0">
                <input type="string" class="form-control" name="account_number">
            </div>
            <label for="amount" class="col-form-label">@lang('Note')</label>
            <div class="form-group mb-0">
                <textarea class="form-control" name="Note"></textarea>
            </div>
                <label for="password" class="col-form-label">@lang('Enter Password')</label>
            <div class="form-group mb-0">
                <input type="password" class="form-control" name="password" >
            </div>
        </div>
    </x-utils.modal> --}}
    @include('includes.partials.request-withdrawal-form', [
    'walletBallance' => number_format(auth()->user()->balanceFloat),
    'route' => '#'
    ])
@endsection
