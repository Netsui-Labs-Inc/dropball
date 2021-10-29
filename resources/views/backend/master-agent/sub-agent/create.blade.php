@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Create Sub Agent'))

@section('content')
    <x-forms.post wire:ignore.self wire:ignore.self :action="route('admin.sub-agents.store')">
        @livewire('agent-form')
    </x-forms.post>
@endsection
