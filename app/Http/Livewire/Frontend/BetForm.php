<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Bet\Services\PlaceBetService;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Livewire\Component;

class BetForm extends Component
{
    public $bettingEvent;

    public $bettingRound;

    public $amount = 0;

    public $userCanBet = false;

    public $userBet;

    public $user;

    public $balance = 0;

    public $poolMoney = 0;

    public $totalMeron = 0;

    public $totalWala = 0;

    public $meronPayout = 0;

    public $walaPayout = 0;

    public $meronRatio = 0;

    public $walaRatio = 0;

    protected $rules = [
        'amount' => 'required',
    ];

    public $betChoices = [
        100, 300, 500, 1000, 5000, 10000,
    ];

    public function mount($bettingEventId)
    {
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->bettingRound = $this->getLatestBettingRound();
        $this->user = auth()->user();
        $this->userCanBet = $this->canBetToBettingRound();
        $this->userBet = $this->bettingRound ? $this->bettingRound->userBet(auth()->user()->id) : null;
        $this->updateTotal();

        if ($this->userBet) {
            $this->amount = $this->userBet->bet_amount;
        }
        $this->balance = $this->user->balanceFloat;
        $this->setPayouts();
        $this->setRatio();
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBetPlaced" => 'updateBettingRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundBettingWindowUpdated" => 'updateBettingRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStatusUpdated" => 'updateBettingRound',
            "echo-private:event.{$this->bettingEvent->id}.play,BettingRoundStarting" => 'updateBettingRound',
            "amountUpdated" => 'setAmount',
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
        if (! $data['play']) {
            $this->bettingRound = null;

            return;
        }
        $this->bettingRound = BettingRound::find($data['play']['id']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->userBet = $this->bettingRound->userBet(auth()->user()->id);
        if (! $this->userBet) {
            $this->amount = null;
        }
        $this->userCanBet = $this->canBetToBettingRound();
        $this->updateTotal();
        $this->setPayouts();
        $this->setRatio();
        $this->balance = $this->user->balanceFloat;
    }

    public function canBetToBettingRound()
    {
        if (! $this->bettingRound) {
            return false;
        }

        if ($this->bettingRound->status === 'ongoing' || ! $this->bettingRound->is_betting_open) {
            return false;
        }

        return $this->bettingRound->is_betting_open && ! $this->bettingRound->userBet(auth()->user()->id);
    }


    public function betMeron(PlaceBetService $placeBetService)
    {
        $this->validate($this->rules);

        try {
            $this->validateBalance();
            $placeBetService
                ->setBettingRound($this->bettingRound)
                ->setBet('meron')
                ->setAmount((int) $this->amount)
                ->setBettor(auth()->user())
                ->place();
            $this->addToPoolMoney();
            $this->alert('meron');
        } catch (\Exception $e) {
            $this->addError('amount', "Insufficient balance");
        }
    }

    public function betWala(PlaceBetService $placeBetService)
    {
        $this->validate($this->rules);

        try {
            $this->validateBalance();
            $placeBetService
                ->setBettingRound($this->bettingRound)
                ->setBet('wala')
                ->setAmount((int) $this->amount)
                ->setBettor(auth()->user())
                ->place();

            $this->addToPoolMoney();
            $this->alert('wala');
        } catch (\Exception $e) {
            $this->addError('amount', "Insufficient balance");
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
        $this->user->forceTransferFloat($this->bettingRound, $this->amount, ['play' => $this->bettingRound->id]);

        $this->poolMoney = $this->bettingRound->balanceFloat;

        $this->balance = $this->user->balanceFloat;
    }

    public function alert($bet)
    {
        switch ($bet) {
            case 'wala':
                $class = 'text-success';

                break;
            default:
                $class = 'text-danger';

                break;
        }
        $this->emit('swal:modal', [
            'icon' => 'success',
            'title' => "BettingRound #".$this->bettingRound->queue,
            'text' => "<h1>You've placed a bet worth of <strong>".number_format($this->amount). "</strong> to <strong class='$class'>".strtoupper($bet). "</strong>  </h1><h1>Good luck!</h1>",
        ]);
    }

    public function updateTotal()
    {
        if ($this->bettingRound) {
            $this->totalMeron = $this->bettingRound->totalBetType('meron');
            $this->totalWala = $this->bettingRound->totalBetType('wala');
        }
    }

    public function setPayouts($amountPreview = 0)
    {
        if ($this->amount) {
            $betMeron = $this->totalMeron + $amountPreview;
            $betWala = $this->totalWala + $amountPreview;
            $meronPayout = $this->totalWala ? ($betMeron * $this->amount) / $this->totalWala : 0;
            logger("MERON PAYOUT: $betMeron * $this->amount /  $this->totalWala = $meronPayout");
            $this->meronPayout = $meronPayout - ($meronPayout * .10);

            $walaPayout = $this->totalMeron ? ($betWala * $this->amount) / $this->totalMeron : 0;
            logger("WALA PAYOUT : $betWala * $this->amount /  $this->totalMeron = $walaPayout");

            $this->walaPayout = $walaPayout - ($walaPayout * .10);

            return;
        }
        $this->resetBets();
    }

    public function setRatio()
    {
        $totalBets = $this->totalMeron + $this->totalWala;
        if ($totalBets) {
            $this->meronRatio = ($this->totalMeron / $totalBets) * 100;
            $this->walaRatio = ($this->totalWala / $totalBets) * 100;
        }
    }

    public function resetBets()
    {
        $this->meronRatio = 0;
        $this->walaRatio = 0;
        $this->meronPayout = 0;
        $this->walaPayout = 0;
    }
    public function render()
    {
        return view('livewire.frontend.bet-form')
            ->with('play', $this->bettingRound)
            ->with('user', auth()->user())
            ->with('userBet', $this->userBet);
    }
}
