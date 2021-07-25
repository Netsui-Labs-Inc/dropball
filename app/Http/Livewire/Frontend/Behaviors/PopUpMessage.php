<?php

namespace App\Http\Livewire\Frontend\Behaviors;

use Illuminate\Support\Arr;
use function Clue\StreamFilter\prepend;

class PopUpMessage
{
    private $typeModal = 'swal:modal';
    private $typeConfirm = 'swal:confirm';
    private $typeAlert = 'swal:alert';
    private $type  = 'type';
    private $icon = 'icon';
    private $title = 'title';
    private $confirmText = 'confirmText';
    private $showConfirmButton = 'show_confirm_button';
    private $showCancelButton  = 'show_cancel_button';
    private $allowOutsideClick = 'allow_outside_click';
    private $method = 'method';
    private $callBack = 'callback';
    private $callBackParams = 'callback_params';
    private $params = 'params';

    private $popUp = [
        'type'   => '',
        'params' => []
    ];

    public function setType($type)
    {
        $this->popUp[$this->type] = $type;
        return $this;
    }

    public function setIcon($icon)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->icon => $icon]
        );
        return $this;
    }

    public function setTitle($title)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->title => $title]
        );
        return $this;
    }

    public function setConfirmText($confirmText)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->confirmText => $confirmText]
        );
        return $this;
    }

    public function setConfirmButtonVisibility($bVisibility)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->showConfirmButton => $bVisibility]
        );
        return $this;
    }

    public function setCancelButtonVisibility($bVisibility)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->showCancelButton => $bVisibility]
        );
        return $this;
    }


    public function setAllowOutsideClick($bAllowClick)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->allowOutsideClick => $bAllowClick]
        );
        return $this;
    }

    public function setMethodToExecUponConfirm($sMethodToExecute)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->method => $sMethodToExecute]
        );
        return $this;
    }

    public function setConfirmMethodParameters($sConfirmMethodParameters)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->params => $sConfirmMethodParameters]
        );
        return $this;
    }

    public function setMethodToExecUponCancel($sCancelMethod)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->callBack => $sCancelMethod]
        );
        return $this;
    }

    public function setCancelMethodParameters($sCancelMethodParameters)
    {
        $this->popUp[$this->params] = array_merge(
            $this->popUp[$this->params],
            [$this->callBackParams => $sCancelMethodParameters]
        );
        return $this;
    }

    public function getTypeModal()
    {
        return $this->typeModal;
    }

    public function getTypeConfirm()
    {
        return $this->typeConfirm;
    }

    public function getTypeAlert()
    {
        return $this->typeAlert;
    }

    public function getPopUp()
    {
        return $this->popUp;
    }

}
