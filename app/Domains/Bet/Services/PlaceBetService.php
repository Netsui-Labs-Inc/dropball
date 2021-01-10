<?php

namespace App\Domains\Bet\Services;

use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBetPlaced;

class PlaceBetService
{
    public BettingRound $bettingRound;

    public string $bet;

    public User $bettor;

    public int $amount;

    /**
     * @param BettingRound $bettingRound
     */
    public function setBettingRound(BettingRound $bettingRound): self
    {
        $this->bettingRound = $bettingRound;

        return $this;
    }

    /**
     * @param string $bet
     */
    public function setBet(string $bet): self
    {
        $this->bet = $bet;

        return $this;
    }

    /**
     * @param User $bettor
     */
    public function setBettor(User $bettor): self
    {
        $this->bettor = $bettor;

        return $this;
    }

    /**
     * @param int $amount
     */
    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * @return BettingRound
     * @throws \Exception
     */
    public function place()
    {
        // validate play
        if (! $this->bettingRound->is_betting_open) {
            throw new \Exception("Betting window is not open");
        }

        if ($this->bettingRound->userBet($this->bettor->id)) {
            throw new \Exception("You've already placed your bet to this play #".$this->bettingRound->id);
        }

        if ($this->amount < 100) {
            throw new \Exception("Invalid bet amount");
        }

        $this->bettingRound->bets()->create([
            'user_id' => $this->bettor->id,
            'bet_amount' => $this->amount,
            'bet' => $this->bet,
        ]);

        event(new BettingRoundBetPlaced($this->bettingRound, $this->bettor));

        return $this->bettingRound;
    }
}
