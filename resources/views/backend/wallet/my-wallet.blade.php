@extends('backend.layouts.app')

@section('title', __('Wallet Management'))

@section('content')
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <x-frontend.card headerClass="bg-white">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="h2 text-muted mb-0"> @lang("Withdrawal / Deposit History")</h2>
                        </div>
                        <div class="col text-right">
                            <x-utils.link
                                class="btn btn-sm btn-primary"
                                dataTarget="#requestWithdrawal"
                                :text="__('Request Withdrawal')"
                            />
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:master-agent-transactions-table :user="$user" />
                </x-slot>
            </x-frontend.card>
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
        </div>
    </x-utils.modal>
@endsection
