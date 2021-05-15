@props([
'class' => '',
'headerClass' => '',
'bodyClass' => '',
])

<div class="card {{$class}}" >
    @if (isset($header))
        <div class="card-header {{$headerClass}} border-radius-0">
            {{ $header }}

            @if (isset($headerActions))
                <div class="d-inline-block float-right">
                    {{ $headerActions }}
                </div><!--card-header-actions-->
            @endif
        </div><!--card-header-->
    @endif
    @if(isset($table))
        <div class="table-responsive">
            {{$table}}
        </div>
    @endif
    @if (isset($body))
        <div class="card-body {{$bodyClass}}">
            {{ $body }}
        </div><!--card-body-->
    @endif

    @if (isset($footer))
        <div class="card-footer">
            {{ $footer }}
        </div><!--card-footer-->
    @endif
</div><!--card-->
