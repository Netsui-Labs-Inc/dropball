<div class="flex items-center justify-between">
    <p class="text-xl font-semibold leading-normal pr-10 sm:pr-32 text-gray-50 uppercase">@lang('Round ')<span class="text-yellow-500">#{{$bettingRound->queue}}</span></h3>
    <div class="w-28 h-6">
        <div class="flex items-center justify-center px-2 py-1.5 flex-1 h-full {{$bettingRound->is_betting_open ? 'bg-green-700' : 'bg-red-700'}} rounded-md">
            <p class="text-xs font-semibold leading-3 text-right text-white"> @lang('Betting') {{$bettingRound->is_betting_open ? 'OPEN' : 'CLOSED'}}</p>
        </div>
    </div>
</div>
