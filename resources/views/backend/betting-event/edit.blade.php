@extends('backend.layouts.app')

@section('title', __('Update Betting Event'))

@section('content')
    <x-forms.put :action="route('admin.betting-events.update', $bettingEvent)">
        <x-backend.card headerClass="bg-primary">
        <x-slot name="header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="h3 text-white mb-0"> @lang("Update Betting Event")</h3>
                </div>
            </div>
        </x-slot>
            <x-slot name="body">
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" name="name" value="{{$bettingEvent->name}}">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Schedule')</label>
                        <div class="col-md-10">
                            <input type="date" class="form-control" name="schedule" value="{{$bettingEvent->schedule}}">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-md-2 col-form-label">@lang('Description')</label>
                    <div class="col-md-10">
                        <textarea name="description" class="form-control" cols="30" rows="5">{{$bettingEvent->description}}</textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-md-2 col-form-label">@lang('Stream URL')</label>
                    <div class="col-md-10">
                        <input type="url" class="form-control" name="stream_url" placeholder="Stream URL" value="{{$bettingEvent->stream_url}}">
                    </div>
                </div>
                <div x-data="{betAdmin : ''}">
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Bet Admin')</label>
                        <div class="col-md-10">
                            {{Form::select('bet_admin_id', $admins, $bettingEvent->bet_admin_id,['class' => 'form-control', 'required'])}}
                        </div>
                    </div>
                </div>
            </x-slot>
            <x-slot name="footer">
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update Betting Event')</button>
            </x-slot>
        </x-backend.card>
    </x-forms.put>
@endsection
