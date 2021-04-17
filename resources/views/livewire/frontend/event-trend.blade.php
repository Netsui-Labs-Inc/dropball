<div class="">
            @foreach($rounds as $round)
                @if($round->status == 'cancelled')
                    <i class="fas fa-circle p-0 text-warning text-sm"></i>
                @elseif (!$round->result)
                    <i class="fas fa-circle p-0 text-sm"></i>
                @elseif ($round->betOption->name == 'PULA')
                    <i class="fas fa-circle text-danger p-0 text-sm"></i>
                @elseif ($round->betOption->name == 'PUTI')
                    <i class="fas fa-circle text-white p-0 text-sm"></i>
                @endif
            @endforeach
</div>
