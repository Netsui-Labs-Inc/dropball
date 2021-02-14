<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-play"
>
    @lang('View Betting Round')
</x-utils.form-button>
@if($bettingRound->status == 'ended')
<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.report', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-chart-bar"
    name="view-reports"
>
    @lang('View report')
</x-utils.form-button>
@endif
