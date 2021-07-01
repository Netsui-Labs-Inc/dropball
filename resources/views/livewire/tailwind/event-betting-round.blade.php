<div>
<div class="flex items-center justify-between">
    <p class="text-xl font-semibold leading-normal pr-10 sm:pr-32 text-gray-50 uppercase">@lang('Round ')<span class="text-yellow-500">#{{$bettingRound->queue ?? "N/A"}}</span></p>
    <div class="h-6">
        @if($bettingRound)
        <div class="flex items-center justify-center px-2 py-1.5 flex-1 h-full {{$bettingRound->is_betting_open ? 'bg-green-700' : 'bg-red-700'}} rounded-md">
            <p class="text-xs font-semibold leading-3 text-right text-white">{{$bettingRound->is_betting_open ? 'OPEN' : 'CLOSED'}}</p>
        </div>
        @endif
    </div>
</div>
<p class="w-full text-xs font-light leading-none text-gray-400 my-1.5"><i class="fa fa-info-circle"></i> Game with 120% and below payout will be cancelled</p>
</div>
