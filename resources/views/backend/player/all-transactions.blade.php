@extends('backend.layouts.app')

@section('title', __('View User'))

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
                @lang("Withdrawals")
                @if($pendingWithdrawals)
                    <span class="badge badge-danger">{{$pendingWithdrawals}}</span>
                @endif
            </x-utils.link>
        </div>
    </nav>
    <div class="tab-content" id="tabsContent">
        <div class="tab-pane fade show active" id="active-transaction" role="tabpanel" aria-labelledby="active-transaction-tab">
            <x-backend.card>
                <x-slot name="body">
                    @hasrole("Master Agent")
                    <livewire:players-transactions-table :action="true" :confirmed="true" />
                    @else
                        <livewire:players-transactions-table :action="true" />
                        @endhasrole
                </x-slot>
            </x-backend.card>
        </div>
        <div class="tab-pane fade show" id="pending-transaction" role="tabpanel" aria-labelledby="pending-transaction-tab">
            <x-backend.card>
                <x-slot name="body">
                    @hasrole("Master Agent")
                        <livewire:player-withdrawals-table status="pending" :reviewer="auth()->user()->id" />
                    @else
                        <livewire:player-withdrawals-table  />
                    @endhasrole
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection
