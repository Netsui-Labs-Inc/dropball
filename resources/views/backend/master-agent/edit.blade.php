@inject('model', '\App\Domains\Auth\Models\User')

@extends('backend.layouts.app')

@section('title', __('Create Master Agent'))

@section('content')
    <x-forms.put :action="route('admin.master-agents.update' . $hubText, $masterAgent)">
        <x-backend.card>
            <x-slot name="header">
                @lang('Update Master Agent - '. $masterAgent->name)
            </x-slot>

            <x-slot name="headerActions">
                <x-utils.link class="card-header-action" :href="route('admin.auth.user.index')" :text="__('Cancel')" />
            </x-slot>
          
            <x-slot name="body">
                @role('Administrator')
                <div class="form-group row">
                    <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>
                    <div class="col-md-10">
                        <input  type="text" name="name" class="form-control" placeholder="{{ __('Name') }}" value="{{ $masterAgent->name ?? old('name') }}" maxlength="100" required />
                    </div>
                </div><!--form-group-->

                <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label">@lang('E-mail Address')</label>

                    <div class="col-md-10">
                        <input type="email" name="email" class="form-control" placeholder="{{ __('E-mail Address') }}" value="{{ $masterAgent->email ?? old('email') }}" maxlength="255" required />
                    </div>
                </div><!--form-group-->
                <div class="form-group row">
                    <label for="mobile" class="col-md-2 col-form-label">@lang('Mobile Number')</label>

                    <div class="col-md-10">
                        <input type="text" name="mobile" class="form-control" placeholder="{{ __('Mobile Number') }}" value="{{  $masterAgent->mobile ?? old('mobile') }}" maxlength="255" required />
                    </div>
                </div><!--form-group-->

                <div class="form-group row">
                    <label for="referral_id" class="col-md-2 col-form-label">@lang('Referral ID')</label>

                    <div class="col-md-10">
                        <input type="text" name="referral_id" class="form-control" placeholder="{{ __('Referral ID') }}" value="{{  $masterAgent->referral_id ?? old('referral_id') }}" maxlength="255" required />
                    </div>
                </div><!--form-group-->
                @endrole
                <livewire:master-agent-commission-rate :editMode="true" :masterAgent="$masterAgent" />
    
                @if(!$masterAgent->hasVerifiedEmail())
                    <div class="form-group row">
                        <label for="email_verified" class="col-md-2 col-form-label">@lang('Verified')</label>

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
            </x-slot>

            <x-slot name="footer">
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update Master Agent')</button>
            </x-slot>
        </x-backend.card>
    </x-forms.put>
@endsection
