@extends('backend.layouts.app')

@section('title', __('View Transaction'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Transaction Info')
        </x-slot>

        <x-slot name="headerActions">

        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tr>
                    <th>@lang('ID')</th>
                    <td>{{$transaction->id}}</td>
                </tr>
                <tr>
                    <th>@lang('UUID')</th>
                    <td>{{$transaction->uuid}}</td>
                </tr>

                <tr>
                    <th>@lang('Wallet')</th>
                    <td>{{$transaction->wallet->name}}</td>
                </tr>

                <tr>
                    <th>@lang('Type')</th>
                    <td><span class='badge badge-info'> {{$transaction->type}}</span></td>
                </tr>

                <tr>
                    <th>@lang('Amount')</th>
                    <td>
                        @if (count($amendmentTransactions))
                            <span class='badge badge-info'> Original Amount</span>
                            <s>{{ number_format($transaction->amountFloat, 2)}}</s>  <br />
                            <span class='badge badge-warning'> Current Amount</span>
                            {{ number_format($amendedAmount, 2)}}
                        @else
                             {{ number_format($transaction->amountFloat, 2)}}
                        @endif

                    </td>
                </tr>

                <tr>
                    <th>@lang('Status')</th>
                    @if($transaction->type === 'amendment')
                    <td><span class='badge badge-info'>confirmed</span></td>
                    @else
                        <td><span class='badge badge-info'> {{$transaction->confirmed ? 'confirmed': 'pending'}}</span></td>
                    @endif

                </tr>
                <tr>
                    <th>@lang('Date Requested')</th>
                    <td> {{$transaction->created_at }}</td>
                </tr>
                @if($approvedWithdrawal)
                    <tr>
                        <th>@lang('Date Approved')</th>
                        @php
                            $approvedAt = ($transaction->created_at->format('Y-m-d H:i:s') === $transaction->updated_at->format('Y-m-d H:i:s')) ?
                                'N/A' : $transaction->updated_at;
                        @endphp
                        <td> {{ $approvedAt }}</td>
                    </tr>
                    <tr>
                        <th>@lang('Approved by')</th>
                        <td>{{ $approvedWithdrawal->approver->name }} </td>
                    </tr>
                    <tr>
                        <th>@lang('Channel')</th>
                        <td>{{ $approvedWithdrawal->channel }} </td>
                    </tr>
                    <tr>
                        <th>@lang('Reference #')</th>
                        <td>{{ $approvedWithdrawal->reference_no }} </td>
                    </tr>
                    <tr>
                        <th>@lang('Date of Transfer')</th>
                        <td>{{ $approvedWithdrawal->date_of_transfer }} </td>
                    </tr>
                @endif
                <tr>
                    <th>@lang('Meta')</th>

                    <td>
                        @forelse($transaction->meta ?? [] as $key => $meta)
                            <p><strong>{{strtoupper($key)}}</strong> :
                                @if($key === 'credited_by' || $key === 'approved_by')
                                    {{ $creditedBy }}
                                @else
                                {!! $meta !!}
                                @endif
                            </p>
                        @empty
                            N/A
                        @endforelse
                    </td>
                </tr>
            </table>

            <table class="table align-items-center table-flush">
                @if(count($amendmentTransactions))
                <div class="row align-items-center">
                    <div class="col">
                        <h2 class="h2 text-success mb-0"> @lang("Amendment History")</h2>
                    </div>
                </div>
                <thead class="thead-light">
                <tr>
                    <th>#Transaction ID</th>
                    <th>Amended Amount</th>
                    <th>Current Amount</th>
                    <th>Amended By</th>
                    <th>Date and Time</th>
                    <th>Details</th>
                </tr>
                </thead>
                @endif

                @forelse($amendmentTransactions as $amendmentTransaction)
                @php
                    $totalAmendment = $totalAmendment + ($amendmentTransaction->amount / 100);
                    $currentAmount = $transaction->amountFloat + $totalAmendment;
               @endphp
                    <tr>
                        <td>
                            {{ $amendmentTransaction->uuid }}
                        <td>
                            {{ number_format($amendmentTransaction->amount / 100, 2) }}</td>
                        <td>
                            <span class='badge badge-warning text-white'>
                                {{ number_format($currentAmount, 2) }}
                            </span>
                        </td>
                        <td>{{ $amendmentTransaction->name }}</td>
                        <td>{{ $amendmentTransaction->created_at }}</td>
                        <td>
                            <x-utils.link
                            class="btn btn-sm btn-primary text-white amended-transaction"
                            dataTarget="#amendment-details"
                            data-id="{{ $amendmentTransaction->uuid }}"
                            data-amount="{{ number_format($amendmentTransaction->amount / 100, 2) }}"
                            data-balance="{{ number_format($currentAmount, 2) }}"
                            data-created_by="{{ $amendmentTransaction->name }}"
                            data-created_at="{{ $amendmentTransaction->created_at }}"
                            data-note="{{ $amendmentTransaction->notes }}"
                            >
                            View
                            </x-utils.link>
                        </td>
                    </tr>
                @empty
                    <p class="text-center lead">No Amendment History Available</p>
                @endforelse
            </table>
        </x-slot>


        <x-slot name="footer">
            @if($transaction->type === 'deposit')
                <small class="float-right">
                    @role('Administrator')
                    <div class="col text-right">
                        <x-utils.link
                            class="btn btn-info text-white"
                            dataTarget="#amend"
                            :text="__('Amend')"
                        />
                    </div>
                    @endrole
                </small>
            @endif
                {{-- @if(!$transaction->confirmed)
                    @if(auth()->user()->hasRole('Operator') && $transaction->payable instanceof \App\Domains\Hub\Models\Hub)
                        <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                    @endif
                    @if(auth()->user()->hasRole('Master Agent') && $transaction->payable instanceof \App\Domains\Auth\Models\User)
                        @if($transaction->payable->hasRole('Player'))
                            <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                        @endif
                    @endif
                    @if(auth()->user()->hasRole('Virtual Hub') && $transaction->payable instanceof \App\Domains\Auth\Models\User)
                        @if($transaction->payable->hasRole('Master Agent'))
                            <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
                        @endif
                    @endif

                @endif --}}

        </x-slot>
    </x-backend.card>
    <x-utils.modal
    title="Amend Transaction"
    type="form"
    targetId="amend"
    action="{{route('admin.amend.transaction', $transaction)}}"
    submitBtn="Proceed"
    >
    <div>
        <div class="row">
            <label for="amount" class="col col-form-label">@lang('Deposited Amount')</label>
        </div>
        <div class="form-group row">
            <div class="col">

                @php
                    if(count($amendmentTransactions)) {
                        $amount = number_format($amendedAmount, 2);
                    } else {
                        $amount = number_format($transaction->amountFloat, 2);
                    }
                @endphp

                <input
                    type="text"
                    class="form-control"
                    name="amount"
                    value="{{ $amount }}"
                    disabled
                   >

            </div>
        </div>
        <div class="row">
            <label for="" class="col col-form-label">@lang('Change to')</label>
        </div>
        <div class="form-group row">
            <div class="col">
                <input
                    type="number"
                    class="form-control"
                    name="change_to_amount"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Amount to change from the original amount of transaction"
                    required
                    >
            </div>
        </div>
        <div class="row">
            <label for="" class="col col-form-label">@lang('Notes')</label>
        </div>
        <div class="form-group row">
            <div class="col">
                <textarea
                    class="form-control"
                    name="notes"
                    required
                    ></textarea>
            </div>
        </div>
    </div>
</x-utils.modal>
@include('backend.wallet.includes.amendment-details')
@endsection
