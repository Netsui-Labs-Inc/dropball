{{--<x-utils.form-button--}}
{{--    :action="route('admin.betting-rounds.results', $bettingRound)"--}}
{{--    method="post"--}}
{{--    button-class="btn btn-lg btn-block border-gray-50"--}}
{{--    name="open-betting"--}}
{{--    :bgColor="$option->color"--}}
{{--    :attr="--}}
{{--                $bettingRound->status == 'ended' ||--}}
{{--                $bettingRound->status == 'upcoming' ||--}}
{{--                $bettingRound->status == 'placing_bets' ? 'disabled' : ''"--}}
{{--    :confirm='["title" => "Are you sure you want to set the result to {$option->name}?"]'--}}
{{-->--}}
{{--    <input type="hidden" name="result" value="{{$option0>}}">--}}
{{--    @lang($option)--}}
{{--</x-utils.form-button>--}}
<button class="btn btn-lg btn-block border-gray-200 border-solid" style="background-color:{{$option->color}}" wire:click="$emit('confirmBet', 'tailwind')">{{$option->name}}</button>
