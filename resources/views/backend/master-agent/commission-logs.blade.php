@extends('backend.layouts.app')

@section('title', __('Commissions History'))

@section('content')
    <div class="row justify-content-center py-2">
        <div class="col-md-12">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <x-utils.link
                        :text="__('Players')"
                        class="nav-link bg-white active"
                        id="commissions-players-tab"
                        data-toggle="pill"
                        href="#commissions-players"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true"/>
                    <x-utils.link
                        :text="__('Master Agents')"
                        class="nav-link bg-white"
                        id="commissions-master-agents-tab"
                        data-toggle="pill"
                        href="#commissions-master-agents"
                        role="tab"
                        aria-controls="active"
                        aria-selected="true"/>
                </div>
            </nav>

            <div class="tab-content" id="tabsContent">
                <div class="tab-pane fade show active" id="commissions-players" role="tabpanel" aria-labelledby="commissions-players-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:user-commissions-table :user="$user" type="player"/>
                        </x-slot>
                    </x-backend.card>
                </div>
                <div class="tab-pane fade show" id="commissions-master-agents" role="tabpanel" aria-labelledby="commissions-master-agents-tab">
                    <x-backend.card>
                        <x-slot name="body">
                            <livewire:user-commissions-table :user="$user" type="master agent"/>
                        </x-slot>
                    </x-backend.card>
                </div>
            </div>
        </div>
    </div>
@endsection
