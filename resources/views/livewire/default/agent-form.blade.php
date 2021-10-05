
    <x-backend.card>
        <x-slot name="header">
            @lang('Create Agent')
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
            @if($notAMasterAgent)
                <div class="form-group row">
                    <label for="master_agent" class="col-md-2 col-form-label">@lang('Master Agent')</label>
                    <div class="col-md-10">
                        <select class ="form-control" wire:model="masterAgent" wire:change="showRate" name="master-agent" required>
                            <option value="">Select Master Agent</option>
                            @foreach ($masterAgents as $masterAgent)
                                <option value="{{ $masterAgent->id }}">{{ $masterAgent->name }}</option>
                            @endforeach
                        </select>

                    </div>
                </div>
            @endif
                @if($commissionRates)
                    <div class="form-group row">
                        <label for="commission_rate" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
                        <div class="col-md-10">
                            <select class ="form-control">
                                @foreach ($commissionRates as $commissionRate)
                                    <option value="{{ $commissionRate['value'] }}">{{ $commissionRate['percentage'] }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                @endif

            <div class="form-group row">
                <label for="referral_id" class="col-md-2 col-form-label">@lang('Code Name')</label>

                <div class="col-md-10">
                    <input type="text" name="referral_id" class="form-control" placeholder="{{ __('Code Name') }}" value="{{ old('referral_id') }}" maxlength="255" required />
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

{{--
{{--
<div class="form-group row">
    <label for="commission_rate" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
    <div class="col-md-10">
        {!! Form::select('commission_rate', $commissionRates , (float ) $masterAgentCommissionRate , ['class' => 'form-control']) !!}
    </div>
</div> --}}



