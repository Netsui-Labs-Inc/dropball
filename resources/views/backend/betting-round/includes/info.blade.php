<table class="table table-hover">
    <tr>
        <th>@lang('Betting Round ID')</th>
        <td>#{{$bettingRound->id}}</td>
    </tr>
    <tr>
        <th>@lang('Betting Round Queue')</th>
        <td>#{{$bettingRound->queue}}</td>
    </tr>
    <tr>
        <th>@lang('UUID')</th>
        <td>{{$bettingRound->uuid}}</td>
    </tr>
    <tr>
        <th>@lang('Event')</th>
        <td><a href="{{route('admin.betting-events.show', $bettingRound->bettingEvent)}}">{{$bettingRound->bettingEvent->name}}</a></td>
    </tr>
    <tr>
        <th>@lang('Is Betting Open?')</th>
        <td>{!!  $bettingRound->bettingOpenLabel()!!}</td>
    </tr>
    <tr>
        <th>@lang('Pool Money')</th>
        <td>{!!  number_format($bettingRound->bets()->sum('bet_amount') ?? 0) !!}</td>
    </tr>
    <tr>
        <th>@lang('Status')</th>
        <td>{!! $bettingRound->statusLabel() ?? 'N/A' !!}</td>
    </tr>
    <tr>
        <th>@lang('Result')</th>
        <td class="surtitle uppercase">{!! $bettingRound->betOption ?  strtoupper( $bettingRound->betOption->name): 'N/A'!!}</td>
    </tr>
    <tr>
        <th>@lang('Note')</th>
        <td>{{$bettingRound->note}}</td>
    </tr>
</table>
