<x-utils.form-button
    :action="route('admin.betting-events.edit', $bettingEvent)"
    method="get"
    button-class="btn btn-warning btn-sm text-white"
    icon="fas fa-edit"
    name="edit-betting-event"
>
    @lang('Edit Event')
</x-utils.form-button>
<x-utils.form-button
    :action="route('admin.betting-events.show', $bettingEvent)"
    method="get"
    button-class="btn btn-info btn-sm text-white"
    icon="fas fa-eye"
    name="view-betting-event"
>
    @lang('View Betting Rounds')
</x-utils.form-button>



