<?php

namespace App\Domains\BettingEvent\Models;

use \Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
use App\Domains\BettingRound\Models\BettingRound;
use App\Models\Traits\Uuid;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;

class BettingEvent extends Model
{
    use SoftDeletes, Uuid;

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
}
