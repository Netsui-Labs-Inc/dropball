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
    <div class="flex flex-wrap content-start text-sm">
        <div class="flex-auto w-1/2">
            <p class="uppercase text-center font-semibold leading-normal text-gray-50">
                Available Balance
            </p>
            <p class="text-center text-yellow-500">{{number_format($balance, 2)}}
                @if($userBet)
                    <span class="text-green-400 opacity-50">
                        +{{number_format($payouts['betPayout'], 2)}}
                    </span>
                @endif
            </p>
        </div>
        <div class="flex-auto w-1/2">
            <p class="uppercase text-center font-semibold leading-normal text-gray-50">
                Your Bet
            </p>
            <p class="text-center text-yellow-500 font-semibold">
                @if($userBet)
                    @if($userBet->bet == 1)
                        <span class="text-xs p-0 text-red-500">PULA</span>
                    @else
                        <span class="text-xs p-0 text-gray-50">PUTI</span>
                    @endif
                @endif
                {{number_format($amount)}}
            </p>
        </div>
    </div>
    <div class="flex flex-wrap my-3">
        <div class="flex-auto w-1/2">
            <div class="py-2 bg-red-600 text-center rounded-sm">
                <p class="text-xl font-semibold leading-5 text-white">{{ number_format($bettingRound->totalBetType(1) ?? 0) }}</p>
                <p class=" leading-none text-xs text-white pt-1">PULA</p>
            </div>
        </div>
        <div class="flex-auto w-1/2">
            <div class="py-2 bg-white rounded-sm text-center">
                <p class="text-xl font-semibold leading-5 text-gray-500">{{ number_format($bettingRound->totalBetType(2) ?? 0) }}</p>
                <p class="leading-none text-xs text-gray-500 pt-1">PUTI</p>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap my-3">
        <div class="flex-auto text-center w-1/2">
            <p class="uppercase text-sm font-semibold leading-normal text-gray-50">
                Payout <span class="text-yellow-500 font-semibold">{{number_format($payouts['pula'], 2)}}</span>
            </p>
        </div>
        <div class="flex-auto text-center w-1/2">
            <p class="uppercase text-center text-sm font-semibold leading-normal text-gray-50">
                Payout <span class="text-yellow-500 font-semibold">{{number_format($payouts['puti'], 2)}}</span>
            </p>
        </div>
    </div>
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
