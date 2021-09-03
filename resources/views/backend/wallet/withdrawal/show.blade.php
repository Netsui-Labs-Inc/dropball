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
                    <th>@lang('Requested at')</th>
                    <td>{{$withdrawal->created_at}}</td>
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
                    <th>@lang('Account Name')</th>
                    <td><span class='badge badge-info'> {{$withdrawal->account_name ?? 'N/A'}}</span></td>
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
                        {{$withdrawal->notes}}
                    </td>
                </tr>

            </table>
        </x-slot>

        <x-slot name="footer">
            @if($withdrawal->status === 'pending')
            <div class="col text-right">
                <x-utils.link
                    class="btn btn-info text-white btnApprove"
                    dataTarget="#approvalDetails"
                    :text="__('Approve Withdrawal')"
                />
            </div>
            @endif
        </x-slot>
    </x-backend.card>
    <x-utils.modal
        title="Approval Details"
        type="form"
        targetId="approvalDetails"
        action="{{route('admin.withdrawals.complete')}}"
        submitBtn="Approve"
    >
        <div>
            <input type="hidden" value="{{$withdrawal->id}}" name="withdrawal_id">
            <input type="hidden" value="{{$withdrawal->created_at}}" class="datepicker-min">
            <div class="row">
                <label for="amount" class="col col-form-label"></label>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Reference #')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="text" class="form-control" name="reference_number" min="1" step="1">
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Channel')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <select name="channel" class="form-control">
                        <option value="gcash">GCash</option>
                        <option value="paymaya">Paymaya</option>
                        <option value="bank">Bank</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Date of Transfer')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="date" id="datePickerId" class="form-control approvalDatepicker" name="schedule" max="{{ $withdrawal->created_at->format('d-m-Y') }}">
                </div>
            </div>
        </div>
    </x-utils.modal>
@endsection
