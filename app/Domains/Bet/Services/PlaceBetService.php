<?php

namespace App\Domains\Bet\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\BetOption;
use App\Domains\BettingRound\Models\BettingRound;
use App\Events\BettingRoundBetPlaced;
use Faker\Factory;

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

        if ($this->amount < 50) {
            throw new \Exception("Invalid bet amount");
        }

        $bet = $this->bettingRound->bets()->create([
            'user_id' => $this->bettor->id,
            'bet_amount' => $this->amount,
            'bet' => $this->bet->id,
        ]);

        event(new BettingRoundBetPlaced($this->bettingRound, $this->bettor, strtolower($bet->option->name)));

        logger("BettingRound#{$this->bettingRound->id} User#{$bet->user_id} {$bet->user->name} placed a bet to {$bet->option->name} worth {$bet->bet_amount} ");

        $this->setPoolMoney($bet);

        return $this->bettingRound;
    }

    private function setPoolMoney($userBet)
    {
        $faker = Factory::create();

        $bet = $faker->randomElement(['pula', 'puti']);

        $meta = $this->bettingRound->meta;

        $multiplier = $faker->randomNumber(1);
        $choice = $faker->randomElement([ 50, 100, 300, 500, 1000, 5000, 10000]);

        $betAmount = $choice * $multiplier;
        $userBetColor = strtolower($userBet->option->name);

        if (($meta[$bet] + $betAmount) <= $meta['win-pool'] && $faker->boolean && $userBetColor != $bet) {
            $meta[$bet] = $meta[$bet] + $betAmount;
            $this->bettingRound->update(['meta' => $meta]);
            event(new BettingRoundBetPlaced($this->bettingRound, $this->bettor, $bet));
        }

    }
}
