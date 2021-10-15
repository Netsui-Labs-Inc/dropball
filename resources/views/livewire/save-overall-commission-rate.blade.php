<div class="col-12 col-md-3">
    <x-backend.card>
        <x-slot name="body">
            <small class="text-muted text-uppercase font-weight-bold">@lang("Over-all Commission")</small>
            {!! Form::select('overall-commission-rate', $overAllCommissionRates , null , ['class' => 'form-control text-value-lg pb-2 overall-commission-rate', 'wire:change="enableButton"', 'wire:model="selectedRate"']) !!} <br />
            <button wire:click="save" class="btn btn-sm btn-primary float-right btn-overall-commission-rate-save" type="submit" @if($disabled) disabled @endif>@lang('SAVE')</button>
        </x-slot>
    </x-backend.card>
</div>
