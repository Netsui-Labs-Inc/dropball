<?php

namespace App\Events;

use App\Domains\Bet\Models\Bet;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class BettingRoundBetPlaced implements ShouldBroadcast, ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels, InteractsWithQueue;

    public int $bettingEventId;
    public int $bettingRoundId;
    public string $bet;

    public $queue = 'broadcast';

    /**
     * BettingRoundBetPlaced constructor.
     * @param Bet $bet
     */
    public function __construct(Bet $bet)
    {
        $this->bettingEventId = $bet->bettingRound->bettingEvent->id;
        $this->bettingRoundId = $bet->bettingRound->id;
        $this->bet = $bet->bet;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('event.'.$this->bettingEventId.'.play');
    }
}
