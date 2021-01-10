<?php

namespace App\Events;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BettingRoundBettingWindowUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public BettingRound $bettingRound;
    public BettingEvent $bettingEvent;
    /**
     * Create a new event instance.
     * @param BettingRound $bettingRound
     * @return void
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRound = $bettingRound;
        $this->bettingEvent = $bettingRound->bettingEvent;
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
