@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Update User'))

@section('content')
    <x-forms.patch :action="route('admin.auth.user.update', $user)">
        <x-backend.card>
            <x-slot name="header">
                @lang('Update User')
            </x-slot>

            <x-slot name="headerActions">
                <x-utils.link class="card-header-action" :href="route('admin.auth.user.index')" :text="__('Cancel')" />
            </x-slot>

            <x-slot name="body">
                <div x-data="{userType : '{{ $user->type }}'}">
                    @if (!$user->isMasterAdmin())
                        <div class="form-group row">
                            <label for="name" class="col-md-2 col-form-label">@lang('Type')</label>

                            <div class="col-md-10">
                                <select name="type" class="form-control" required x-on:change="userType = $event.target.value">
                                    <option value="{{ $model::TYPE_USER }}" {{ $user->type === $model::TYPE_USER ? 'selected' : '' }}>@lang('User')</option>
                                    <option value="{{ $model::TYPE_ADMIN }}" {{ $user->type === $model::TYPE_ADMIN ? 'selected' : '' }}>@lang('Administrator')</option>
                                </select>
                            </div>
                        </div><!--form-group-->
                    @endif

                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>

                        <div class="col-md-10">
                            <input type="text" name="name" class="form-control" placeholder="{{ __('Name') }}" value="{{ old('name') ?? $user->name }}" maxlength="100" required />
                        </div>
                    </div><!--form-group-->

                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">@lang('E-mail Address')</label>

                        <div class="col-md-10">
                            <input type="email" name="email" id="email" class="form-control" placeholder="{{ __('E-mail Address') }}" value="{{ old('email') ?? $user->email }}" maxlength="255" required />
                        </div>
                    </div>
                    <!--form-group-->
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">@lang('Timezone')</label>

                        <div class="col-md-10">
                            <input type="text" name="timezone" class="form-control" placeholder="{{ __('Timezone') }}" value="{{ old('timezone') ?? $user->timezone }}" maxlength="100"  />
                        </div>
                    </div>
                    @if($user->hasRole('Master Agent'))
                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">@lang('Referral ID')</label>

                        <div class="col-md-10">
                            <input type="text" name="referral_id" id="referral_id" class="form-control" placeholder="{{ __('Referral ID') }}" value="{{ old('referral_id') ?? $user->referral_id }}" maxlength="255" required />
                        </div>
                    </div>
                    @endif
                    @if(!$user->hasVerifiedEmail())
                    <div class="form-group row">
                        <label for="email_verified" class="col-md-2 col-form-label">@lang('E-mail Verified')</label>

                        <div class="col-md-10">
                            <div class="form-check">
                                <input
                                    type="checkbox"
                                    name="email_verified"
                                    id="email_verified"
                                    value="1"
                                    class="form-check-input"
                                    x-on:click="emailVerified = !emailVerified"
                                    {{ old('email_verified') ? 'checked' : '' }} />
                            </div><!--form-check-->
                        </div>
                    </div><!--form-group-->
                    @endif
                    @if (!$user->isMasterAdmin())
                        @include('backend.auth.includes.roles')

                        @if (!config('boilerplate.access.user.only_roles'))
                            @include('backend.auth.includes.permissions')
                        @endif
                    @endif
                </div>
            </x-slot>

            <x-slot name="footer">
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update User')</button>
            </x-slot>
        </x-backend.card>
    </x-forms.patch>
@endsection
