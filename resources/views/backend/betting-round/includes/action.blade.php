<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-play"
>
    @lang('View')
</x-utils.form-button>
@if($bettingRound->status == 'ended')
@can('admin.access.betting-rounds.report')
<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-chart-bar"
    name="view-reports"
>
    @lang('Report')
</x-utils.form-button>
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
