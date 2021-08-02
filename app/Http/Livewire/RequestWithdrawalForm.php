<?php

namespace App\Http\Livewire;

use Livewire\Component;

class RequestWithdrawalForm extends Component
{
    public $isAccountNameRequired = false;
    private $theme = 'default';
    public $walletBalance;
    public $channel;
    public $accountName = 'N/A';
    public function mount($theme = 'default', $walletBalance)
    {
        $this->theme =$theme;
        $this->walletBalance = $walletBalance;
    }

    public function change()
    {
        if ($this->channel === 'gcash')
        {
            $this->accountName = 'N/A';
            $this->isAccountNameRequired = false;
            return;
        }
        $this->accountName = '';
        $this->isAccountNameRequired = true;
        return;
    }

    public function render()
    {
        return view('livewire.default.request-withdrawal-form-content');
    }
}
