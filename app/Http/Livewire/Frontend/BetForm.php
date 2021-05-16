<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Actions\CalculateOddsAction;
use App\Domains\Bet\Models\BetOption;
use App\Domains\Bet\Services\PlaceBetService;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class BetForm extends Component
{
    public $bettingEvent;

    /** @var BettingRound */
    public $bettingRound;

    public $amount;

    public $userCanBet = false;

    public $userBets;

    public $user;

    public $balance = 0;

    public $poolMoney = 0;

    public $betOptions = [];

    public $betColor;

    public $payout = 0;

    public $totalBetAmount = 0;

    public $theme = 'default';

    protected $rules = [
        'amount' => 'required|numeric|min:50',
    ];

    public $betChoices = [
        50, 100, 300, 500, 1000, 5000, 10000,
    ];
    public $payouts = [
        'pula' => 0,
        'puti' => 0,
        'betPayout' => 0,
    ];

    public function mount($bettingEventId, $theme = 'default')
    {
        $this->theme = $theme;
        $this->betOptions = BetOption::where('hidden', false)->get();
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
        $this->user = auth()->user();
        $this->userCanBet = $this->canBetToBettingRound();
        $this->userBets = $this->bettingRound ? $this->bettingRound->userBets(auth()->user()->id)->get() : null;
        if ($this->bettingRound) {
            if ($this->userBets->isNotEmpty()) {
                $this->amount = $this->userBets->sum('bet_amount');
            }
        }
        $this->balance = $this->user->balanceFloat;
        $this->setPayouts();
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBetPlaced" => 'bettingRoundBetPlaced',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBettingWindowUpdated" => 'updateBettingRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStatusUpdated" => 'updateBettingRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting" => 'startNewRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundResultUpdated" => 'updateBalance',
            "amountUpdated" => 'setAmount',
            "placeBet" => 'placeBet',
            "confirmBet" => 'confirmBet',
        ];
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

    public function setAmount($amount)
    {
        try {
            $this->amount = $amount;
            $this->validateBalance();
        } catch (\Exception $e) {
            $this->addError('amount', "Insufficient balance".$e->getMessage());
        }
    }

    public function updateBettingRound($data)
    {
        if (! $data['bettingRound']) {
            $this->bettingRound = null;

            return;
        }
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->userBets = $this->bettingRound->userBets(auth()->user()->id)->get();
        if ($this->userBets->isEmpty()) {
            $this->amount = null;
        }
        $this->userCanBet = $this->canBetToBettingRound();
        $this->setPayouts();
        $this->balance = $this->user->balanceFloat;
    }

    public function updateBetsTotal()
    {
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->userBets = $this->bettingRound->userBets(auth()->user()->id)->get();
        $this->setPayouts();
        $this->balance = $this->user->balanceFloat;
    }

    public function bettingRoundBetPlaced($data)
    {
        $this->setPayouts();
        $this->emit('place-bets-'.$data['bet']);
    }

    public function startNewRound($data)
    {
        if (! $data['bettingRound']) {
            $this->bettingRound = null;

            return;
        }
        $this->bettingRound = BettingRound::find($data['bettingRound']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->balance = auth()->user()->balanceFloat;
        $this->resetBets();
    }

    public function updateBalance($data)
    {
        if (! $data['bettingRound']) {
            $this->bettingRound = null;

            return;
        }

        $this->balance = auth()->user()->balanceFloat;
    }

    public function canBetToBettingRound()
    {
        if (! $this->bettingRound) {
            return false;
        }

        if ($this->bettingRound->status === 'ongoing' || ! $this->bettingRound->is_betting_open) {
            return false;
        }

        if ($this->bettingRound->userBet(auth()->user()->id)) {
            return false;
        }

        return true;
    }

    public function placeBet(PlaceBetService $placeBetService, $betOption)
    {
        $this->validate($this->rules);
        $bet = BetOption::find($betOption['id']);

        try {
            $this->validateBalance();
            $placeBetService
                ->setBettingRound($this->bettingRound)
                ->setBet($bet)
                ->setAmount((int) $this->amount)
                ->setBettor(auth()->user())
                ->place();

            $this->addToPoolMoney();
            $this->userCanBet = $this->canBetToBettingRound();
            $this->alert($bet);
            $this->updateBetsTotal();
        } catch (\Exception $e) {
            logger($e->getTraceAsString());
            $this->addError('amount', $e->getMessage());
        }
    }

    public function validateBalance()
    {
        if ($this->amount > $this->user->balanceFloat) {
            throw new \Exception("Insufficient balance");
        }
        $this->resetValidation();
    }

    public function addToPoolMoney()
    {
        //$this->user->forceTransferFloat($this->bettingRound, $this->amount, ['bettingRound' => $this->bettingRound->id]);

        $this->poolMoney = $this->bettingRound->balanceFloat;

        $this->balance = $this->user->balanceFloat;
    }

    public function alert(BetOption $bet)
    {
        $color = $bet->id == 2 ? '#8898aa' : $bet->color;

        $this->emit('swal:modal', [
            'icon' => 'success',
            'title' => "Betting Round #".$this->bettingRound->queue,
            'text' => "<h1>You've placed a bet worth of <strong class='text-success'>".number_format($this->amount). "</strong> to <strong style='color:{$color}'>".strtoupper($bet->name). "</strong>  </h1><h1>Good luck!</h1>",
        ]);
    }

    public function confirmBet($betOptionId)
    {
        $betOption = BetOption::find($betOptionId);

        $this->validate($this->rules);
        $color = $betOption->color == '#FFFFFF' ? "#8898aa" : $betOption->color;
        $this->emit('swal:confirm', [
            'icon' => 'info',
            'title' => "Bet Confirmation",
            'text' => "<h1>Total Bet Amount <strong class='text-success'>".number_format($this->amount). "</strong></h1><h1><strong style='color:{$color}'>".strtoupper($betOption->name). "</strong> </h1>",
            'confirmText' => 'CONFIRM BET ON '.strtoupper($betOption->name),
            'showCancelButton' => true,
            'method' => 'placeBet',
            'params' => $betOption,
        ]);
    }

    public function setPayouts($amountPreview = 0)
    {
        if (! $this->bettingRound) {
            return;
        }
        $payouts = (new CalculateOddsAction)($this->bettingRound);
        $this->payouts = $payouts;
    }

    public function resetBets()
    {
        $this->totalBetAmount = 0;
        $this->amount = null;
        $this->userBets = null;
        $this->payouts = [
            'pula' => 0,
            'puti' => 0,
            'betPayout' => 0,
        ];
    }

    public function render()
    {
        return view('livewire.'.$this->theme.'.bet-form')
            ->with('bettingRound', $this->bettingRound)
            ->with('user', auth()->user())
            ->with('userBets', $this->userBets);
    }
}
