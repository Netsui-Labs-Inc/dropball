<?php

namespace App\Domains\Auth\Models\Traits\Relationship;

use App\Domains\Auth\Models\PasswordHistory;
use App\Domains\Auth\Models\User;
use App\Domains\Bet\Models\Bet;
use App\Domains\Hub\Models\Hub;

/**
 * Class UserRelationship.
 */
trait UserRelationship
{
    /**
     * @return mixed
     */
    public function passwordHistories()
    {
        return $this->morphMany(PasswordHistory::class, 'model');
    }

    public function bets()
    {
        return $this->hasMany(Bet::class);
    }

    public function referrals()
    {
        return $this->hasMany(User::class, 'referred_by');
    }

    public function masterAgent()
    {
        return $this->belongsTo(User::class, 'referred_by');
    }
}
