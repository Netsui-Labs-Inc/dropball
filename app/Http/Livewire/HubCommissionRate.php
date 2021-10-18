<?php

namespace App\Http\Livewire;

use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Models\OverallCommissionRate;
use Livewire\Component;

class HubCommissionRate extends Component
{
    public $wholeNumberRates;
    public $wholeNumber;
    public $decimalNumberRates;
    public $selectedWholeNumber;
    public $selectedDecimalNumber;
    public $overallCommissionRate;
    public $edit;
    public $editMode;
    public $hubCommissionRate;
    public $hub;
    public $defaultWholeNumber;
    public $defaultDecimalNumber;
    public function mount($edit = false, $hub = null)
    {
        $this->edit = $edit;
        $this->hub = $hub;
        $this->overallCommissionRate = OverallCommissionRate::query()->first()->rate;
        $this->showHubRate();
        $numbers = $this->setNumbers($this->overallCommissionRate);
        $this->setSelection($numbers['whole_number'], $numbers['decimal']);
    }

    private function showHubRate()
    {
        if($this->edit === true)
        {
            $hubCommission = new CommissionRatesConversion($this->hub, true);
            $hubCommissionRate = $hubCommission->convertHub()->hubCommissionRate();
            $this->hubCommissionRate = number_format($hubCommissionRate, 1);
            $numbers = $this->setNumbers($this->hubCommissionRate);
            $this->defaultWholeNumber  = $numbers['whole_number'];
            $this->defaultDecimalNumber = $numbers['decimal'] / 10;
        }
    }

    public function edit()
    {
        $this->edit = false;
        $this->editMode = true;
    }

    public function cancel()
    {
        $this->edit = true;
        $this->editMode = false;
    }

    private function setNumbers($rate)
    {
        $wholeNumber = floor($rate);
        $decimal = number_format(abs($rate - $wholeNumber) * 10);
        return [
            'whole_number' => $wholeNumber,
            'decimal' => $decimal
        ];
    }

    public function setSelection($wholeNumber, $decimal)
    {
        
        if($decimal === 0)
        {
            $wholeNumber -= 1;
            $this->setDecimal(0);
        }
        $this->wholeNumber = $wholeNumber;
        $this->setDecimal();
        foreach (range(0, $wholeNumber) as $number) {
            $this->wholeNumberRates[$number] = $number;
        }
    }

    public function setDecimal($decimal = 9, $starNumber = 0)
    {
        $this->decimalNumberRates = null;
        foreach (range($starNumber, $decimal) as $number) {
            $this->decimalNumberRates["0.$number"] = ".$number";
        }
    }

    public function adjustDecimal()
    {
        if((int) $this->selectedWholeNumber === $this->wholeNumber)
        {       
            $numbers = $this->setNumbers($this->overallCommissionRate);
            $this->setDecimal($numbers['decimal'] - 1);
            return;
        }
        if($this->selectedWholeNumber === "0")
        {
            $this->setDecimal(9, 3);
            return;
        }
        $this->setDecimal();

    }

    public function render()
    {
        
        return view('livewire.hub-commission-rate');
    }
}
