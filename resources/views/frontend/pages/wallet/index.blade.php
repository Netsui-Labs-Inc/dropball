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
                        <livewire:transactions-table :user="$user" />
                    </x-slot>
                </x-frontend.card>
            </div>
        </div>
    </div>
    <x-utils.modal
        title="Request Withdrawal"
        type="form"
        targetId="requestWithdrawal"
        action="#"
        submitBtn="Send Request"
    >
        <div>
            <p class="pb-2 text-center">
                Current Balance <br>
                <span class="lead">{{number_format(auth()->user()->balanceFloat)}}</span>
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
