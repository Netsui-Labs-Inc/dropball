<div class="pt-1 border-t-2 border-opacity-75
    @if($bettingRound->status == 'upcoming')\
        border-blue-200
    @elseif($bettingRound->status == 'placing_bet')
        border-orange-300
    @elseif($bettingRound->status == 'ongoing')
        border-green-200
    @else
        border-blue-500-200
    @endif
">
<div class="flex items-center justify-between">
    <p class="text-xl font-semibold leading-normal text-gray-50 uppercase">
        @lang('Round ')<span class="text-yellow-500">#{{$bettingRound->queue ?? "N/A"}}</span>
    </p>
</div>
<p class="w-full text-xs font-light leading-none text-gray-400 my-1.5"><i class="fa fa-info-circle"></i> Game with 120% and below payout will be cancelled</p>
</div>
