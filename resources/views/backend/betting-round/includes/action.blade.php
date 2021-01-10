<x-utils.form-button
    :action="route('admin.betting-events.betting-rounds.show', [$bettingRound->bettingEvent, $bettingRound])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-play"
>
    @lang('View Betting Round')
</x-utils.form-button>

