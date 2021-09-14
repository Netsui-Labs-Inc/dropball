<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CashIn extends Component
{
    public $amount;
    public function mount()
    {

    }

    public function cashIn($channel)
    {
        $this->redirect('/cash-in/' .$channel.'/'.$this->amount);
    }

    public function render()
    {
        return view('livewire.cash-in');
    }
}
