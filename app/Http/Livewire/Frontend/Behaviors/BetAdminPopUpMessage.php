<?php

namespace App\Http\Livewire\Frontend\Behaviors;

class BetAdminPopUpMessage
{
    private $popUpMessage;

    public function __construct(PopUpMessage $popUpMessage)
    {
        $this->popUpMessage = $popUpMessage;
    }

    public function selectBet($selectedWinningBet)
    {
        return $this->popUpMessage->setType($this->popUpMessage->getTypeConfirm())
            ->setIcon('warning')
            ->setTitle('Are you sure you want to select ' . $selectedWinningBet)
            ->setConfirmText('YES')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(true)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('sendSelectionRequest')
            ->setConfirmMethodParameters($selectedWinningBet)
            ->getPopUp();
    }

    public function confirmSelection($selectedBet)
    {
        return $this->popUpMessage->setType($this->popUpMessage->getTypeConfirm())
            ->setIcon('info')
            ->setTitle('Please wait for the Dealer Admin Confirmation')
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(false)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm('approved')
            ->setConfirmMethodParameters($selectedBet)
            ->getPopUp();
    }

    public function showConfirmationResult($result, $callback = '')
    {
        return $this->popUpMessage->setType($this->popUpMessage->getTypeConfirm())
            ->setIcon('info')
            ->setTitle('Selection was ' . $result)
            ->setConfirmText('OK')
            ->setConfirmButtonVisibility(true)
            ->setCancelButtonVisibility(false)
            ->setAllowOutsideClick(false)
            ->setMethodToExecUponConfirm($callback)
            ->getPopUp();
    }
}
