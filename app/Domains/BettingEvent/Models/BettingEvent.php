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
 *
 * @property int $id
 * @property string $uuid
 * @property string $name
 * @property string|null $description
 * @property string $schedule
 * @property int|null $bet_admin_id
 * @property string|null $stream_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read User|null $admin
 * @property-read \Illuminate\Database\Eloquent\Collection|BettingRound[] $bettingRounds
 * @property-read int|null $betting_rounds_count
 * @method static \Database\Factories\BettingEventFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent onDate($date)
 * @method static \Illuminate\Database\Query\Builder|BettingEvent onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent query()
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent today($timezone = null)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent uuid($uuid)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereBetAdminId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereStreamUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BettingEvent whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|BettingEvent withTrashed()
 * @method static \Illuminate\Database\Query\Builder|BettingEvent withoutTrashed()
 * @mixin \Eloquent
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
