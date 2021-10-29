<?php

namespace App\Http\Livewire\Services\TransactionTable;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;

class HubsTransaction
{
    private $user;

    public function __construct()
    {
        $this->user = Auth()->user();
    }

    public function morphToPayable($query, $searchTerm = null)
    {
        return $query->whereHasMorph('payable', Hub::class, function ($query) use ($searchTerm) {
            $query->where('name', 'like', '%'. $searchTerm . '%');
        });

    }

}
