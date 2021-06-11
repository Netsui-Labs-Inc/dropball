<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-play"
>
    @lang('View')
</x-utils.form-button>
@if(in_array($bettingRound->status,['ended','cancelled']))
@can('admin.access.betting-rounds.report')
@if($bettingRound->status == 'ended')
<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-chart-bar"
    name="view-reports"
>
    @lang('Report')
</x-utils.form-button>
@endif
<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.activity-logs', [$bettingRound->bettingEvent, $bettingRound, 'sorts' => ['log_name' => 'desc']])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-chart-bar"
    name="view-activity-logs"
>
    @lang('logs')
</x-utils.form-button>
@endcan
@endif
