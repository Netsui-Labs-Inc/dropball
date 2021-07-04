<?php

namespace App\Domains\BettingEvent\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JackpotWinner extends Model
{
    use HasFactory;

    protected $fillable = [
        'jackpot_id',
        'user_id',
        'prize',
    ];

    public function player()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
