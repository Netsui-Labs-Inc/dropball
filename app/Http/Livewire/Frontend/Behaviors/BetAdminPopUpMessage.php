<?php

namespace App\Http\Livewire\Frontend\Behaviors;

class BetAdminPopUpMessage
{
    private $oPopUpMessage;

    public function __construct(PopUpMessage $oPopUpMessage)
    {
        $this->oPopUpMessage = $oPopUpMessage;
    }

    public function selectBet($sAppendToTitle)
    {
        return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeConfirm())
            ->setIcon('warning')
            ->setTitle('Are you sure you want to select ' . $sAppendToTitle)
            ->setConfirmText('YES')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(true)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('sendSelectionRequest')
            ->setConfirmMethodParameters($sAppendToTitle)
            ->getPopUp();
    }

    public function confirmSelection($sSelectedBet)
    {
        return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeConfirm())
            ->setIcon('info')
            ->setTitle('Please wait for the Dealer Admin Confirmation')
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(false)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('approved')
            ->setConfirmMethodParameters($sSelectedBet)
            ->getPopUp();
    }

    public function showConfirmationResult($sResult, $callback = '')
    {
        return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeConfirm())
            ->setIcon('info')
            ->setTitle('Selection was ' . $sResult)
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm($callback)
            ->getPopUp();
    }
}
