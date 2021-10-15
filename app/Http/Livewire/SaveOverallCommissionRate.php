<?php

namespace App\Http\Livewire;

use App\Models\OverallCommissionRate;
use Carbon\Carbon;
use Livewire\Component;

class SaveOverallCommissionRate extends Component
{
  
    public $overAllCommissionRates;
    public $disabled = true;
    public $selectedRate;
    public $overallCommissionRate;
    public function mount()
    {
        $this->overallCommissionRate = OverallCommissionRate::query()
                                        ->get()
                                        ->first();
        $currentOverallCommissionRate = config('dropball.default_overall_commission_rate') . '%';
        if($this->overallCommissionRate) {
            $currentOverallCommissionRate = $this->overallCommissionRate->rate;
        }

        $this->overAllCommissionRates[0] = "$currentOverallCommissionRate%";
       
        foreach (range(1, 99) as $number) {
            $this->overAllCommissionRates[$number] = "$number%";
        }
    
    }

    public function enableButton()
    {
        $this->disabled = false;
    }

    public function save()
    {
        $this->disabled = true;
        if($this->overallCommissionRate)
        {
            $this->overallCommissionRate->rate = $this->selectedRate;
            $this->overallCommissionRate->updated_at = Carbon::now()->toDateTimeString();
            $this->overallCommissionRate->save();
            return;
        }

        $this->overallCommissionRate = OverallCommissionRate::create([
            'rate' => $this->selectedRate
        ]);

    }

    public function render()
    {
        return view('livewire.save-overall-commission-rate');
    }
}
