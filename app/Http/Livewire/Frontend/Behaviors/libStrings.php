<?php

namespace App\Http\Livewire\Frontend\Behaviors;

trait libStrings
{

        public $MESSAGE_PARAMS = ['BET_ADMIN' => [
            'confirm' => [
                'title' => 'Are you sure you want to select ',
                'confirmText' => 'YES',
                'showConfirmButton' => true,
                'showCancelButton' => true,
                'allowOutsideClick' => false,
                'callback' => '',
                'callbackParams' => '',
                'method' => '',
                'params' => ''],
            'approval' => [
                'icon' => 'info',
                'title' => 'Please wait for the Dealer Admin Confirmation',
                'confirmText' => 'YES',
                'showConfirmButton' => false,
                'showCancelButton' => false,
                'allowOutsideClick' => false,
                'method' => '',
                'callback' => '',
                'callbackParams' => '',
                'params' => ''
            ],
            'alert_cancelled' => [
                'icon' => 'info',
                'title' => 'Selection was cancelled',
                'confirmText' => 'OK',
                'showConfirmButton' => true,
                'showCancelButton' => false,
                'allowOutsideClick' => false,
                'method' => '',
                'callback' => '',
                'callbackParams' => '',
                'params' => ''
            ],
            'approved' => [
                'icon' => 'info',
                'title' => 'Selection was approved',
                'confirmText' => 'OK',
                'showConfirmButton' => true,
                'showCancelButton' => false,
                'allowOutsideClick' => false,
                'method' => '',
                'callback' => '',
                'callbackParams' => '',
                'params' => ''
            ],
        ],
            'DEALER_ADMIN' => [
                'approval' => [
                    'title' => 'Bet Admin Selected ',
                    'confirmText' => 'PROCEED',
                    'showConfirmButton' => true,
                    'showCancelButton' => true,
                    'allowOutsideClick' => false,
                    'method' => '',
                    'params' => '',
                    'callback' => '',
                    'callbackParams' => '',
                ],
                'notify' => [
                    'title' => 'This round has ended',
                    'confirmText' => 'OK',
                    'showConfirmButton' => true,
                    'showCancelButton' => false,
                    'allowOutsideClick' => false,
                    'method' => '',
                    'params' => '',
                    'callback' => '',
                    'callbackParams' => '',
                ]
            ]
        ];
    public $BET_ADMIN = 'BET_ADMIN';
    public $DEALER_ADMIN = 'DEALER_ADMIN';

    public function  appendOptionToTitle($sOption)
    {
        $this->MESSAGE_PARAMS['BET_ADMIN']['confirm']['title'] .= $sOption;
        $this->MESSAGE_PARAMS['DEALER_ADMIN']['approval']['title'] .= $sOption;
    }
}
