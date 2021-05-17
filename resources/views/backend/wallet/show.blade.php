@extends('backend.layouts.app')

@section('title', __('View Transaction'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Transaction Info')
        </x-slot>

        <x-slot name="headerActions">

        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tr>
                    <th>@lang('ID')</th>
                    <td>{{$transaction->id}}</td>
                </tr>
                <tr>
                    <th>@lang('UUID')</th>
                    <td>{{$transaction->uuid}}</td>
                </tr>

                <tr>
                    <th>@lang('Wallet')</th>
                    <td>{{$transaction->wallet->name}}</td>
                </tr>

                <tr>
                    <th>@lang('Type')</th>
                    <td><span class='badge badge-info'> {{$transaction->type}}</span></td>
                </tr>

                <tr>
                    <th>@lang('Amount')</th>
                    <td>{{ number_format($transaction->amountFloat)}}</td>
                </tr>

                <tr>
                    <th>@lang('Status')</th>
                    <td><span class='badge badge-info'> {{$transaction->confirmed ? 'confirmed': 'pending'}}</span></td>
                </tr>
                <tr>
                    <th>@lang('Meta')</th>
                    <td>
                        @forelse($transaction->meta ?? [] as $key => $meta)
                            <p><strong>{{strtoupper($key)}}</strong> : {{strtoupper($meta)}}</p>
                        @empty
                            N/A
                        @endforelse
                    </td>
                </tr>

            </table>
        </x-slot>

        <x-slot name="footer">
            <small class="float-right">
                @if(!$transaction->confirmed)
                    @if(auth()->user()->hasRole('Operator') && $transaction->payable instanceof \App\Domains\Hub\Models\Hub)
                        <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                    @endif
                    @if(auth()->user()->hasRole('Master Agent') && $transaction->payable instanceof \App\Domains\Auth\Models\User)
                        @if($transaction->payable->hasRole('Player'))
                            <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                        @endif
                    @endif
                    @if(auth()->user()->hasRole('Virtual Hub') && $transaction->payable instanceof \App\Domains\Auth\Models\User)
                        @if($transaction->payable->hasRole('Master Agent'))
                            <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                        @endif
                    @endif
                    @role('Administrator')
                        <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                    @endrole
                @endif
            </small>
        </x-slot>
    </x-backend.card>
@endsection
