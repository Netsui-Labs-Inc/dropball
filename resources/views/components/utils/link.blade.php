@props(['active' => '', 'class' => '',  'text' => '', 'hide' => false, 'icon' => false, 'permission' => false,  'dataTarget' => false])

@if ($permission)
    @if ($logged_in_user->can($permission))
        @if (!$hide)
            <a {{ $attributes->merge(['href' => '#', 'class' => "$active $class"]) }} @if($dataTarget) data-target="{{$dataTarget}}" data-toggle="modal" @endif>@if ($icon)<i class="{{ $icon }}"></i> @endif{{ strlen($text) ? $text : $slot }}</a>
        @endif
    @endif
@else
    @if (!$hide)
        <a {{ $attributes->merge(['href' => '#', 'class' => "$active $class"]) }} @if($dataTarget) data-target="{{$dataTarget}}" data-toggle="modal" @endif>@if ($icon)<i class="{{ $icon }}"></i> @endif{{ strlen($text) ? $text : $slot }}</a>
    @endif
@endif
