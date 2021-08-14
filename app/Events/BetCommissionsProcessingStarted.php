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

class BetCommissionsProcessingStarted implements ShouldBroadcast, ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels, InteractsWithQueue;

    public $queue = 'broadcast';

    public $betId;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Bet $bet)
    {
        $this->betId = $bet->id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('bet.'.$this->betId.'.status');
    }
}
