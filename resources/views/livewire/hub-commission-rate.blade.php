<div>
    @if($edit)
        <div class="form-group row">
            <label for="admin" class="col-md-2 col-form-label">@lang('Current Commission Rate')</label>
            <div class="col-md-10">
                <input type="text" name="rate" class="form-control" value="{{ number_format($hubCommissionRate, 4) }}%" disabled/><br />
                <div class="d-none">
                    <input type="hidden" name="whole_number_rate" class="form-control" value="{{ $defaultWholeNumber }}" /><br />
                    <input type="hidden" name="decimal_number_rate" class="form-control" value="{{ $defaultDecimalNumber }}"/><br />
                </div>
                <button wire:click="edit" class="btn btn-sm btn-success float-left" type="button" >@lang('EDIT')</button>
            </div>
        </div>

    @endif

    @if(!$edit)
        <div class="form-group row">
            <label for="admin" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
            <div class="pr-1 pl-3">
                {{Form::select('whole_number_rate', $wholeNumberRates, old('admin_id'), [
                    'class' => 'form-control',
                    'required',
                    'wire:model="selectedWholeNumber"',
                    'wire:change="adjustDecimal"'
                ])}}
            </div>
            <div class="pr-1">
                {{Form::select('decimal_number_rate', $decimalNumberRates, old('admin_id'), ['class' => 'form-control', 'required'])}}
            </div>
            <h2 class="">%</h2>

        </div>
        @if($editMode)
            <div class="form-group row">
                <label for="admin" class="col-md-2 col-form-label">@lang('')</label>
                <div class="pr-1 pl-3">
                    <button wire:click="cancel" class="btn btn-sm btn-warning float-right pr-2 text-white" type="button">@lang('CANCEL')</button>
                </div>
            </div>
        @endif
    @endif

</div>
