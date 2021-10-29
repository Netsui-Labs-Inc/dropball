<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OverallCommissionRate extends Model
{
    protected $fillable = [
        'rate',
        'created_at',
        'updated_at'
    ];
}
