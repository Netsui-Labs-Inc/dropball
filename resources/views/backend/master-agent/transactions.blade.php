@extends('backend.layouts.app')

@section('title', __('Master Agent Wallet Management'))

@section('content')
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <x-utils.link
                :text="__('Transactions')"
                class="nav-link bg-white active"
                id="active-transaction-tab"
                data-toggle="pill"
                href="#active-transaction"
                role="tab"
                aria-controls="active"
                aria-selected="true" />
            <x-utils.link
                class="nav-link bg-white"
                id="active-transaction-tab"
                data-toggle="pill"
                href="#pending-transaction"
                role="tab"
                aria-controls="active"
                aria-selected="true" >
                @lang("Pending Withdrawal") @if($pendingWithdrawals) <span class="badge badge-danger">{{$pendingWithdrawals}}</span>@endif
            </x-utils.link>
        </div>
    </nav>
    <div class="tab-content" id="tabsContent">
        <div class="tab-pane fade show active" id="active-transaction" role="tabpanel" aria-labelledby="active-transaction-tab">
            <x-backend.card>
                <x-slot name="body">
                    <livewire:master-agent-transactions-table :action="true" />
                </x-slot>
            </x-backend.card>
        </div>
        <div class="tab-pane fade show" id="pending-transaction" role="tabpanel" aria-labelledby="pending-transaction-tab">
            <x-backend.card>
                <x-slot name="body">
                    @hasrole("Virtual Hub")
                    <livewire:master-agent-withdrawals-table :confirmed="false" :action="true" :wallet="'income-wallet'" status="pending" reviewer="auth()->user()->id" />
                    @else
                        <livewire:master-agent-withdrawals-table :confirmed="false" :action="true" :wallet="'income-wallet'" />
                        @endhasrole
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection
