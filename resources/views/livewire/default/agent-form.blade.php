
    <x-backend.card>
        <x-slot name="header">
            @lang('Create Agent')
        </x-slot>

        <x-slot name="body">
            <div class="form-group row">
                <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>

                <div class="col-md-10">
                    <input type="text"
                    name="name"
                    class="form-control"
                    placeholder="{{ __('Name') }}"
                    value=@if($agent)"{{ $agent->name }}" @else "{{ old('name') }}"@endif
                    maxlength="100"
                    required
                    @if($masterAgentsEdit)
                        disabled
                    @endif
                    />

                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">@lang('E-mail Address')</label>

                <div class="col-md-10">
                    <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="{{ __('E-mail Address') }}"
                    value=@if($agent)"{{ $agent->email }}" @else "{{ old('email') }}"@endif
                    maxlength="255"
                    required
                    @if($masterAgentsEdit)
                        disabled
                    @endif

                    />
                </div>
            </div><!--form-group-->
            <div class="form-group row">
                <label for="mobile" class="col-md-2 col-form-label">@lang('Mobile Number')</label>

                <div class="col-md-10">
                    <input type="text"
                    name="mobile"
                    class="form-control"
                    placeholder="{{ __('Mobile Number') }}"
                    value=@if($agent)"{{ $agent->mobile }}" @else "{{ old('mobile') }}"@endif
                    maxlength="255"
                    required
                    @if($masterAgentsEdit)
                        disabled
                     @endif
                    />
                </div>
            </div><!--form-group-->
            @role('Administrator')
                @if($editMode)
                    <input type="hidden" name="hub_id" class="form-control" value="{{ $agentHubId }}" />
                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">@lang('Hub')</label>
                        <div class="col-md-10">
                            <input type="text" name="hub_name" class="form-control" value="{{ $agentHubName }}" disabled />
                        </div>
                    </div>
                @else
                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">@lang('Select Hub')</label>
                        <div class="col-md-10">
                        {!! Form::select('hub_id', $hubs , null , ['class' => 'form-control', 'wire:model="hubId"', 'wire:change="selectHub"', 'placeholder' => 'Select Hub']) !!}
                        </div>
                    </div>
                @endif
            @else
                <input type="hidden" value="{{ Auth::user()->hub_id }}" name="hub_id" />
            @endrole

            @if($notAMasterAgent)
                @if($editMode)
                    <input type="hidden" name="referred_by" class="form-control" value="{{ $agentMasterAgentId }}" />
                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">@lang('Master Agent')</label>
                        <div class="col-md-10">
                            <input type="text" name="hub_name" class="form-control" value="{{ $agentMasterAgentName }}" disabled />
                        </div>
                    </div>
                @else
                    <div class="form-group row">
                        <label for="referred_by" class="col-md-2 col-form-label">@lang('Master Agent')</label>
                        <div class="col-md-10">
                            <select class="form-control" wire:model="masterAgent" wire:change="setFormWhenSelectedMasterAgent" name="referred_by">
                                @foreach ($masterAgents as $masterAgent)
                                    <option value="{{ $masterAgent->id }}">{{ $masterAgent->name }}</option>
                                @endforeach
                            </select>   
                        </div>
                    </div>
                @endif
            @else
                <input
                    type="hidden"
                    name="referred_by"
                    value="{{ Auth::user()->id }}"
                />
            @endif
            @if($editMode)
                <div class="form-group row d-none">
                    <label for="email" class="col-md-2 col-form-label">@lang('Hub')</label>
                    <div class="col-md-10">
                        <input type="hidden" name="whole_number_rate" class="form-control" value={{ $agentCurrentRateWholeNumber }} />
                        <input type="hidden" name="decimal_number_rate" class="form-control" value={{ $agentCurrentRateDecimalNumber }} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
                    <div class="col-md-10">
                        <input type="text" name="rate" class="form-control" value="{{ number_format($agentCurrentRateWholeNumber + $agentCurrentRateDecimalNumber, 1) }}%" disabled/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label">@lang('')</label>
                    <div class="col-md-2">
                        <button class="btn btn-sm btn-success" type="button" wire:click="showUpdateRate">@lang('Update Rate')</button>
                    </div>
                </div>
            @else
                @if($showRate)
                        <div class="form-group row">
                            <label for="admin" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
                            <div class="pr-1 pl-3">
                                {{Form::select('whole_number_rate', $wholeNumberRates, old('whole_number_rate'), [
                                    'class' => 'form-control', 
                                    'required', 
                                    'wire:change="checkMaxRateAssignment"', 
                                    'wire:model="selectedWholeNumber"'
                                    ])
                                }}
                            </div>
                            <div class="pr-1">
                                {{Form::select('decimal_number_rate', $decimalNumberRates, old('decimal_number_rate'), [
                                    'class' => 'form-control',
                                    'required',
                                    ])
                                }}
                            </div>
                            <h2 class="">%</h2>
                        </div>
                @endif       
            @endif
            @if($showButtonCancelRate) 
                <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label">@lang('')</label>
                    <div class="col-md-2">
                        <button class="btn btn-sm btn-warning text-white" type="button" wire:click="cancelEditRate">@lang('Cancel Edit Rate')</button>
                    </div>
                </div>
            @endif
            <div class="form-group row">
                <label for="referral_id" class="col-md-2 col-form-label">@lang('Code Name')</label>

                <div class="col-md-10">
                    <input
                    type="text"
                    name="referral_id"
                    class="form-control"
                    placeholder="{{ __('Code Name') }}"
                    value=@if($agent)"{{ $agent->referral_id }}" @else "{{ old('referral') }}"@endif
                    maxlength="255"
                    required />
                </div>
            </div><!--form-group-->
            @if(!$agent)
            <div class="form-group row">
                <label for="password" class="col-md-2 col-form-label">@lang('Password')</label>

                <div class="col-md-10 relative">
                    <input type="password" name="password" id="password" class="form-control" placeholder="{{ __('Password') }}" maxlength="100" required autocomplete="new-password" />
                    <i class="eyecandy"></i>
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="password_confirmation" class="col-md-2 col-form-label">@lang('Password Confirmation')</label>

                <div class="col-md-10 relative">
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="{{ __('Password Confirmation') }}" maxlength="100" required autocomplete="new-password" />
                    <i class="eyecandy"></i>
                </div>
            </div><!--form-group-->
            @endif
            @if(!Auth::user()->hasRole('Master Agent') && $agent !== null)
                @if(!$agent->hasVerifiedEmail())
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
            @endif
        </x-slot>


        <x-slot name="footer">
            @if($agent)
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update')</button>
            @else
                <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Create')</button>
            @endif

        </x-slot>
    </x-backend.card>

