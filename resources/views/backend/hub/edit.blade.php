@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Edit Hub'))

@section('content')
    <x-forms.put :action="route('admin.hubs.update', $hub)">
        <x-backend.card>
            <x-slot name="header">
                @lang('Edit Hub')
            </x-slot>

            <x-slot name="headerActions">
                <x-utils.link class="card-header-action" :href="route('admin.auth.user.index')" :text="__('Cancel')" />
            </x-slot>

            <x-slot name="body">
                <div class="form-group row">
                    <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>

                    <div class="col-md-10">
                        <input type="text" name="name" class="form-control" placeholder="{{ __('Name') }}" value="{{$hub->name}}" maxlength="100" required />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="admin" class="col-md-2 col-form-label">@lang('Admin')</label>
                    <div class="col-md-10">
                        {{Form::select('admin_id', $hubAdmins, $hub->admin_id, ['class' => 'form-control', 'placeholder' =>'Select Admin', 'required'])}}
                    </div>
                </div>
                <livewire:hub-commission-rate :edit="true" :hub="$hub"/>
            </x-slot>

            <x-slot name="footer">
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update Hub')</button>
            </x-slot>
        </x-backend.card>
    </x-forms.put>
@endsection
