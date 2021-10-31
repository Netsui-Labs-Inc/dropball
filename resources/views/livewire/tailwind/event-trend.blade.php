<div class="flex flex-wrap ">
    <div class="w-full">
        <span class="text-sm leading-normal font-semibold sm:pr-32 text-gray-50 uppercase">Bet Trend</span>
        <div class="flex space-x-6 justify-start text-xs pt-3 leading-normal">
            <div class="text-gray-50 ">PUTI <i class="fas fa-circle text-white p-0 "></i></div>
            <div class="text-gray-50">PULA <i class="fas fa-circle text-red-500 p-0 "></i></div>
            <div class="text-gray-50">JACKPOT <i class="fas fa-circle p-0 text-yellow-500 "></i></div>
            <div class="text-gray-50">CANCELLED <i class="fas fa-circle p-0 text-pink-700 "></i></div>
            <div class="text-gray-50">PENDING <i class="fas fa-dot-circle p-0 text-blue-300 "></i></div>
        </div>
    </div>
    <div class="w-full pt-3">
        @foreach($rounds as $round)
            @if($round->status == 'cancelled')
                <i class="text-xs fas fa-circle p-0 text-pink-700 "></i>
            @elseif (!$round->result)
                <i class="text-xs fas fa-dot-circle p-0 text-blue-300"></i>
            @elseif ($round->betOption->name == 'PULA')
                <i class="text-xs fas fa-circle text-red-500 p-0 "></i>
            @elseif ($round->betOption->name == 'PUTI')
                <i class="text-xs fas fa-circle text-white p-0 "></i>
            @elseif ($round->betOption->name == 'JACKPOT')
                <i class="text-xs fas fa-circle text-yellow-500 p-0 "></i>
            @endif
        @endforeach
    </div>
</div>
