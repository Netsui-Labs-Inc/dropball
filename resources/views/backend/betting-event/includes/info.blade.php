<table class="table table-hover">
    <tr>
        <th>@lang('ID')</th>
        <td>#{{$bettingEvent->id}}</td>
    </tr>  <tr>
        <th>@lang('UUID')</th>
        <td>{{$bettingEvent->uuid}}</td>
    </tr>
    <tr>
        <th>@lang('Name')</th>
        <td>{{$bettingEvent->name}}</td>
    </tr>
    <tr>
        <th>@lang('Description')</th>
        <td>{{$bettingEvent->description}}</td>
    </tr>
    <tr>
        <th>@lang('Stream URL')</th>
        <td>{{$bettingEvent->stream_url}}</td>
    </tr>
    <tr>
        <th>@lang('Schedule')</th>
        <td>{{$bettingEvent->schedule}}</td>
    </tr>
</table>
