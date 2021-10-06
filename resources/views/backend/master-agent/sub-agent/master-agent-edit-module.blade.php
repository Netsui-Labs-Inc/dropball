@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Edit Agent'))

@section('content')
<x-forms.post wire:ignore.self :action="route('admin.agents.update.by.master.agent', $agent)">
    <livewire:agent-form  :agent="$agent" :edit="true" :masterAgentsEdit="1">
</x-forms.post>
@endsection
