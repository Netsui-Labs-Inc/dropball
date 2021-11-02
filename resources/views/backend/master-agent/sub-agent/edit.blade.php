@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Edit Agent'))

@section('content')
<x-forms.post wire:ignore.self :action="route('admin.agents.update', $agent)">
    <livewire:agent-form  :agent="$agent" :edit="true" :editMode="true">
</x-forms.post>
@endsection
