<div class="row">
    <div class="h6 surtitle text-white col-12 d-flex justify-content-between">
        <span class="mr-3">Game Trend</span>
        <div>
        <i class="fas fa-circle text-white p-0 "></i> = WALA
        <i class="fas fa-circle text-danger p-0 "></i> = MERON
        <i class="fas fa-circle p-0 text-warning "></i> = JACKPOT
        <i class="fas fa-circle p-0 text-muted "></i> = CANCELLED
        <i class="fas fa-dot-circle p-0 text-muted "></i> = PENDING
        </div>
    </div>
    <div class="col pt-1">
    <div class="overflow-auto vertical-scrollable">
        @foreach($rounds as $round)
            @if($round->status == 'cancelled')
                <i class="text-xs fas fa-circle p-0 text-muted "></i>
            @elseif (!$round->result)
                <i class="text-xs fas fa-dot-circle p-0 "></i>
            @elseif ($round->betOption->name == 'MERON')
                <i class="text-xs fas fa-circle text-danger p-0 "></i>
            @elseif ($round->betOption->name == 'WALA')
                <i class="text-xs fas fa-circle text-white p-0 "></i>
            @elseif ($round->betOption->name == 'BOKYA')
                <i class="text-xs fas fa-circle text-warning p-0 "></i>
            @endif
        @endforeach
    </div>
    </div>
</div>
