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

            </table>
        </x-slot>

        <x-slot name="footer">
            <small class="float-right text-muted">

            </small>
        </x-slot>
    </x-backend.card>
@endsection
