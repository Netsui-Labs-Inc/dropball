
<div class="row text-center">
    <div class="col-12">
        <h4>Betting Round Control</h4>
        @if($bettingRound->status === 'upcoming')
        <x-utils.form-button
            :action="route('admin.betting-rounds.betting.open', $bettingRound)"
            method="post"
            button-class="btn btn-success"
            icon="fa fa-door-open"
            name="open-betting"
        >
            @lang("Open Betting")
        </x-utils.form-button>
        @endif
        @if($bettingRound->status == 'placing_bets')
        <x-utils.form-button
            :action="route('admin.betting-rounds.betting.last-call', $bettingRound)"
            method="post"
            icon="fa fa-exclamation"
            button-class="btn btn-warning"
            name="open-betting"
        >
            @lang("Last Call Broadcast")
        </x-utils.form-button>
            <x-utils.form-button
            :action="route('admin.betting-rounds.start', $bettingRound)"
            method="post"
            icon="fa fa-fire"
            button-class="btn btn-success"
            name="open-betting"
        >
            @lang("Start BettingRound")
        </x-utils.form-button>
        @endif
        <x-utils.form-button
            :action="route('admin.betting-rounds.results', $bettingRound)"
            method="post"
            button-class="btn btn-warning"
            icon="fa fa-exclamation"
            name="open-betting"
            :attr="$bettingRound->status == 'ended' || $bettingRound->status == 'ongoing' ? 'disabled' : ''"
        >
            <input type="hidden" name="result" value="cancelled">

            @lang('CANCEL')
        </x-utils.form-button>
    </div>
    <div class="col">
        <hr>
        <h4>Set Result</h4>

            <x-utils.form-button
                :action="route('admin.betting-rounds.results', $bettingRound)"
                method="post"
                button-class="btn btn-danger"
                icon="fa fa-check-circle"
                name="open-betting"
                :attr="$bettingRound->status !== 'ongoing' ? 'disabled' : ''"
            >
                <input type="hidden" name="result" value="meron">
                @lang('MERON')
            </x-utils.form-button>

            <x-utils.form-button
                :action="route('admin.betting-rounds.results', $bettingRound)"
                method="post"
                button-class="btn btn-info"
                icon="fa fa-circle"
                name="open-betting"
                :attr="$bettingRound->status !== 'ongoing' ? 'disabled' : ''"

            >
                <input type="hidden" name="result" value="wala">
                @lang('WALA')
            </x-utils.form-button>

            <x-utils.form-button
                :action="route('admin.betting-rounds.results', $bettingRound)"
                method="post"
                button-class="btn btn-dark"
                icon="fa fa-minus"
                name="open-betting"
                :attr="$bettingRound->status !== 'ongoing' ? 'disabled' : ''"
            >
                <input type="hidden" name="result" value="draw">
                @lang('DRAW')
            </x-utils.form-button>
    </div>
</div>

