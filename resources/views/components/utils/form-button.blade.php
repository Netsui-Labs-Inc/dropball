@props([
    'action' => '#',
    'method' => 'POST',
    'name' => '',
    'formClass' => 'd-inline',
    'buttonClass' => '',
    'icon' => false,
    'permission' => false,
    'attr' => '',
    'bgColor' => '',
])

@if ($permission)
    @if ($logged_in_user->can($permission))
        <form method="POST" action="{{ $action }}" name="{{ $name }}" class="{{ $formClass }}">
            @csrf
            @method($method)

            <button type="submit" class="{{ $buttonClass }}" {{$attr}} @if($bgColor !== '') style="background-color:{{$bgColor}};color:#fff" @endif>
                @if ($icon)<i class="{{ $icon }}"></i> @endif{{ $slot }}
            </button>
        </form>
    @endif
@else
    <form method="POST" action="{{ $action }}" name="{{ $name }}" class="{{ $formClass }}">
        @csrf
        @method($method)

        <button type="submit" class="{{ $buttonClass }}" {{$attr}} @if($bgColor !== '') style="border: 1px solid #8898aa ;background-color:{{$bgColor}};color:{{$bgColor == '#FFFFFF' ? "#8898aa" : "#FFFFFF"}}" @endif>
            @if ($icon)<i class="{{ $icon }}"></i> @endif{{ $slot }}
        </button>
    </form>
@endif
