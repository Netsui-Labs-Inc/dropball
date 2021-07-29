<?php

namespace App\Http\Livewire\Frontend;

use App\Domains\Auth\Models\User;
use App\Domains\BettingEvent\Models\BettingEvent;
use App\Domains\BettingEvent\Models\Jackpot;
use App\Domains\BettingRound\Models\BettingRound;
use Livewire\Component;

class JackpotTab extends Component
{
    /** @var BettingEvent */
    public $bettingEvent;

    /** @var BettingRound */
    public $bettingRound;

    /** @var Jackpot */
    public $jackpot;

    /** @var User */
    public $user;

    public $prize = 0;

    public $theme = 'default';

    public $topPlayers = [];

    public function mount($bettingEventId, $theme = 'default')
    {
        $this->theme = $theme;
        $this->bettingEvent = BettingEvent::find($bettingEventId);
        $this->setBettingEventAndJackpot();
    }

    public function setBettingEventAndJackpot()
    {
        $this->bettingRound = $this->getLatestBettingRound();
        $this->user = auth()->user();
        if($this->bettingEvent->activeJackpot) {
            $this->jackpot = $this->bettingEvent->activeJackpot;
            $this->prize = $this->jackpot->prize;
            $this->topPlayers = $this->getTopPlayers($this->bettingEvent);
        }
    }

    public function getTopPlayers(BettingEvent $bettingEvent)
    {
        $minStreak = config('dropball.jackpot.minimum_streak');
        return User::where('last_event_id', $bettingEvent->id)
            ->where('winning_streak', '>=',$minStreak)
            ->orderBy('winning_streak', 'desc')
            ->get();
    }

    public function getListeners()
    {
        if (is_array($this->bettingEvent)) {
            $this->bettingEvent = BettingEvent::find($this->bettingEvent['id']);
        }

        return [
            "echo-private:event.{$this->bettingEvent->id}.play,JackpotPoolMoneyUpdated" => 'updatePoolMoneyHandler',
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

    public function updatePoolMoneyHandler($data)
    {
        if (!$data['bettingRoundId']) {
            $this->bettingRound = null;

            return;
        }

        $this->bettingRound = BettingRound::find($data['bettingRoundId']);
        $this->bettingEvent = $this->bettingRound->bettingEvent;
        $this->setBettingEventAndJackpot();
    }


    public function render()
    {
        return view('livewire.'.$this->theme.'.jackpot')
            ->with('bettingRound', $this->bettingRound)
            ->with('bettingEvent', $this->bettingEvent)
            ->with('user', auth()->user());
    }
}
