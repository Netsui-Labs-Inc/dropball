<div>
    @role('Administrator')
        @if($editMode)
            <input type="hidden" name="hub_id" class="form-control" value="{{ $masterAgentHubId }}" />
            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">@lang('Hub')</label>
                <div class="col-md-10">
                    <input type="text" name="hub_name" class="form-control" value="{{ $masterAgentHubName }}" disabled />
                </div>
            </div>
        @else
            <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">@lang('Select Hub')</label>
                <div class="col-md-10">
                <select class="form-control" name="hub_id" wire:change="showRates" wire:model="hub">
                    <option value="">Select Hub</option>
                    @foreach($hubs as $hub)
                        <option value="{{ $hub->id }}">{{ $hub->name }}</option>
                    @endforeach
                </select>
                </div>
            </div>
        @endif
    @endrole
    @if($editMode)
        <div class="form-group row d-none">
            <label for="email" class="col-md-2 col-form-label">@lang('Hub')</label>
            <div class="col-md-10">
                <input type="hidden" name="whole_number_rate" class="form-control" value={{ $masterAgentCurrentRateWholeNumber }} />
                <input type="hidden" name="decimal_number_rate" class="form-control" value={{ $masterAgentCurrentRateDecimalNumber }} />
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
            <div class="col-md-10">
                <input type="text" name="rate" class="form-control" value="{{ number_format($masterAgentCurrentRateWholeNumber + $masterAgentCurrentRateDecimalNumber, 2) }}%" disabled/>
            </div>
        </div>
    
        <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">@lang('')</label>
            <div class="col-md-2">
                <button class="btn btn-sm btn-success" type="button" wire:click="showHub">
                    @role('Administrator')
                        @lang('Update Hub and Rate')
                    @else
                        @lang('Update Rate')
                    @endrole
                </button>
            </div>
        </div>

    @endif
    @if(!$showRates)
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
    @if($showButtonCancelHub) 
        <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">@lang('')</label>
            <div class="col-md-2">
                <button class="btn btn-sm btn-warning text-white" type="button" wire:click="cancelEditHub">
                    @role('Administrator')
                        @lang('Cancel Edit Hub and Rate')
                    @else
                        @lang('Cancel Edit Rate')
                    @endrole</button>
            </div>
        </div>
    @endif
</div>