@extends('backend.layouts.app')

@section('title', __('Master Agents'))
@section('page-action')
    <a href="
    @if($agentsLabel === 'Agent')
        {{route('admin.sub-agents.create')}}
    @else
        {{route('admin.master-agents.create')}}
    @endif" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Add {{ $agentsLabel }}</a>
@endsection
@section('content')
    <x-backend.card>
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 mb-0">
                        @lang($agentsLabel.'s')
                    </h3>
                </div>
            </div>
        </x-slot>
        <x-slot name="body">
            <livewire:master-agents-table/>
        </x-slot>
    </x-backend.card>
@endsection
