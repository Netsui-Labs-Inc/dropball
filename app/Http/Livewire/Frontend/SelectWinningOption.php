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

class SelectWinningOption extends Component
{
    use setMessageAndAction;
    public $option;
    public $theme;
    public $bettingEvent;
    public $bettingRound;
    public ?User $user;
    public $modelBettingRound;
    private $setMessageAndAction;
    private $selectedOption;

    public function mount($option,
                          $bettingEventId,
                          $theme = 'default',
                          BettingRound $bettingRound
    ){
        $this->theme = $theme;
        $this->option = $option;
        $this->modelBettingRound = $bettingRound;
        $this->user = auth()->user();
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
    }

    public function getListeners()
    {
        return [
            "echo-private:event.{$this->bettingEvent->id}_PULA.play,confirmWinningSelection" => 'doNotifPula',
            "echo-private:event.{$this->bettingEvent->id}_CANCELLED.play,confirmWinningSelection" => 'showCancelled',
            "echo-private:event.{$this->bettingEvent->id}_APPROVED.play,confirmWinningSelection" => 'showApproved',
            'confirmSelection'         => 'confirmSelection',
            'sendSelectionRequest'         => 'sendSelectionRequest',
            'cancelled' => 'cancelled',
            'approved' => 'approved',
            'showResult' => 'showResult'
        ];
    }

    public function doNotifPula() {
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption('PULA')
            ->setRole($this->user)
            ->setMessage( 'approval', 'approved', 'PULA', "cancelled", true)
            ->exec();
    }

    public function doNotifPuti() {
        $this->confirmWinningSelection('PUTI');
    }
    public function doNotifJackpot() {
        $this->confirmWinningSelection('JACKPOT');
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
        $latestBettingRount = $this->bettingRound['id'];
        $this->bettingRound->payout = '1.3';
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

    public function confirmSelection($selectedOption)
    {
        session()->put('selected_option', $selectedOption);
        $this->selectedOption = $selectedOption;
        $this->initialize([$this->BET_ADMIN => 'confirm', $this->DEALER_ADMIN => 'confirm'])
            ->setOption($selectedOption)
            ->setRole($this->user)
            ->setMessage( 'confirm', 'sendSelectionRequest', $selectedOption , '')
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
