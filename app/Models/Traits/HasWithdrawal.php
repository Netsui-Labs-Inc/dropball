<?php

namespace App\Models\Traits;

use App\Domains\Wallet\Models\Withdrawal;

trait HasWithdrawal {

    public function withdrawals()
    {
        return $this->hasMany(Withdrawal::class,  'user_id');
    }

}
