<?php

namespace App\Http\Livewire\Frontend\Behaviors;

class DealerAdminPopUpMessage
{
    private $popUpMessage;
    public function __construct(PopUpMessage $popUpMessage)
    {
        $this->popUpMessage = $popUpMessage;
    }

    public function confirmSelection($selectedWinningBet)
    {
       return $this->popUpMessage->setType($this->popUpMessage->getTypeConfirm())
           ->setIcon('warning')
           ->setTitle('Bet Admin Selected ' . $selectedWinningBet)
           ->setConfirmText('PROCEED')
           ->setConfirmButtonVisibility(true)
           ->setCancelButtonVisibility(true)
           ->setAllowOutsideClick(false)
           ->setMethodToExecUponConfirm('approved')
           ->setMethodToExecUponCancel('cancelled')
           ->setConfirmMethodParameters($selectedWinningBet)
           ->getPopUp();
    }

    public function roundEndedNotification()
    {
        return $this->popUpMessage->setType($this->popUpMessage->getTypeConfirm())
            ->setTitle('This round has ended')
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('pageReload')
            ->getPopUp();
    }

    public function showConfirmationResult($result, $callback = '')
    {
        return $this->popUpMessage->setType($this->popUpMessage->getTypeAlert())
            ->setIcon('info')
            ->setTitle('Selection was ' . $result)
            ->setMethodToExecUponConfirm($callback)
            ->getPopUp();
    }
}
