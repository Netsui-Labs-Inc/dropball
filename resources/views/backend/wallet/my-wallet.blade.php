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
                    <x-utils.link
                        :text="__('Commissions')"
                        class="nav-link bg-white"
                        id="commissions-table-tab"
                        data-toggle="pill"
                        href="#commissions-table"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true"/>
                </div>
            </nav>

            <div class="tab-content" id="tabsContent">
                <div class="tab-pane fade show active" id="credit-wallet" role="tabpanel" aria-labelledby="credit-wallet-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:master-agent-transactions-table :user="$user" :wallet="'default'" :action="true" />
                        </x-slot>
                    </x-backend.card>
                </div>
                <div class="tab-pane fade show" id="income-wallet" role="tabpanel" aria-labelledby="income-wallet-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:master-agent-transactions-table :user="$user" :wallet="'income-wallet'" :action="true" />
                        </x-slot>
                    </x-backend.card>
                </div>
                <div class="tab-pane fade show" id="commissions-table" role="tabpanel" aria-labelledby="commissions-table-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:user-commissions-table :user="$user" />
                        </x-slot>
                    </x-backend.card>
                </div>
            </div>
        </div>
    </div>
    @include('includes.partials.request-withdrawal-form', [
        'walletBallance' => number_format(auth()->user()->getWallet('income-wallet')->balanceFloat),
        'route' => route('admin.my.wallet.transactions.withdraw')
        ])
@endsection

@section('page-action')
    <x-utils.link
        class="btn btn-sm btn-primary"
        dataTarget="#requestWithdrawal"
        :text="__('Request Withdrawal')"
    />
@endsection
