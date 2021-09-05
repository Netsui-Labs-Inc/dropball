<x-forms.put :action="route('admin.player.update', $player)" wire:ignore.self>
    <x-backend.card>
        <x-slot name="header">
            @lang('Update Player - '. $player->name)
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link class="card-header-action" :href="route('admin.auth.user.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="form-group row">
                <label for="name" class="col-md-2 col-form-label">@lang('Name')</label>

                <div class="col-md-10">
                    <input type="text" name="name" class="form-control" placeholder="{{ __('Name') }}" value="{{ $player->name ?? old('name') }}" maxlength="100" required />
                </div>
            </div><!--form-group-->

            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">@lang('E-mail Address')</label>

                <div class="col-md-10">
                    <input type="email" name="email" class="form-control" placeholder="{{ __('E-mail Address') }}" value="{{ $player->email ?? old('email') }}" maxlength="255" required />
                </div>
            </div><!--form-group-->
            <div class="form-group row">
                <label for="mobile" class="col-md-2 col-form-label">@lang('Mobile Number')</label>

                <div class="col-md-10">
                    <input type="text" name="mobile" class="form-control" placeholder="{{ __('Mobile Number') }}" value="{{  $player->mobile ?? old('mobile') }}" maxlength="255" required />
                </div>
            </div><!--form-group-->
            @role('Administrator')
            <div class="form-group row">
                <label for="hub_i" class="col-md-2 col-form-label">@lang('Select Hub')</label>
                <div class="col-md-10">
                    <select name="hub_id" wire:model="hubId" wire:change="change" class="form-control"  required >
                            <option value="">Select Hub</option>
                        @foreach($hubs as $hub)
                            <option value={{ $hub->id }}>{{ $hub->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            @if($agent)
            <div class="form-group row">
                <label for="hub_i" class="col-md-2 col-form-label">@lang('Select Agent')</label>
                <div class="col-md-10">
                    <select name="referred_by" class="form-control" required>
                        <option value="">Select Agent</option>
                        @foreach($agents as $agent)
                            <option value={{ $agent->id }}>{{ $agent->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            @else
                @if($hubId !== '')
                    <div class="form-group row">
                        <label for="mobile" class="col-md-2 col-form-label"></label>
                        <div class="col-md-10">
                            <span class="text-warning">* Please select other hub</span>
                        </div>
                    </div><!--form-group-->
                @endif
            @endif

            @endrole

            @if(!$player->hasVerifiedEmail())
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
            <button class="btn btn-sm btn-primary float-right" type="submit">@lang('Update Player')</button>
        </x-slot>
    </x-backend.card>
</x-forms.put>



