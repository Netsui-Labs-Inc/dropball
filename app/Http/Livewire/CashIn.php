<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CashIn extends Component
{
    public $amount;
    public $action;

    public function redirectToPaymentOrder($channel)
    {
       dd($this->amount);
    }

    public function render()
    {
        return view('livewire.cash-in');
    }

}
