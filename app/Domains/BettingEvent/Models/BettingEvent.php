<?php

namespace App\Domains\BettingEvent\Models;

use Database\Factories\BettingEventFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use \Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Traits\Uuid;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Domains\BettingEvent\Models\BettingEvent
 */
class BettingEvent extends Model
{
    use SoftDeletes, Uuid, HasFactory;

    protected $table = 'betting_events';

    protected $fillable = [
        'uuid',
        'name',
        'description',
        'schedule',
        'bet_admin_id',
        'stream_url',
    ];

    public function admin()
    {
        return $this->belongsTo(User::class, 'bet_admin_id');
    }

    public function bettingRounds()
    {
        return $this->hasMany(BettingRound::class);
    }

    public function jackpots()
    {
        return $this->hasMany(Jackpot::class);
    }

    public function activeJackpot()
    {
        return $this->jackpots()->where('status', 'active')->first();
    }

    public function latestBettingRound($status = 'upcoming')
    {
        return $this->bettingRounds()->latest()->where('status', $status)->first();
    }

    public function upcomingBettingRound()
    {
        return $this->bettingRounds()->orderBy('queue')->where('status', 'upcoming')->latest();
    }
    public function activeBettingRound()
    {
        return $this->bettingRounds()->orderBy('queue')->whereNotIn('status', ['ended','cancelled'])->latest();
    }

    public function scopeToday($query, $timezone = null)
    {
        return $this->scopeOnDate($query, Carbon::now($timezone)->format('Y-m-d'));
    }

    public function scopeOnDate($query, $date)
    {
        return $query->where('schedule', $date);
    }

    protected static function newFactory()
    {
        return BettingEventFactory::new();
    }
}
