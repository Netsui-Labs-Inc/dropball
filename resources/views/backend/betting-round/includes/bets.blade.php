<div class="row">
    @foreach($bettingOptions as $option)
    <div class="col-4">
        <div class="text-value-sm"><span class="font-weight-bold" style="color: {{$option->color}}">{{$option->name}}</span> PHP {{number_format($bettingRound->totalBetType($option->id))}}</div>
    </div>
    @endforeach
</div>
