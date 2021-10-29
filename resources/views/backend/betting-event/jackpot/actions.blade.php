<x-utils.form-button
    :action="route('admin.betting-events.jackpots.show', [$jackpot->bettingRound->bettingEvent, $jackpot])"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-jackpot"
>
    @lang('View Jackpot')
</x-utils.form-button>
<x-utils.form-button
    :action="route('admin.betting-events.jackpots.deactivate', [$jackpot->bettingRound->bettingEvent, $jackpot])"
    method="delete"
    button-class="btn btn-warning btn-sm text-white"
    icon="fas fa-power-off"
    name="deactivate-jackpot"
>
    @lang('Deactivate Jackpot')
</x-utils.form-button>

<x-utils.form-button
    :action="route('admin.betting-events.jackpots.activate', [$jackpot->bettingRound->bettingEvent, $jackpot])"
    method="post"
    button-class="btn btn-danger btn-sm text-white"
    icon="fas fa-power-off"
    name="activate-jackpot"
>
    @lang('Activate Jackpot')
</x-utils.form-button>
