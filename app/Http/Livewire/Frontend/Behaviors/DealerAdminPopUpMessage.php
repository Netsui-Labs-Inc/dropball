<?php

namespace App\Http\Livewire\Frontend\Behaviors;

class DealerAdminPopUpMessage
{
    private $oPopUpMessage;
    public function __construct(PopUpMessage $oPopUpMessage)
    {
        $this->oPopUpMessage = $oPopUpMessage;
    }

    public function confirmSelection($sAppendToTitle)
    {
       return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeConfirm())
           ->setIcon('warning')
           ->setTitle('Bet Admin Selected ' . $sAppendToTitle)
           ->setConfirmText('PROCEED')
           ->setConfirmButtonVisibility(true)
           ->setCancelButtonVisibility(true)
           ->setAllowOutsideClick(false)
           ->setMethodToExecUponConfirm('approved')
           ->setMethodToExecUponCancel('cancelled')
           ->setConfirmMethodParameters($sAppendToTitle)
           ->getPopUp();
    }

    public function RoundEndedNotification()
    {
        return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeConfirm())
            ->setTitle('This round has ended')
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('pageReload')
            ->getPopUp();
    }

    public function showConfirmationResult($sResult, $callback = '')
    {
        return $this->oPopUpMessage->setType($this->oPopUpMessage->getTypeAlert())
            ->setIcon('info')
            ->setTitle('Selection was ' . $sResult)
            ->setMethodToExecUponConfirm($callback)
            ->getPopUp();
    }
}
