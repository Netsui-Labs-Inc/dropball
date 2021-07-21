<?php

namespace App\Http\Livewire\Frontend\Behaviors;

use Illuminate\Support\Arr;
use function Clue\StreamFilter\prepend;

class PopUpMessage
{
    private $sTypeModal = 'swal:modal';
    private $sTypeConfirm = 'swal:confirm';
    private $stypeAlert = 'swal:alert';
    private $sType  = 'type';
    private $sIcon = 'icon';
    private $sTitle = 'title';
    private $sConfirmText = 'confirmText';
    private $sShowConfirmButton = 'show_confirm_button';
    private $sShowCancelButton  = 'show_cancel_button';
    private $sAllowOutsideClick = 'allow_outside_click';
    private $sMethod = 'method';
    private $sCallBack = 'callback';
    private $sCallBackParams = 'callback_params';
    private $sParams = 'params';

    private $aPopUp = [
        'type'   => '',
        'params' => []
    ];

    public function setType($sType)
    {
        $this->aPopUp[$this->sType] = $sType;
        return $this;
    }

    public function setIcon($sIcon)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sIcon => $sIcon]
        );
        return $this;
    }

    public function setTitle($sTitle)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sTitle => $sTitle]
        );
        return $this;
    }

    public function setConfirmText($sConfirmText)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sConfirmText => $sConfirmText]
        );
        return $this;
    }

    public function setConfirmButtonVisibility($bVisibility)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sShowConfirmButton => $bVisibility]
        );
        return $this;
    }

    public function setCancelButtonVisibility($bVisibility)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sShowCancelButton => $bVisibility]
        );
        return $this;
    }


    public function setAllowOutsideClick($bAllowClick)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sAllowOutsideClick => $bAllowClick]
        );
        return $this;
    }

    public function setMethodToExecUponConfirm($sMethodToExecute)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sMethod => $sMethodToExecute]
        );
        return $this;
    }

    public function setConfirmMethodParameters($sConfirmMethodParameters)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sParams => $sConfirmMethodParameters]
        );
        return $this;
    }

    public function setMethodToExecUponCancel($sCancelMethod)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sCallBack => $sCancelMethod]
        );
        return $this;
    }

    public function setCancelMethodParameters($sCancelMethodParameters)
    {
        $this->aPopUp[$this->sParams] = array_merge(
            $this->aPopUp[$this->sParams],
            [$this->sCallBackParams => $sCancelMethodParameters]
        );
        return $this;
    }

    public function getTypeModal()
    {
        return $this->sTypeModal;
    }

    public function getTypeConfirm()
    {
        return $this->sTypeConfirm;
    }

    public function getTypeAlert()
    {
        return $this->stypeAlert;
    }

    public function getPopUp()
    {
        return $this->aPopUp;
    }

}
