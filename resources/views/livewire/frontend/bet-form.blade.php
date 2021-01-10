<div>
    <div class="pb-4">
        <ul class="list-group list-group-flush list my--3">
            <li class="list-group-item px-0">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <div class="icon icon-lg icon-shape bg-danger text-white rounded-circle shadow border-2 border-dannge">
                            MERON
                        </div>
                    </div>
                    <div class="col">
                        <h2 class="text-muted">{{number_format($totalMeron)}} </h2>
                        <div class="progress progress-xs mb-0">
                            <div class="progress-bar bg-red" role="progressbar" aria-valuenow="{{$meronRatio}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$meronRatio}}%;"></div>
                        </div>

                    </div>
                </div>
            </li>
            <li class="list-group-item px-0">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <div class="icon icon-lg icon-shape bg-success text-white rounded-circle shadow">
                            WALA
                        </div>
                    </div>
                    <div class="col">
                        <h2 class="text-muted">{{number_format($totalWala)}}</h2>
                        <div class="progress progress-xs mb-0">
                            <div class="progress-bar bg-green" role="progressbar" aria-valuenow="{{$walaRatio}}" aria-valuemin="0" aria-valuemax="100" style="width: {{$walaRatio}}%;"></div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <div class="row justify-content-center pb-2">
            <div class="col">
                <span class="h6 surtitle text-muted">Balance</span>
                <div class="h2">{{number_format($balance)}}</div>
            </div>
            <div class="col">
                <span class="h6 surtitle text-muted">MERON Payout</span>
                <div class="h2 text-danger">{{number_format($meronPayout)}}</div>
            </div>
            <div class="col ">
                <span class="h6 surtitle text-muted">WALA Payout</span>
                <div class="h2 text-success">{{number_format($walaPayout)}}</div>
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
        <div class="row justify-content-center">
            @if($userBet)
                <div class="col">
                <button type="button" class="btn btn-block {{$userBet->bet =='meron' ? 'btn-danger' : 'btn-outline-danger'}}" {{$userBet->bet != 'meron' ? 'disabled' : ''}}> <i class="fa {{$userBet->bet =='meron' ? 'fa-check-circle': 'fa-plus'}}"></i> BET MERON</button>
                </div>
                <div class="col">
                <button type="button" class="btn btn-block {{$userBet->bet =='wala' ? 'btn-success' : 'btn-outline-info'}}"{{$userBet->bet != 'wala' ? 'disabled' : ''}}><i class="fa {{$userBet->bet =='wala' ? 'fa-check-circle': 'fa-plus'}}"></i> BET WALA</button>
                </div>
            @else
                <div class="col">
                <button type="button" wire:click="betMeron" class="btn btn-block btn-danger" {{$userCanBet ? '': 'disabled'}}> <i class="fa fa-plus"></i> BET MERON</button>
                </div>
                <div class="col">
                    <button type="button" wire:click="betWala" class="btn btn-block btn-success" {{$userCanBet ? '': 'disabled'}}><i class="fa fa-plus"></i> BET WALA</button>
                </div>
            @endif
        </div>
    </div>
<div>
