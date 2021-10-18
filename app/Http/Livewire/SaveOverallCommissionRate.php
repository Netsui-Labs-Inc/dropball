<?php

namespace App\Http\Livewire;

use App\Models\OverallCommissionRate;
use Carbon\Carbon;
use Livewire\Component;

class SaveOverallCommissionRate extends Component
{
  
    public $overAllCommissionRatesWholeNumber;
    public $overAllCommissionRatesDecimalNumber;
    public $disabled = true;
    public $selectedRateWholeNumber;
    public $selectedRateDecimalNumber;
    public $overallCommissionRate;
    public $overallCommissionRateValue;
    public $editMode;
    public function mount()
    {
        $this->overallCommissionRate= OverallCommissionRate::query()->first();
        $this->overallCommissionRateValue = config('dropball.default_overall_commission_rate') . '%';
        if($this->overallCommissionRate) {
            $this->overallCommissionRateValue = $this->overallCommissionRate->rate;
        }
     
        foreach (range(0, 10) as $number) {
            $this->overAllCommissionRatesWholeNumber[$number] = $number;
        }

       $this->setDecimal();

    }

    private function setDecimal()
    {
        foreach (range(0, 9) as $number) {
            $this->overAllCommissionRatesDecimalNumber["0.$number"] = ".$number";     
        }
    }

    public function adjustDecimal()
    {
        if($this->selectedRateWholeNumber === '10')
        {
            $this->overAllCommissionRatesDecimalNumber = null;
            $this->overAllCommissionRatesDecimalNumber["0.0"] = ".0";
            return;
        }

        $this->setDecimal();

    }

    public function edit()
    {
        $this->editMode = true;
    }

    public function cancel()
    {
        $this->editMode = false;
    }

    public function enableButton()
    {
        $this->disabled = false;
    }

    public function save()
    {
        $this->editMode = false;
        $newOverallRate = $this->selectedRateWholeNumber + $this->selectedRateDecimalNumber;
        if($this->validateRate($newOverallRate ))
        {
            return;
        }

        if($this->overallCommissionRate)
        {
            $this->overallCommissionRate->rate = $newOverallRate;
            $this->overallCommissionRate->updated_at = Carbon::now()->toDateTimeString();
            $this->overallCommissionRate->save();
            $this->overallCommissionRateValue = $this->overallCommissionRate->rate;
            return;
        }

        $newRate = $this->overallCommissionRate = OverallCommissionRate::create([
            'rate' => $this->selectedRateWholeNumber + $this->selectedRateDecimalNumber
        ]);
        $this->overallCommissionRateValue = $newRate->rate;

    }

    private function validateRate($newOverallRate)
    {
        if($newOverallRate > config('dropball.max_overall_commission') 
        || $newOverallRate <= 0
        ){
            return true;
        }

    }

    public function render()
    {
        return view('livewire.save-overall-commission-rate');
    }
}
