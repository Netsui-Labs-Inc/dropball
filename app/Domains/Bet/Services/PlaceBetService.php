<?php

namespace App\Domains\Bet\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBetPlaced;

class PlaceBetService
{
    public BettingRound $bettingRound;

    public BetOption $bet;

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
     * @param BetOption $bet
     */
    public function setBet(BetOption $bet): self
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

        if ($this->amount < 100) {
            throw new \Exception("Invalid bet amount");
        }

        $this->bettingRound->bets()->create([
            'user_id' => $this->bettor->id,
            'bet_amount' => $this->amount,
            'bet' => $this->bet->id,
        ]);

        event(new BettingRoundBetPlaced($this->bettingRound, $this->bettor));

        return $this->bettingRound;
    }
}
