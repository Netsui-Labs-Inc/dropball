<?php

namespace App\Http\Livewire;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Livewire\Component;

class CashIn extends Component
{
    public $amount = 102;
    public $referenceNumber = '123-2321';
    public function createInvoice(Request $request)
    {

        $invoice = Http::withBasicAuth(config('cash-in.CASH_IN_API_KEY'), '')
            ->withBody(json_encode([
                'transaction_reference_number' => $this->referenceNumber,
                'amount' => $this->amount,
                "cash_in" => "Invoice Testing"
            ]), 'json')
            ->post(config('cash-in.CASH_IN_URL'));
            dd($invoice->json());
    }

    public function render()
    {
        return view('livewire.cash-in');
    }
}
