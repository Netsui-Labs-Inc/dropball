<div class="row">
    @if($bettingRound->status === 'upcoming')
       <div class="col-12 col-md-6 p-2">
           <x-utils.form-button
                :action="route('admin.betting-rounds.betting.open', $bettingRound)"
                method="post"
                button-class="btn btn-success btn-block btn-lg"
                icon="fa fa-door-open"
                name="open-betting"
            > @lang(" Open Betting")
            </x-utils.form-button>
       </div>
       <div class="col-12 col-md-6 p-2">
           <x-utils.form-button
               :action="route('admin.betting-rounds.cancel', $bettingRound)"
               method="post"
               button-class="btn btn-danger btn-block btn-lg"
               icon="fa fa-exclamation"
               name="cancel-betting"
               :attr="$bettingRound->status == 'ended' || $bettingRound->status == 'ongoing' ? 'disabled' : ''"
               :confirm='["title" => "Are you sure you want cancel this round?", "icon" => "warning"]'

           >
               <input type="hidden" name="status" value="cancelled">
               @lang('CANCEL')
           </x-utils.form-button>
       </div>
    @endif
    @if($bettingRound->status == 'placing_bets')
        <div class="col-12 col-md-4 p-2">
            <x-utils.form-button
                :action="route('admin.betting-rounds.betting.last-call', $bettingRound)"
                method="post"
                icon="fa fa-exclamation"
                button-class="btn btn-warning btn-block btn-lg"
                name="open-betting"
            >
                @lang("Last Call")
            </x-utils.form-button>
        </div>
        <div class="col-12 col-md-4 p-2">
            <x-utils.form-button
                :action="route('admin.betting-rounds.start', $bettingRound)"
                method="post"
                icon="fa fa-fire"
                button-class="btn btn-success btn-block btn-lg"
                name="open-betting"
                :confirm='["title" => "Start Betting Round #{$bettingRound->id}"]'
            >
            @lang("Start Round")
            </x-utils.form-button>
        </div>
        <div class="col-12 col-md-4 p-2">
            <x-utils.form-button
                :action="route('admin.betting-rounds.cancel', $bettingRound)"
                method="post"
                button-class="btn btn-danger btn-block btn-lg"
                icon="fa fa-exclamation"
                name="cancel-betting"
                :attr="$bettingRound->status == 'ended' || $bettingRound->status == 'ongoing' ? 'disabled' : ''"
                :confirm='["title" => "Are you sure you want cancel this round?", "icon" => "warning"]'
            >
                <input type="hidden" name="status" value="cancelled">
                @lang('CANCEL')
            </x-utils.form-button>
        </div>
    @endif
    @if($bettingRound->status == 'ongoing')
        @foreach ($bettingOptions as $option)
            <div class="col-12 col-md-3 p-2">
            <x-utils.form-button
                :action="route('admin.betting-rounds.results', $bettingRound)"
                method="post"
                button-class="btn btn-lg btn-block border-gray-50"
                name="open-betting"
                :bgColor="$option->color"
                :attr="
                $bettingRound->status == 'ended' ||
                $bettingRound->status == 'upcoming' ||
                $bettingRound->status == 'placing_bets' ? 'disabled' : ''"
                :confirm='["title" => "Are you sure you want to set the result to {$option->name}?"]'
            >
                <input type="hidden" name="result" value="{{$option->id}}">
                @lang($option->name)
            </x-utils.form-button>
            </div>
        @endforeach
            <div class="col-12 col-md-3 p-2">
                <x-utils.form-button
                :action="route('admin.betting-rounds.cancel', $bettingRound)"
                method="post"
                button-class="btn btn-danger btn-block btn-lg"
                icon="fa fa-exclamation"
                name="cancel-betting"
                :confirm='["title" => "Are you sure you want cancel this round?", "icon" => "warning"]'
            >
                <input type="hidden" name="status" value="cancelled">
                @lang('CANCEL')
                </x-utils.form-button>
            </div>
    @endif
</div>
