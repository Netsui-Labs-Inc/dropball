@if($notAMasterAgent)
    <div class="form-group row">
        <label for="master_agent" class="col-md-2 col-form-label">@lang('Master Agent')</label>
        <div class="col-md-10">
            {!! Form::select('master_agent', $masterAgents , (float) $masterAgents, ['class' => 'form-control', 'wire:change="test"']) !!}
        </div>
    </div>
    @if($masterAgents)
        <div class="form-group row">
            <label for="commission_rate" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
            <div class="col-md-10">
                {!! Form::select('commission_rate', $commissionRates , (float ) $masterAgentCommissionRate , ['class' => 'form-control', 'disabled' => 'disabled']) !!}
            </div>
        </div>
    @endif
@else
<div class="form-group row">
    <label for="commission_rate" class="col-md-2 col-form-label">@lang('Commission Rate')</label>
    <div class="col-md-10">
        {!! Form::select('commission_rate', $commissionRates , (float ) $masterAgentCommissionRate , ['class' => 'form-control']) !!}
    </div>
</div>

@endif

