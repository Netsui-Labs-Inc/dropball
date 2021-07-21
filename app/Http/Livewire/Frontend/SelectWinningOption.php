<?php

namespace App\Http\Livewire\FrontEnd;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\ConfirmBetResult;
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

    public function setMesssagePopUp($oBetAdmin, $oDealerAdmin)
    {
        if ($this->user->hasRole('Bet Admin')) {
            return $oBetAdmin;
        }
        return $oDealerAdmin;

    }

    public function getListeners()
    {
        return [
            "echo-private:event.{$this->bettingEvent->id}_PULA.play,ConfirmBetResult" => 'doNotifPula',
            "echo-private:event.{$this->bettingEvent->id}_PUTI.play,ConfirmBetResult" => 'doNotifPuti',
            "echo-private:event.{$this->bettingEvent->id}_JACKPOT.play,ConfirmBetResult" => 'doNotifJackpot',
            "echo-private:event.{$this->bettingEvent->id}_CANCELLED.play,ConfirmBetResult" => 'showCancelled',
            "echo-private:event.{$this->bettingEvent->id}_APPROVED.play,ConfirmBetResult" => 'showApproved',
            "echo-private:event.{$this->bettingEvent->id}_NOTIFYDEALERADMIN.play,ConfirmBetResult" => 'showNotifToDealerAdmin',
            "echo-private:event.{$this->bettingEvent->id}_BETTINGROUNDSTARTDEALERADMIN.play,ConfirmBetResult" => 'informDealerAdminBettingRoundStart',
            'confirmSelection'         => 'confirmSelection',
            'sendSelectionRequest'         => 'sendSelectionRequest',
            'cancelled' => 'cancelled',
            'approved' => 'approved',
            'showResult' => 'showResult',
            'pageReload' => 'pageReload'
        ];

    }

    public function showNotifToDealerAdmin(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->RoundEndedNotification();
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }

    public function pageReload()
    {
        $this->redirect('/admin/reload');

    }

    public function doNotifPula(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->confirmSelection('PULA');
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }

    public function doNotifPuti(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->confirmSelection('PUTI');
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }
    public function doNotifJackpot(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->confirmSelection('JACKPOT');
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }

    public function approved($selectedOption)
    {
        event(new ConfirmBetResult($this->bettingRound,'APPROVED'));

    }

    public function cancelled($params)
    {
        event(new ConfirmBetResult($this->bettingRound,'CANCELLED'));

    }

    public function showCancelled(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->showConfirmationResult('cancelled');
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }

    public function showApproved(
        BetAdminPopUpMessage $oBetAdminPopUpMessage,
        DealerAdminPopUpMessage $oDealerAdminPopUpMessage
    ){
        $oMessagePopUp = $this->setMesssagePopUp($oBetAdminPopUpMessage, $oDealerAdminPopUpMessage);
        $aPopUp = $oMessagePopUp->showConfirmationResult('approved', 'showResult');
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

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

    public function confirmSelection($selectedOptionId, BetAdminPopUpMessage $oBetAdminPopUpMessage)
    {
        $selectedOption = BetOption::find($selectedOptionId);
        session()->put('selected_option', $selectedOptionId);
        $aPopUp = $oBetAdminPopUpMessage->selectBet($selectedOption->name);
        $this->emit(  $aPopUp['type'],   $aPopUp['params']);

    }

    public function sendSelectionRequest($params)
    {
        event(new ConfirmBetResult($this->bettingRound, $params));

    }

    public function render()
    {
        return view('livewire.'. $this->theme .'.select-winning-option')
            ->with('bettingRound', $this->bettingRound);

    }
}
