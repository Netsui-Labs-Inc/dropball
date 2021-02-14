<?php

namespace App\Models\Traits;

use App\Domains\Bet\Models\BetCommission;

/**
 * Trait HasCommission.
 */
trait HasBetCommission
{
    public function commissions()
    {
        return $this->morphMany(BetCommission::class, 'commission');
    }
}
