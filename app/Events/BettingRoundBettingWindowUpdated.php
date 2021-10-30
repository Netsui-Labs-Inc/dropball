<?php

namespace App\Events;

use App\Domains\Bet\Models\Bet;
use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BettingRoundBettingWindowUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public int $bettingEventId;
    public int $bettingRoundId;

    public $queue = 'broadcast';

    /**
     * BettingRoundBettingWindowUpdated constructor.
     * @param BettingRound $bettingRound
     */
    public function __construct(BettingRound $bettingRound)
    {
        $this->bettingEventId = $bettingRound->bettingEvent->id;
        $this->bettingRoundId = $bettingRound->id;
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
