<?php

namespace App\Domains\CommissionRate\Http\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;

class CommissionRateService
{
 
    public function __construct()
    {
        
    }

    public function setRates($commissionRate, $wholeNumber)
    {
      
        $decimal = $commissionRate - $wholeNumber;

        if($decimal == 0)
        {
            $wholeNumber -= 1;
        }

        foreach (range(0, $wholeNumber) as $number) {
            $wholeNumberRate[$number] = $number;
        }
        $decimalNumberRate = $this->setDecimal();
        return ['whole_number_rate' => $wholeNumberRate, 'decimal_number_rate' => $decimalNumberRate];

    }

    private function setDecimal($decimal = 9)
    {
        foreach (range(0, $decimal) as $number) {
            $decimalNumberRate["0.$number"] = ".$number";
        }

       return $decimalNumberRate;

    }

    public function checkMaxRateAssignment($selectedNumber, $wholeNumber, $commissionRate)
    {
        if($selectedNumber == $wholeNumber)
        {
            $decimal = $selectedNumber - $commissionRate;
            $decimal *= 10;

            if($decimal <= 1) {
                return $this->setDecimal(0);
            }
        }
        return $this->setDecimal();
    }

    public function checkCommissionRate($commissionRate, $parentCommissionRateRate)
    {
        if($commissionRate >= $parentCommissionRateRate) {
            return ['error' => true, 'message' => 'Something went wrong!'];
        }

        return ['error' => false];
    }

    public function setCurrentRate($user)
    {
        $parentCommissionRate = null;
        if($user->hasRole('Master Agent')) {
            $parentCommissionRate = Hub::where('id', $user->hub_id)->get()->first()->commission_rate;
        }

        if($user->hasRole('Master Agent') && $user->referred_by !== null)
        {   
            $masterAgentRate = User::where('id', $user->referred_by)->get()->first()->commission_rate;
            $parentCommissionRate = $parentCommissionRate * $masterAgentRate;
        } 

        $userCommisionRate = number_format($user->commission_rate * $parentCommissionRate, 2);
        $wholeNumber = floor($userCommisionRate);
        $decimal = $userCommisionRate - $wholeNumber;
        $decimalNumberRate[$decimal] = '.' . $decimal * 10;

        return [
            'whole_number' => $wholeNumber,
            'decimal_number' => $decimal
        ];
    }

    public function getCommissionRate($hubId, $commissionRate, $masterAgentId = null)
    {
        $parentCommissionRate = Hub::where('id', $hubId)->get()->first()->commission_rate;
        if($masterAgentId) 
        {
            $masterAgentPercentageRate = User::where('id', $masterAgentId)->get()->first()->commission_rate;
            $parentCommissionRate = number_format($parentCommissionRate * $masterAgentPercentageRate, 1);
        }   
        
        if($this->checkCommissionRate($commissionRate, $parentCommissionRate)['error'])
        {
            return ['error' => true, 'commission_rate' => null];
        }

        $commissionPercentRate =  $commissionRate / $parentCommissionRate;
        return ['error' => false, 'commission_rate' => number_format($commissionPercentRate, 2)];

    }
}
