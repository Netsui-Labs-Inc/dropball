<div>
    <div class="row justify-content-center">
        <div class="col">
            <span class="h6 surtitle text-white">Balance</span>
            <div class="h2 text-success">{{number_format($balance)}}</div>
        </div>
        <div class="col">
            <span class="h6 surtitle text-white">Total Bet Amount</span>
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
                <button class="btn btn-sm {{$amount == 50 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(50)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 100 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(100)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 300 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(300)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 500 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(500)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 1000 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(1000)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 5000 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(5000)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
                <button class="btn btn-sm {{$amount == 10000 ? 'btn-danger' : 'btn-white' }}" wire:click="setAmount(10000)" {{$userCanBet ? '': 'disabled'}}>{{number_format($choice)}}</button>
            </div>
            @if (session()->has('error'))
                <div class="alert alert-danger mt-2 mb-0">
                    {{ session('error') }}
                </div>
            @endif
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center py-3">
            <div class="col justify-content-center text-center p-0">
                <div class="p-3 mb-2 bg-danger border-default" style="border-radius: 6px 0 0 6px">
                    <div class="text-white h4 mb-0">PULA</div>
                </div>
                <div class="pula-pool text-warning h1">{{ number_format($bettingRound->meta['pula'] ?? 0) }}</div>
            </div>
            <div class="col justify-content-center text-center p-0">
                <div class="p-3 mb-2 bg-white border-default" style="border-radius: 0 6px 6px 0">
                    <div class="text-muted h4 mb-0">PUTI</div>
                </div>
                <div class="puti-pool h1 text-warning">{{ number_format($bettingRound->meta['puti'] ?? 0) }}</div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            @foreach($betOptions as $option)
                <div class="col-6 pb-2">
                    @if($bettingRound)
                        <div class="text-muted surtitle text-center">
                            @php $userBetTotal = $bettingRound->totalBetTypeByUser($option->id, auth()->user()->id) @endphp
                            <span class="h2 text-white ">{{number_format($userBetTotal)}} </span>
                            @if($userBetTotal) | <span class="h2 text-success">+{{number_format(getPayout($userBetTotal))}}</span>@endif
                        </div>
                    @endif
                </div>
            @endforeach
        </div>
    </div>
    <div class="container">
        <div class="row ">
            <div class="btn-group col justify-content-center text-center p-0" role="group">
                @foreach($betOptions as $option)
                    <button class="btn btn-lg btn-block m-0" style="border:1px solid #8898aa;background-color: {{$option->color}}; color: {{$option->color == '#FFFFFF' ? "#8898aa" : "#FFFFFF"}};" wire:click="confirmBet({{$option->id}})" {{$userCanBet ? '': 'disabled'}}><i class="fas fa-plus-circle"></i> {{"BET ".strtoupper($option->name)}}</button>
                @endforeach
            </div>
        </div>
    </div>
<div>
