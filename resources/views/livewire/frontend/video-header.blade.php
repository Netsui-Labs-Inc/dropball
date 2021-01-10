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
    @if($userBet)
    <div class="col-auto">
        <span class="h3 text-white">
            YOUR BET:
            <div class="badge badge-lg badge-light">
                <span class="text-gray-dark"> {{number_format($userBet->bet_amount)}}</span>
            </div>
            <span class="badge badge-lg badge-light {{$userBet->bet == 'meron' ? 'text-danger' : 'text-success'}}"> {{$userBet->bet}} </span>
        </span>
    </div>
    <div class="col-auto">
        <span class="h3 text-white">
             PAYOUT:
            <div class="badge badge-lg badge-light">
                <span class="text-gray-dark"> {{number_format($payout)}}</span>
            </div>
        </span>
    </div>
    @endif
</div>
