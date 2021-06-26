@props([
        'title' => '',
        'name' => '#',
        'targetId' => '',
        'type' => 'basic',
        'action' => '#',
        'method' =>  'POST',
        'closeBtn' => 'Close',
        'submitBtn' => 'Save',
        'formClass' => 'd-inline',
        'bodyClass' => '',
 ])

@if($type == 'form')
<div class="modal" tabindex="-1" role="dialog" id="{{$targetId}}">
    <div class="modal-dialog" role="document">
        <form method="POST" action="{{ $action }}" name="{{ $name }}" class="{{ $formClass }}">
            @csrf
            @method($method)
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{$title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body {{$bodyClass}}">
                {{ $slot }}
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">{{$submitBtn}}</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{$closeBtn}}</button>
            </div>
        </div>
        </form>
    </div>
</div>
@else
    <div class="modal" tabindex="-1" role="dialog" id="{{$targetId}}">
        <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{$title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{ $slot }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">{{$closeBtn}}</button>
                    </div>
                </div>
        </div>
    </div>
@endif
