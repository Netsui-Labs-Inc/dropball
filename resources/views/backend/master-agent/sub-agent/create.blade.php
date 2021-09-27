@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Create Sub Agent'))

@section('content')
<x-forms.post :action="route('admin.sub-agents.store')">
    <x-backend.card>
        <x-slot name="header">
            @lang('Create Sub-Agent')
        </x-slot>

        <x-slot name="body">
            <div class="form-group row">
                <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>

                <div class="col-md-10">
                    <input type="text" name="name" class="form-control" placeholder="{{ __('Name') }}" value="{{ old('name') }}" maxlength="100" required />
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">@lang('E-mail Address')</label>

                <div class="col-md-10">
                    <input type="email" name="email" class="form-control" placeholder="{{ __('E-mail Address') }}" value="{{ old('email') }}" maxlength="255" required />
                </div>
            </div><!--form-group-->
            <div class="form-group row">
                <label for="mobile" class="col-md-2 col-form-label">@lang('Mobile Number')</label>

                <div class="col-md-10">
                    <input type="text" name="mobile" class="form-control" placeholder="{{ __('Mobile Number') }}" value="{{ old('mobile') }}" maxlength="255" required />
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="referral_id" class="col-md-2 col-form-label">@lang('Code Name')</label>

                <div class="col-md-10">
                    <input type="text" name="referral_id" class="form-control" placeholder="{{ __('Referral ID') }}" value="{{ old('referral_id') }}" maxlength="255" required />
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="password" class="col-md-2 col-form-label">@lang('Password')</label>

                <div class="col-md-10">
                    <input type="password" name="password" id="password" class="form-control" placeholder="{{ __('Password') }}" maxlength="100" required autocomplete="new-password" />
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="password_confirmation" class="col-md-2 col-form-label">@lang('Password Confirmation')</label>

                <div class="col-md-10">
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="{{ __('Password Confirmation') }}" maxlength="100" required autocomplete="new-password" />
                </div>
            </div><!--form-group-->
        </x-slot>

        <x-slot name="footer">
            <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Create Sub Agent')</button>
        </x-slot>
    </x-backend.card>
</x-forms.post>
@endsection
