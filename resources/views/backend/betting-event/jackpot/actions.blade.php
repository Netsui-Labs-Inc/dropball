<x-utils.form-button
    :action="route('admin.betting-events.jackpots.show', [$jackpot->bettingRound->bettingEvent, $jackpot])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-jackpot"
>
    @lang('View Jackpot')
</x-utils.form-button>
