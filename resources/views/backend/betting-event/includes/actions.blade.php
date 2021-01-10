<x-utils.form-button
    :action="route('admin.betting-events.show', $bettingEvent)"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-betting-event"
>
    @lang('View Betting Rounds')
</x-utils.form-button>

