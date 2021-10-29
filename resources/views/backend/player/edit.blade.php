@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Edit Player'))

@section('content')
    <livewire:edit-player-form :player="$player" />
@endsection
