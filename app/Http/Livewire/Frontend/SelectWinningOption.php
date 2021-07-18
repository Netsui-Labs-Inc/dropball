<?php

namespace App\Http\Livewire\FrontEnd;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Http\Controllers\Backend\BettingRoundController;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBettingWindowUpdated;
use App\Events\confirmWinningSelection;
use App\Http\Livewire\Frontend\Behaviors\libStrings;
use App\Http\Livewire\Frontend\Behaviors\PopUpMessage;
use App\Http\Livewire\Frontend\Behaviors\setMessageAndAction;
use Livewire\Component;
use Livewire\Event;
use function Symfony\Component\Translation\t;

class SelectWinningOption extends Component
{
    use setMessageAndAction;
    public $bettingOptions;
    public $theme;
    public $bettingEvent;
    public $bettingRound;
    public ?User $user;
    public $modelBettingRound;
    private $setMessageAndAction;
    private $selectedOption;

    public function mount($bettingEventId,
                          BettingRound $bettingRound,
                          $theme = 'default',
                          $bettingOptions
    ){
        $this->theme = $theme;
        $this->bettingOptions = $bettingOptions;
        $this->modelBettingRound = $bettingRound;
        $this->user = auth()->user();
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();

    }

    public function getListeners()
    {
        return [
            "echo-private:event.{$this->bettingEvent->id}_PULA.play,confirmWinningSelection" => 'doNotifPula',
            "echo-private:event.{$this->bettingEvent->id}_PUTI.play,confirmWinningSelection" => 'doNotifPuti',
            "echo-private:event.{$this->bettingEvent->id}_JACKPOT.play,confirmWinningSelection" => 'doNotifJackpot',
            "echo-private:event.{$this->bettingEvent->id}_CANCELLED.play,confirmWinningSelection" => 'showCancelled',
            "echo-private:event.{$this->bettingEvent->id}_APPROVED.play,confirmWinningSelection" => 'showApproved',
            "echo-private:event.{$this->bettingEvent->id}_NOTIFYDEALERADMIN.play,confirmWinningSelection" => 'showNotifToDealerAdmin',
            "echo-private:event.{$this->bettingEvent->id}_BETTINGROUNDSTARTDEALERADMIN.play,confirmWinningSelection" => 'informDealerAdminBettingRoundStart',
            'confirmSelection'         => 'confirmSelection',
            'sendSelectionRequest'         => 'sendSelectionRequest',
            'cancelled' => 'cancelled',
            'approved' => 'approved',
            'showResult' => 'showResult',
            'pageReload' => 'pageReload'
        ];
    }

    public function showNotifToDealerAdmin()
    {
        $nextRount = $this->bettingRound->queue + 1;
        $this->initialize([$this->DEALER_ADMIN => 'confirm'])
            ->setOption('')
            ->setRole($this->user)
            ->setMessage(
                'notify',
                'pageReload',
                '')
            ->exec();
    }

    public function pageReload()
    {
        $this->redirect('/admin/reload');
    }

    public function doNotifPula() {
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption('PULA')
            ->setRole($this->user)
            ->setMessage( 'approval', 'approved', 'PULA', "cancelled", true)
            ->exec();
    }

    public function doNotifPuti() {
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption('PUTI')
            ->setRole($this->user)
            ->setMessage( 'approval', 'approved', 'PUTI', "cancelled", true)
            ->exec();
    }
    public function doNotifJackpot() {
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption('JACKPOT')
            ->setRole($this->user)
            ->setMessage( 'approval', 'approved', 'JACKPOT', "cancelled", true)
            ->exec();
    }

    public function approved($selectedOption)
    {
        event(new confirmWinningSelection($this->bettingRound,'APPROVED'));
    }

    public function cancelled($params)
    {
        event(new confirmWinningSelection($this->bettingRound,'CANCELLED'));
    }

    public function showCancelled()
    {
        if ($this->user->hasRole('Dealer Admin')) {
            return;
        }
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => ''])
            ->setRole($this->user)
            ->setMessage( 'alert_cancelled', '', '', '')
            ->exec();
    }

    public function showApproved()
    {
        if ($this->user->hasRole('Dealer Admin')) {
            return;
        }

        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => ''])
            ->setRole($this->user)
            ->setMessage( 'approved', 'showResult', '', '')
            ->exec();
    }

    public function showResult()
    {
        $selectedOption = session('selected_option');
        session()->forget('selected_option');
        redirect()->action([BettingRoundController::class, 'setResult'], ['result' => $selectedOption, 'bettingRound' => $this->bettingRound]);
    }

    public function execute($aParams)
    {
        $this->emit($aParams['type'], $aParams['params']);
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

    public function confirmSelection($selectedOptionId)
    {
        $selectedOption = BetOption::find($selectedOptionId);
        session()->put('selected_option', $selectedOptionId);
        $this->selectedOption = $selectedOption->name;
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption($this->selectedOption)
            ->setRole($this->user)
            ->setMessage( 'confirm', 'sendSelectionRequest', $this->selectedOption , '')
            ->exec();
    }

    public function sendSelectionRequest($params)
    {
        event(new confirmWinningSelection($this->bettingRound, $params));
    }

    public function render()
    {
        return view('livewire.'. $this->theme .'.select-winning-option')
            ->with('bettingRound', $this->bettingRound);
    }
}
