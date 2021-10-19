<?php

namespace App\Events;

use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class BettingRoundResultUpdated implements ShouldBroadcast, ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels, InteractsWithQueue;

    public int $bettingRoundId;
    public int $bettingEventId;

    public $queue = 'broadcast';

    /**
     * Create a new event instance.
     * @param BettingRound $bettingRound
     * @return void
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingRoundId = $bettingRound->id;
        $this->bettingEventId = $bettingRound->bettingEvent->id;
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
