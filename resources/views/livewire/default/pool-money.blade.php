<div class="row justify-content-center">
    <div class="col">
        <span class="h6 surtitle">POOL MONEY</span>
        <div class="h4 text-success">{{number_format($poolMoney)}}</div>
    </div>
    <div class="col">
        <span class="h6 surtitle">PUTI</span>
        <div class="h4 text-gray">{{number_format($puti)}}</div>
    </div>
    <div class="col">
        <span class="h6 surtitle">PULA</span>
        <div class="h4 text-gray text-danger">{{number_format($pula)}}</div>
    </div>
   <div class="col">
       @if($jackpot * 5 <  $pula + $puti)
           <span class="h6 surtitle font-weight-bold text-success"> <i class="fa fa-check"></i> JACKPOT</span>
       @else
           <span class="h6 surtitle font-weight-bold text-muted"> <i class="fa fa-muted"></i> JACKPOT</span>
       @endif
        <div class="h4 text-warning">{{number_format($jackpot)}}</div>
    </div>
    <div class="col">
        <span class="h6 surtitle">JACKPOT PAYOUT</span>
        <div class="h4 text-warning">{{number_format($jackpot * 5)}}</div>
    </div>
    <div class="col">
        <span class="h6 surtitle">PULA + PUTI</span>
        <div class="h4 text-success">{{number_format($pula + $puti)}}</div>
    </div>

</div>
