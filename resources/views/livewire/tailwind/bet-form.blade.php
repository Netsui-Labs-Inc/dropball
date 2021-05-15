<div>
    <input type="text" class="@error('amount') border border-red-500 @enderror mt-3 w-full text-lg leading-3 text-gray-600 py-2 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 px-2 focus:ouline-none"
           placeholder="Enter Bet Amount" type="number" min="50" wire:model="amount" {{$userCanBet ? '': 'disabled'}}
    />
    @error('amount')<p class="py-0.5 text-red-500 text-xs italic">{{ $message }}</p> @enderror
    <div class="flex flex-no-wrap py-2 overflow-x-auto">
        @foreach($betChoices as $choice)
            <button class="disabled:opacity-50 p-0.5 mx-0.5 my-1 {{$amount == $choice ? 'bg-red-700 text-white' : 'bg-white text-gray-500' }} transition duration-150 ease-in-out hover:text-white hover:bg-red-600 rounded  px-3 py-1 text-xs"
                    wire:click="$emit('amountUpdated', {{$choice}})" {{$userCanBet ? '': 'disabled'}}
            >{{number_format($choice)}}
            </button>
        @endforeach
    </div>
    @if (session()->has('error'))
        <p class="text-red text-xs italic">{{ session('error') }}</p>
    @endif
    <div class="flex items-center">
        <p class="uppercase text-sm font-semibold leading-normal pr-10 sm:pr-32 text-gray-50">
            Available Balance:  <span class="text-yellow-500">{{number_format($balance)}}</span>
        </p>
    </div>
    <div class="flex flex-wrap my-3">
        <div class="flex-auto">
            <div class="py-2 bg-red-600  text-center rounded-sm">
                <p class="text-xl font-semibold leading-5 text-white">{{ number_format($bettingRound->meta['pula'] ?? 0) }}</p>
                <p class=" leading-none text-xs text-white pt-1">PULA</p>
            </div>
        </div>
        <div class="flex-auto">
            <div class="py-2 bg-white rounded-sm text-center">
                <p class="text-xl font-semibold leading-5 text-gray-500">{{ number_format($bettingRound->meta['puti'] ?? 0) }}</p>
                <p class="leading-none text-xs text-gray-500 pt-1">PUTI</p>
            </div>
        </div>
    </div>
    <p class="uppercase text-sm font-semibold leading-normal pr-10 sm:pr-32 text-gray-50 my-3">
            Bet:
                @if($userBets)
                    @if($userBets->isNotEmpty())
                        @if($userBets->first()->bet == 1)
                        <i class="text-xs fas fa-circle p-0 text-red-500"></i>
                        @else
                            <i class="text-xs fas fa-circle p-0 text-gray-50"></i>
                        @endif
                    @endif
                @else
                <i class="text-xs fas fa-dot-circle p-0 text-blue-300"></i>
                @endif
            <span class="text-yellow-500 mr-4 font-semibold">{{number_format($totalBetAmount)}}</span>
            Payout: <span class="text-yellow-500 font-semibold">{{number_format(getPayout($totalBetAmount))}}</span>
    </p>

    <div class="flex space-x-2">
        <div class="flex-auto w-1/2">
            <button class="disabled:opacity-50 my-2 w-full transition duration-150 ease-in-out bg-red-600 hover:bg-red-500 rounded text-white px-10 py-4 text-sm" wire:click="$emit('confirmBet', 1)" {{$userCanBet ? '': 'disabled'}}>
                <i class="fas fa-plus-circle"></i> BET PULA
            </button>
        </div>
        <div class="flex-auto w-1/2">
            <button class="disabled:opacity-50 my-2 w-full transition duration-150 ease-in-out bg-white hover:bg-gray-200 rounded text-gray-700 px-10 py-4 text-sm" wire:click="$emit('confirmBet', 2)" {{$userCanBet ? '': 'disabled'}}>
                <i class="fas fa-plus-circle"></i> BET PUTI
            </button>
        </div>
    </div>
</div>
