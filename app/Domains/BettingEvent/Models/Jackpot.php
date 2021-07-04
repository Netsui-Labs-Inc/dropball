<?php

namespace App\Domains\BettingEvent\Models;

use App\Domains\BettingRound\Models\BettingRound;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jackpot extends Model
{
    use HasFactory;

    protected $fillable = [
        'betting_round_id',
        'betting_event_id',
        'prize',
        'status',
    ];

    public function bettingEvent()
    {
        return $this->belongsTo(BettingEvent::class, 'betting_event_id');
    }

    public function bettingRound()
    {
        return $this->belongsTo(BettingRound::class, 'betting_round_id');
    }

    public function winners()
    {
        return $this->hasMany(JackpotWinner::class, 'jackpot_id');
    }
}
