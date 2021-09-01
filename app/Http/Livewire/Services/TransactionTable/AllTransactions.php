<?php

namespace App\Http\Livewire\Services\TransactionTable;

use App\Domains\Hub\Models\Hub;
use Bavix\Wallet\Models\Transaction;
use Illuminate\Http\Request;

class AllTransactions
{
    private $userType;

    public function __construct($userType)
    {
        $this->userType = $userType;
    }

    public function morphToPayable($query, $searchTerm = null)
    {
        $userType = $this->userType;
        if ($userType === 'Hub')
            return $query->whereHasMorph('payable', Hub::class, function ($query) use ($searchTerm) {
                $query->where('name', 'like', '%'. $searchTerm . '%');
            });

        return $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) use ($searchTerm, $userType) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
            $query->whereHas('roles', function ($query) use($userType) {
                return $query->where('name', $userType);
            });
            return $query;
        });
    }

}
