@php
    $borderColor = ($option->name === 'PUTI') ? 'border:1px solid black' : '';
    $buttonType = ($option->name === 'PULA') ? 'btn-danger' : '';

@endphp
<button class="btn-lg btn-block btn {{ $buttonType }}" style="background-color:{{$option->color}}; {{$borderColor}}"
        wire:click="$emit('confirmSelection', '{{$option->name}}')">
    {{$option->name}}</button>
