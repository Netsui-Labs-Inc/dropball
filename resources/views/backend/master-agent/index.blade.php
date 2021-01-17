@extends('backend.layouts.app')

@section('title', __('Master Agents'))

@section('content')
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <x-utils.link
                :text="__('Active Players')"
                class="nav-link bg-white active"
                id="active-players-tab"
                data-toggle="pill"
                href="#active-players"
                role="tab"
                aria-controls="active"
                aria-selected="true" />
            <x-utils.link
                class="nav-link bg-white"
                id="active-players-tab"
                data-toggle="pill"
                href="#pending-players"
                role="tab"
                aria-controls="active"
                aria-selected="true" >
                @lang("Pending Players") @if($pendingPlayers->count()) <span class="badge badge-danger">{{$pendingPlayers->count()}}</span>@endif
            </x-utils.link>
        </div>
    </nav>
    <div class="tab-content" id="tabsContent">
        <div class="tab-pane fade show active" id="active-players" role="tabpanel" aria-labelledby="active-players-tab">
            <x-backend.card>
                <x-slot name="body">
                    <livewire:players-table admin="{{auth()->user()->hasRole('Administrator')}}"/>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="tab-pane fade show" id="pending-players" role="tabpanel" aria-labelledby="pending-players-tab">
            <x-backend.card>
                <x-slot name="body">
                    <livewire:players-table status="unverified" admin="{{auth()->user()->hasRole('Administrator')}}"/>
                </x-slot>
            </x-backend.card>
        </div>
    </div>

@endsection
