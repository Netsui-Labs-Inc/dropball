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
    </x-backend.card>
@endsection
