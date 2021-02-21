@extends('backend.layouts.app')

@section('title', __('View Master Agent Wallet'))

@section('content')
    <h2 class="mb-4">{{$user->name}} Wallet</h2>
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <x-frontend.card headerClass="bg-primary">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0"> @lang("Withdrawal / Deposit History")</h3>
                        </div>
                        <div class="col text-right">
                            <x-utils.link
                                class="btn btn-info text-white"
                                dataTarget="#addCash"
                                :text="__('Add Cash')"
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
    <x-utils.modal
        title="Add Cash"
        type="form"
        targetId="addCash"
        action="{{route('admin.master-agents.wallet.deposit', $user)}}"
        submitBtn="Add Cash"
    >
        <div>
            <p class="pb-2 text-center">
                Current Balance <br>
                <span class="lead">{{number_format($user->balanceFloat)}}</span>
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
