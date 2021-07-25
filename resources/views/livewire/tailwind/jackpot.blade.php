<div>
    <div class="w-full flex-col flex justify-center items-center px-12 py-3">
        <h2 class="text-center text-2xl text-gray-800 dark:text-yellow-500 font-medium tracking-normal">{{number_format($prize)}}</h2>
        <h2 class="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">JACKPOT POOL MONEY</h2>
    </div>

    <div class="w-full overflow-x-scroll md:overflow-x-auto">
        <table class="w-full">
            <thead>
            <tr class="h-4 border-b border-gray-200 md:text-base text-gray-100 font-weight-bold">
                <td tabindex="0" class="focus:outline-none pb-4 px-4">PLAYERS</td>
                <td tabindex="0" class="focus:outline-none pb-4">WIN STREAK</td>
            </tr>
            </thead>
            <tbody>
            @foreach($topPlayers as $player)

                <tr class="md:text-base text-gray-100
                @if($loop->first) text-yellow-500 font-weight-bold @endif
                @if($loop->index === 1) text-gray-400 font-weight-bold @endif
                @if($loop->index === 2) text-yellow-900 font-weight-bold @endif
">
                    <td class="pl-4 py-3">
                        @if($loop->index <= 2)
                            <i class="fa fa-trophy mr-2"></i>
                        @else
                            <i class="fa fa-circle text-gray-500 text-xs mr-2"></i>
                        @endif
                        {{$player->name}}
                    </td>
                    <td class="text-center">
                        {{$player->winning_streak}}
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>
