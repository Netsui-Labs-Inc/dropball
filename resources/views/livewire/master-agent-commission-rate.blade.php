<div>
    @role('Administrator')
        <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">@lang('Select Hub')</label>
            <div class="col-md-10">
                <select class="form-control" name="hub_id" wire:change="showRates" wire:model="hub">
                    @if($editMode)
                        <option value="{{ $hub }}">{{ $masterAgentHubName }}</option>
                    @else
                        <option value="">Select Hub</option>
                    @endif

                    @foreach($hubs as $hub)
                        <option value="{{ $hub->id }}">{{ $hub->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>

    @endrole
    @if($editMode)
        <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">@lang('Current Commission Rate')</label>
            <div class="col-md-10">
                <input type="text" name="rate" class="form-control" value="{{ number_format($masterAgentCurrentRateWholeNumber + $masterAgentCurrentRateDecimalNumber, 4) }}%" disabled/>
            </div>
        </div>
    @endif
    @if($showRates)
    <div class="form-group row">
        <label for="admin" class="col-md-2 col-form-label">
            @if($editMode)
                @lang('New Commission Rate')
            @else
                @lang('Commission Rate')
            @endif
        </label>
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

</div>
