<div>
    <div class="row justify-content-center pb-2">
        <div class="col">
            <span class="h6 surtitle text-muted">Balance</span>
            <div class="h2">{{number_format($balance)}}</div>
        </div>
        <div class="col">
            <span class="h6 surtitle text-muted">Total Bet Amount</span>
            <div class="h2 text-success">{{number_format($totalBetAmount)}}</div>
        </div>
    </div>
    <div class="row">
        <div class="form-group col @error('amount') has-danger @enderror">
            <div class="input-group input-group-merge">
                <input class="form-control form-control-lg  @error('amount') is-invalid @enderror" placeholder="Enter Bet Amount" type="number" min="100" wire:model="amount" {{$userCanBet ? '': 'disabled'}}>
                <div class="input-group-append">
                    <span class="input-group-text"><small class="font-weight-bold">PHP</small></span>
                </div>
                @error('amount')<div class="invalid-feedback">{{ $message }}</div> @enderror
            </div>
            <div class="mt-2">
                @foreach($betChoices as $choice)
                    <button class="btn btn-sm {{$amount == $choice ? 'btn-danger' : 'btn-outline-danger' }}" wire:click="$emit('amountUpdated', {{$choice}})" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                @endforeach
            </div>
            @if (session()->has('error'))
                <div class="alert alert-danger mt-2 mb-0">
                    {{ session('error') }}
                </div>
            @endif
        </div>
    </div>
    <span class="h4 surtitle text-muted">Choose a color to bet</span>
    <div class="row justify-content-center mt-3">
        @foreach($betOptions as $option)
            <div class="col-12 pb-2 justify-content-center">
                @if($bettingRound)
                    <div class="text-muted surtitle">
                        @php $userBetTotal = $bettingRound->totalBetTypeByUser($option->id, auth()->user()->id) @endphp
                        <span class="h5 text-muted ">PHP {{number_format($userBetTotal)}} </span>
                        @if($userBetTotal) | <span class="h5 text-success">+ PHP {{number_format(getPayout($userBetTotal))}}</span>@endif
                    </div>
                @endif
                <button  class="btn btn-lg btn-block mb-1" style="border:1px solid #8898aa;background-color: {{$option->color}}; color: {{$option->color == '#FFFFFF' ? "#8898aa" : "#FFFFFF"}};"  wire:click="$emit('betPlaced', {{$option->id}})" {{$userCanBet ? '': 'disabled'}}> {{strtoupper($option->name)}}</button>
            </div>
        @endforeach
    </div>
<div>
