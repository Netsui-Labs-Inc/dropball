<div class="commissions-status-table">
    <table class="table table-striped">
        <thead>
        <tr>
            <th style="width: 80px;">Bet ID</th>
            <th>Agent</th>
            <th>Hub</th>
            <th>Operator</th>
            <th>System</th>
            <th style="width:200px">Action</th>
        </tr>
        </thead>
        <tbody>
        @foreach($bets as $bet)
            <livewire:commissions-status-row :bet="$bet"></livewire:commissions-status-row>
        @endforeach
        </tbody>
    </table>
</div>
