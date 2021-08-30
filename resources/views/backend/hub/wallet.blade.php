@extends('backend.layouts.app')

@section('title', __('View Hub Wallet'))

@section('content')
    <h2 class="mb-4">{{$hub->name}} Wallet</h2>
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <x-frontend.card headerClass="bg-primary">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h4 class="h4 text-white mb-0"> @lang("Transaction History")</h4>
                        </div>
                        @unlessrole('Processor')
                        <div class="col text-right">
                            <x-utils.link
                                class="btn btn-info text-white"
                                dataTarget="#addCash"
                                :text="__('Add Cash')"
                            />
                        </div>
                            @endunlessrole()
                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:transactions-table :model="$hub" />
                </x-slot>
            </x-frontend.card>
        </div>
    </div>
    <x-utils.modal
        title="Add Cash"
        type="form"
        targetId="addCash"
        action="{{route('admin.hubs.wallet.deposit', $hub)}}"
        submitBtn="Add Cash"
    >
        <div>
            <p class="pb-2 text-center">
                Current Balance <br>
                <span class="lead">{{number_format($hub->balanceFloat)}}</span>
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
