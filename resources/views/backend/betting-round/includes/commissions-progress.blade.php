<div>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Bet ID</th>
            <th>Agent</th>
            <th>Hub</th>
            <th>Operator</th>
            <th>System</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        @foreach($bets as $bet)
            <tr class="{{$bet->commission_processed ? 'completed-commission' : 'pending-commissions'}}">
                <td style="width: 80px;">{{ $bet->id }}</td>
                <td>{!! $bet->commissions()->where('type', 'master_agent')->exists() ? "<span class='badge badge-success'>OK</span>" : "<span class='badge badge-warning'>PENDING</span>"  !!}</td>
                <td>{!! $bet->commissions()->where('type', 'hub')->exists() ? "<span class='badge badge-success'>OK</span>"  : "<span class='badge badge-warning'>PENDING</span>" !!}</td>
                <td>{!! $bet->commissions()->where('type', 'operator')->exists() ? "<span class='badge badge-success'>OK</span>"  : "<span class='badge badge-warning'>PENDING</span>" !!}</td>
                <td>{!! $bet->commissions()->where('type', 'system')->exists() ? "<span class='badge badge-success'>OK</span>"  : "<span class='badge badge-warning'>PENDING</span>" !!}</td>
                @if(!$bet->commission_processed)
                    <td style="width:200px"><button class="btn btn-primary" wire:click="processCommissions({{$bet->id}})">Process Commission</button></td>
                @else
                    <td style="width:200px"><button class="btn btn-secondary" disabled>Process Commissions</button> </td>
                @endif
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
