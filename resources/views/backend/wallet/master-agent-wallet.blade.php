@extends('backend.layouts.app')

@section('title', __('Wallet Management'))

@section('content')
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <x-utils.link
                        :text="__('Credit Wallet')"
                        class="nav-link bg-white active"
                        id="credit-wallet-tab"
                        data-toggle="pill"
                        href="#credit-wallet"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true" />
                    <x-utils.link
                        :text="__('Income Wallet')"
                        class="nav-link bg-white"
                        id="income-wallet-tab"
                        data-toggle="pill"
                        href="#income-wallet"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true"/>
                </div>
            </nav>
            <div class="tab-content" id="tabsContent">
                <div class="tab-pane fade show active" id="credit-wallet" role="tabpanel" aria-labelledby="credit-wallet-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:transactions-table :model="$user" :wallet="'default'" :action="true" />
                        </x-slot>
                    </x-backend.card>
                </div>
                <div class="tab-pane fade show" id="income-wallet" role="tabpanel" aria-labelledby="income-wallet-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:transactions-table :model="$user" :wallet="'income-wallet'" :action="true" />
                        </x-slot>
                    </x-backend.card>
                </div>
            </div>
        </div>
    </div>

@endsection
@include('includes.partials.request-withdrawal-form', [
    'walletBallance' => number_format(auth()->user()->getWallet('income-wallet')->balanceFloat),
    'route' => route('admin.my.wallet.transactions.withdraw')
    ])
@section('page-action')
    <x-utils.link
        class="btn btn-sm btn-primary"
        dataTarget="#requestWithdrawal"
        :text="__('Request Withdrawal')"
    />
@endsection
