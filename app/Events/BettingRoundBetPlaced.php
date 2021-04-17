<?php

namespace App\Events;

use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class BettingRoundBetPlaced implements ShouldBroadcast, ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels, InteractsWithQueue;

    public BettingRound $bettingRound;
    public BettingEvent $bettingEvent;
    public string $bet;
    /**
     * Create a new event instance.
     * @param BettingRound $bettingRound
     * @return void
     */
    public function __construct(BettingRound $bettingRound, User $user, $bet)
    {
        $this->bettingRound = $bettingRound;
        $this->user = $user;
        $this->bettingEvent = $bettingRound->bettingEvent;
        $this->bet = $bet;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('event.'.$this->bettingEvent->id.'.play');
    }
}
