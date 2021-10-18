<div class="col-12 col-md-3">
    <x-backend.card>
        <x-slot name="body">
            
            @if($editMode)
                <small class="text-muted text-uppercase font-weight-bold">@lang("Over-all Commission")</small>
                
                <div class="d-flex">
                    <div class="pr-1">
                        {!! Form::select('overall-commission-rate-whole-number', $overAllCommissionRatesWholeNumber , null , ['class' => 'form-control text-value-lg pb-2', 'wire:change="adjustDecimal"', 'wire:model="selectedRateWholeNumber"']) !!}
                    </div>
                    <div>
                        {!! Form::select('overall-commission-rate-decimal-number', $overAllCommissionRatesDecimalNumber , null , ['class' => 'form-control text-value-lg pb-2', 'wire:model="selectedRateDecimalNumber"']) !!} <br />
                    </div>
                    <h1>%</h1>
                </div>
                <div class="d-flex float-left">
                    <button wire:click="cancel" class="btn btn-sm btn-warning float-right pr-2 text-white" type="button">@lang('CANCEL')</button>
                    
                <div class="d-flex float-left pl-2">
                    
                    <button wire:click="save" class="btn btn-sm btn-primary float-right " type="button">@lang('SAVE')</button>
                </div>
            @else
            
            <div class="form-group row">
                <small class="text-muted text-uppercase font-weight-bold">@lang("Over-all Commission")</small>
            
                <div class="col-md-10">
                    <input type="text" name="rate" class="form-control" value="{{ $overallCommissionRateValue }}%" disabled/>
                </div>
            </div>
            <div class="d-flex float-left">
                <button wire:click="edit" class="btn btn-sm btn-success float-right btn-overall-commission-rate-save" type="button" >@lang('EDIT')</button>
            </div>
            @endif
        </x-slot>
    </x-backend.card>
</div>
