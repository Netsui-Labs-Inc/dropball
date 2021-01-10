@extends('backend.layouts.app')

@section('title', __('Create Betting Event'))

@section('content')
    <x-forms.post :action="route('admin.betting-events.store')">
        <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0"> @lang("Create Betting Event")</h3>
                </div>
            </div>
        </x-slot>
            <x-slot name="body">
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" name="name">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Schedule')</label>
                        <div class="col-md-10">
                            <input type="date" class="form-control" name="schedule">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-md-2 col-form-label">@lang('Description')</label>
                    <div class="col-md-10">
                        <textarea name="description" class="form-control" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div x-data="{betAdmin : ''}">
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Bet Admin')</label>
                        <div class="col-md-10">
                            <select name="bet_admin_id" class="form-control" required x-on:change="betAdmin = $event.target.value">
                                <option value="">Select Bet Admin</option>
                                @foreach($admins as $admin)
                                    <option value="{{$admin->id}}">{{$admin->name}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
            </x-slot>
            <x-slot name="footer">
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Create Betting Event')</button>
            </x-slot>
        </x-backend.card>
    </x-forms.post>
@endsection
