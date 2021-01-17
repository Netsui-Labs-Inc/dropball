<div class="row justify-content-between">
    <div class="col-auto">
        @if($bettingRound)
            <span class="h3 text-white">
                {!! $bettingRound->statusLabel('badge-lg') !!}
            </span>
        @else
            <span class="text-white h3">No BettingRound Info</span>
        @endif
    </div>
    @if($userBets->isNotEmpty())
    <div class="col-auto">
        <span class="h3 text-white">
            YOUR BET/S:
            @foreach($userBets->groupBy('bet') as $optionId => $bet)
                <div class="badge badge-lg badge-light" style="background-color: {{$bet->first()->option->color}}; color:#F0F0F0">
                    {{$bet->first()->option->name}} {{$bet->sum('bet_amount')}}
                </div>
            @endforeach
        </span>
    </div>
    @endif
</div>
