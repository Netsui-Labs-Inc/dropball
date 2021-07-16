<?php

namespace App\Http\Livewire\Frontend\Behaviors;

use Livewire\Component;

trait PopUpMessage
{

    public function confirm($aParams){
        return [
            'type'   => 'swal:confirm',
            'params' => [
                'icon'=> 'warning',
                'title'              => $aParams['title'],
                'confirmText'        => $aParams['confirmText'],
                'show_confirm_button' => $aParams['showConfirmButton'],
                'show_cancel_button' => $aParams['showCancelButton'],
                'allow_outside_click' => $aParams['allowOutsideClick'],
                'method'             => $aParams['method'],
                'callback'   => $aParams['callback'],
                'callback_params'   => $aParams['callbackParams'],
                'params'             => $aParams['params'],
            ]
        ];
    }

    public function notify($aParams){
        return [
            'type'   => 'swal:modal',
            'params' => [
                'icon'                => 'info',
                'title'               => $aParams['title'],
                'show_confirm_button' => $aParams['showConfirmbutton'],
                'outside_click'       => $aParams['outsideClick'],
                'method'              => "notifySelection"
            ]
        ];
    }

    public function alert($aParams){
        return [
            'type'   => 'swal:alert',
            'params' => [
                'icon'=> 'info',
                'title'              => $aParams['title']
            ]
        ];
    }

}
