@extends('backend.layouts.app')

@section('title', __('View Withdrawal'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Withdrawal Info')
        </x-slot>

        <x-slot name="headerActions">

        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tr>
                    <th>@lang('ID')</th>
                    <td>{{$withdrawal->id}}</td>
                </tr>
                <tr>
                    <th>@lang('UUID')</th>
                    <td>{{$withdrawal->uuid}}</td>
                </tr>
                <tr>
                    <th>@lang('Requested by')</th>
                    <td>{{$withdrawal->user->name}}</td>
                </tr>

                <tr>
                    <th>@lang('Channel')</th>
                    <td><span class='badge badge-primary'> {{$withdrawal->channel}}</span></td>
                </tr>

                <tr>
                    <th>@lang('Account Number')</th>
                    <td><span class='badge badge-info'> {{$withdrawal->account_number}}</span></td>
                </tr>

                <tr>
                    <th>@lang('Amount')</th>
                    <td>{{ number_format($withdrawal->amountFloat, 2)}}</td>
                </tr>

                <tr>
                    <th>@lang('Status')</th>
                    <td><span class='badge badge-info'> {{$withdrawal->status}}</span></td>
                </tr>
                <tr>
                    <th>@lang('Note')</th>
                    <td>
                        {{$withdrawal->note}}
                    </td>
                </tr>

            </table>
        </x-slot>

        <x-slot name="footer">
            <small class="float-right">
                @if($withdrawal->status !== 'completed')
                    <x-utils.form-button :action="route('admin.withdrawals.complete', $withdrawal)" button-class="btn btn-success ">Approve Withdrawal </x-utils.form-button>
                @endif
            </small>
        </x-slot>
    </x-backend.card>
@endsection
