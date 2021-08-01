<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\ConfirmBetBettingResult;
use App\Http\Livewire\Frontend\Behaviors\BetAdminPopUpMessage;
use App\Http\Livewire\Frontend\Behaviors\DealerAdminPopUpMessage;
use Livewire\Component;

class SelectWinningOption extends Component
{
    public $bettingOptions;
    public $theme;
    public $bettingEvent;
    public $bettingRound;
    public ?User $user;
    public $modelBettingRound;

    public function mount($bettingEventId,
                          BettingRound $bettingRound,
                          $bettingOptions,
                          $theme = 'default'
    ){
        $this->theme = $theme;
        $this->bettingOptions = $bettingOptions;
        $this->modelBettingRound = $bettingRound;
        $this->user = auth()->user();
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();

    }

    public function setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage)
    {
        if ($this->user->hasRole('Bet Admin')) {
            return $betAdminPopUpMessage;
        }
        return $dealerAdminPopUpMessage;

    }

    public function getListeners()
    {
        return [
            "echo-private:event.{$this->bettingEvent->id}_PULA.play,ConfirmBetBettingResult" => 'showSelectedPulaNotification',
            "echo-private:event.{$this->bettingEvent->id}_PUTI.play,ConfirmBetBettingResult" => 'showSelectedPutiNotification',
            "echo-private:event.{$this->bettingEvent->id}_JACKPOT.play,ConfirmBetBettingResult" => 'showSelectedJackpotNotification',
            "echo-private:event.{$this->bettingEvent->id}_CANCELLED.play,ConfirmBetBettingResult" => 'showCancelled',
            "echo-private:event.{$this->bettingEvent->id}_APPROVED.play,ConfirmBetBettingResult" => 'showApproved',
            "echo-private:event.{$this->bettingEvent->id}_NOTIFYDEALERADMIN.play,ConfirmBetBettingResult" => 'roundEndedNotification',
            'confirmSelection'         => 'confirmSelection',
            'sendSelectionRequest'         => 'sendSelectionRequest',
            'cancelled' => 'cancelled',
            'approved' => 'approved',
            'showResult' => 'showResult',
            'pageReload' => 'pageReload'
        ];

    }

    public function roundEndedNotification(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->roundEndedNotification();
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function pageReload()
    {
        $this->redirect('/admin/reload');

    }

    public function showSelectedPulaNotification(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->confirmSelection('PULA');
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function showSelectedPutiNotification(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->confirmSelection('PUTI');
        $this->emit($popUp['type'], $popUp['params']);

    }
    public function showSelectedJackpotNotification(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->confirmSelection('JACKPOT');
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function approved($selectedOption)
    {
        event(new ConfirmBetBettingResult($this->bettingRound,'APPROVED'));

    }

    public function cancelled($params)
    {
        event(new ConfirmBetBettingResult($this->bettingRound,'CANCELLED'));

    }

    public function showCancelled(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->showConfirmationResult('cancelled');
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function showApproved(
        BetAdminPopUpMessage $betAdminPopUpMessage,
        DealerAdminPopUpMessage $dealerAdminPopUpMessage
    ){
        $messagePopUp = $this->setMesssagePopUp($betAdminPopUpMessage, $dealerAdminPopUpMessage);
        $popUp = $messagePopUp->showConfirmationResult('approved', 'showResult');
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function showResult()
    {
        $selectedOption = session('selected_option');
        session()->forget('selected_option');
        redirect()->action([BettingRoundController::class, 'setResult'], ['result' => $selectedOption, 'bettingRound' => $this->bettingRound]);

    }

    public function getLatestBettingRound()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
            $this->bettingRound = $this->bettingEvent->bettingRounds()->whereNotIn("betting_rounds.status", ['ended', 'cancelled'])->first();
        }

        if (is_array($this->bettingRound)) {
            $this->bettingRound = BettingRound::find($this->bettingRound['id']);
        }

        return $this->bettingEvent->activeBettingRound()->first();

    }

    public function confirmSelection($selectedOptionId, BetAdminPopUpMessage $betAdminPopUpMessage)
    {
        $selectedOption = BetOption::find($selectedOptionId);
        session()->put('selected_option', $selectedOptionId);
        $popUp = $betAdminPopUpMessage->selectBet($selectedOption->name);
        $this->emit($popUp['type'], $popUp['params']);

    }

    public function sendSelectionRequest($params)
    {
        event(new ConfirmBetBettingResult($this->bettingRound, $params));

    }

    public function render()
    {
        return view('livewire.'. $this->theme .'.select-winning-option')
            ->with('bettingRound', $this->bettingRound);

    }
}
