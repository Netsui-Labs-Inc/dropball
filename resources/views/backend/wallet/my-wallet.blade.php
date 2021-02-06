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
            </div>
        </div>
    </div>
    <x-utils.modal
        title="Request Withdrawal"
        type="form"
        targetId="requestWithdrawal"
        action="{{route('admin.my.wallet.transactions.withdraw')}}"
        submitBtn="Send Request"
    >
        <div>
            <p class="pb-2 text-center">
                Current Income Wallet Balance <br>
                <span class="lead">{{number_format(auth()->user()->getWallet('income-wallet')->balanceFloat)}}</span>
            </p>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Amount')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="number" class="form-control" name="amount" min="1" step="1">
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Channel')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <select name="channel" class="form-control">
                        <option value="gcash">GCash</option>
                        <option value="gcash">Paymaya</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Details')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <textarea class="form-control" name="details"></textarea>
                </div>
            </div>
            <div class="row">
                <label for="password" class="col col-form-label">@lang('Enter Password')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="password" class="form-control" name="password" >
                </div>
            </div>
        </div>
    </x-utils.modal>
@endsection

@section('page-action')
    <x-utils.link
        class="btn btn-sm btn-primary"
        dataTarget="#requestWithdrawal"
        :text="__('Request Withdrawal')"
    />
@endsection
