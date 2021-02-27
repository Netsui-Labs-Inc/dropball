@extends('backend.layouts.app')

@section('title', __('Hubs'))
@section('page-action')
    <a href="{{route('admin.hubs.create')}}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Add Hub</a>
@endsection
@section('content')
    <x-backend.card>
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 mb-0">
                        @lang('Hubs')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:hubs-table/>
        </x-slot>
    </x-backend.card>
@endsection
