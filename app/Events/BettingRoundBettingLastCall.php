<?php

namespace App\Events;

use App\Domains\BettingRound\Models\BettingRound;
use App\Domains\BettingEvent\Models\BettingEvent;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BettingRoundBettingLastCall implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $bettingEventId;

    public $queue = 'broadcast';

    /**
     * BettingRoundBettingLastCall constructor.
     * @param int $bettingEventId
     */
    public function __construct( int $bettingEventId)
    {
        $this->bettingEventId = $bettingEventId;
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
