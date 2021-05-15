<div class="relative">
        <div class="absolute top-1 right-2">
        @if($bettingRound)
                @if ($bettingRound->status == 'upcoming')
                <div class="bg-blue-400 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span class="text-x  text-white font-normal">upcoming </span>
                </div>
                @elseif ($bettingRound->status == 'ongoing')
                    <div class="bg-green-400 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <span class="text-xs text-white font-normal">ongoing</span>
                    </div>
                @elseif ($bettingRound->status == 'placing_bets')
                <div class="bg-blue-400 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span class="text-xs text-white font-normal">placing bets</span>
                </div>
                @elseif ($bettingRound->status == 'ended')
                <div class="bg-blue-400 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span class="text-xs text-white font-normal">Placing bets</span>
                </div>
            @endif
        @else
            <div class="bg-red-400 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-white font-normal">No Betting Round</span>
            </div>
        @endif
        </div>
</div>
