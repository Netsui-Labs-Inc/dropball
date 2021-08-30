@extends('backend.layouts.app')

@section('title', __('View Hub'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Hub Info')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link class="card-header-action" :href="route('admin.hubs.edit', $hub)" :text="__('Edit Hub')" />
        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tbody>
                <tr>
                    <td>@lang('Name')</td>
                    <td>{{$hub->name}}</td>
                </tr>
                <tr>
                    <td>@lang('Admin Name')</td>
                    <td>{{$hub->admin->name}}</td>
                </tr>
                <tr>
                    <td>@lang('Admin Email')</td>
                    <td>{{$hub->admin->email}}</td>
                </tr>
                <tr>
                    <td>@lang('Created at')</td>
                    <td>{{$hub->created_at}}</td>
                </tr>
                </tbody>
            </table>
        </x-slot>

        <x-slot name="footer">
            <small class="float-right text-muted">

            </small>
        </x-slot>
    </x-backend.card>
@endsection
