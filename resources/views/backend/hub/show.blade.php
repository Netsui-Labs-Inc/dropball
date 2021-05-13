@extends('backend.layouts.app')

@section('title', __('View Hub'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Hub Info')
        </x-slot>

        <x-slot name="headerActions">
        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{{$hub->name}}</td>
                </tr>
                <tr>
                    <td>Admin Name</td>
                    <td>{{$hub->admin->name}}</td>
                </tr>
                <tr>
                    <td>Admin Email</td>
                    <td>{{$hub->admin->email}}</td>
                </tr>
                <tr>
                    <td>Created at</td>
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
