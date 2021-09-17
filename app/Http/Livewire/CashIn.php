<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CashIn extends Component
{
    public $amount;

    public function render()
    {
        return view('livewire.cash-in');
    }
}
