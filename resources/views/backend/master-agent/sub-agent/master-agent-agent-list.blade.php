@extends('backend.layouts.app')

@section('title', __('Sub Agents'))
@section('page-action')
    <a href="{{route('admin.agents.create')}}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Add Agent</a>
@endsection
@section('content')
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <x-utils.link
                :text="__('Active Agents')"
                class="nav-link bg-white active"
                id="active-players-tab"
                data-toggle="pill"
                href="#active-agents"
                role="tab"
                aria-controls="active"
                aria-selected="true" />
            <x-utils.link
                class="nav-link bg-white"
                id="active-players-tab"
                data-toggle="pill"
                href="#pending-agents"
                role="tab"
                aria-controls="active"
                aria-selected="true" >
                @lang("Pending") @if($pendingAgents->count()) <span class="badge badge-danger">{{$pendingAgents->count()}}</span>@endif
            </x-utils.link>
        </div>
    </nav>
    <div class="tab-content" id="tabsContent">
        <div class="tab-pane fade show active" id="active-agents" role="tabpanel" aria-labelledby="active-agents-tab">
            <x-backend.card>
                <x-slot name="body">
                    <livewire:sub-agents-table admin="{{auth()->user()->hasRole('Administrator')}}"/>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="tab-pane fade show" id="pending-agents" role="tabpanel" aria-labelledby="pending-agents-tab">
            <x-backend.card>
                <x-slot name="body">
                    <livewire:sub-agents-table status="unverified" admin="{{auth()->user()->hasRole('Administrator')}}"/>
                </x-slot>
            </x-backend.card>
        </div>
    </div>
@endsection
