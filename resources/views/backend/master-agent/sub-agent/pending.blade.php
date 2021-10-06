@extends('backend.layouts.app')

@section('title', __('Pending Sub Agents'))
@section('page-action')
    <a href="{{route('admin.agents.create')}}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Add Agent</a>
@endsection
@section('content')
    <x-backend.card>
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 mb-0">
                        @lang('Pending Agents')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:pending-sub-agents-table />
        </x-slot>
    </x-backend.card>
@endsection
