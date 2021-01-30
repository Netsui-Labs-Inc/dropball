<div class="row justify-content-center">
    @if($bettingRound)
    <div class="col">
        <h3 class="text-white text-uppercase mb-0">@lang('Round #'){{$bettingRound->queue}}</h3>
    </div>

    <div class="col">
        <h3 class="text-white text-uppercase mb-0">@lang('Betting')  {!! $bettingRound->bettingOpenLabel() !!} </h3>
    </div>
    @else
        <div class="col">
            <h3 class="text-white text-uppercase mb-0">@lang("No BettingRound Available")</h3>
        </div>
    @endif
</div>
