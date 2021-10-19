<tr class="{{$bet->commission_processed ? 'completed-commission' : 'pending-commissions'}}">
    <td style="width: 80px;">#{{ $bet->id }}</td>
    @if($status === 'failed')
        <td><span class='badge badge-danger text-white'>FAILED</span></td>
        <td><span class='badge badge-danger text-white'>FAILED</span></td>
        <td><span class='badge badge-danger text-white'>FAILED</span></td>
        <td><span class='badge badge-danger text-white'>FAILED</span></td>
    @else
        <td>@if($masterAgent) <span class='badge badge-success'>OK</span> @else <span class='badge badge-warning text-white'>PENDING</span>@endif</td>
        <td>@if($hub) <span class='badge badge-success'>OK</span> @else <span class='badge badge-warning text-white'>PENDING</span>@endif</td>
        <td>@if($developer) <span class='badge badge-success'>OK</span> @else <span class='badge badge-warning text-white'>PENDING</span>@endif</td>
        <td>@if($operator) <span class='badge badge-success'>OK</span> @else <span class='badge badge-warning text-white'>PENDING</span>@endif</td>
    @endif

    @if($status === 'pending')
        <td style="width:200px"><button class="btn btn-primary btn-sm" wire:click="processCommissions({{$bet->id}})"><i class="fa fa-play"></i></button></td>
    @elseif($status === 'failed')
        <td style="width:200px"><button class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button>
            @if($errorMessage)<span class="pl-2 text-danger text-xs">{{$errorMessage}}</span>@endif
        </td>
    @elseif($status=== 'in-progress')
        <td style="width:200px"><button class="btn btn-warning btn-sm">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="sr-only">Loading...</span>
            </button>
        </td>
    @else
        <td style="width:200px"><button class="btn btn-success btn-sm" disabled><i class="fa fa-check"></i></button> </td>
    @endif
</tr>
