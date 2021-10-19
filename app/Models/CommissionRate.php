<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Model;

class CommissionRate extends Model
{
    protected $fillable = [
        'hub_id',
        'master_agent_id',
        'commission_rate',
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->hasMany(User::class);
    }

}
