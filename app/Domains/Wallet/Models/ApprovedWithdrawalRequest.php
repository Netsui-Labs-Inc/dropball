<?php

namespace App\Domains\Wallet\Models;

use App\Domains\Auth\Models\User;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovedWithdrawalRequest extends Model
{
    use HasFactory;
    protected $fillable = [
        'transaction_id',
        'approved_by',
        'reference_no',
        'channel',
        'date_of_transfer'
    ];

    public function approver()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

}
