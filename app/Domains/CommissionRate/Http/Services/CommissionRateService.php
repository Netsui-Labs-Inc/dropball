<?php

namespace App\Domains\CommissionRate\Http\Services;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;

class CommissionRateService
{
 
    public function __construct()
    {
        
    }

    public function setRates($commissionRate, $wholeNumber, $startNumber = 0)
    {
      
        $decimal = $commissionRate - $wholeNumber;

        if($decimal == 0)
        {
            $wholeNumber -= 1;
        }

        foreach (range(0, $wholeNumber) as $number) {
            $wholeNumberRate[$number] = $number;
        }
        $decimalNumberRate = $this->setDecimal(9, $startNumber);
        return ['whole_number_rate' => $wholeNumberRate, 'decimal_number_rate' => $decimalNumberRate];

    }

    private function setDecimal($decimal = 9, $start = 0)
    {
        foreach (range($start, $decimal) as $number) {
            $decimalNumberRate["0.$number"] = ".$number";
        }

       return $decimalNumberRate;

    }

    public function checkMaxRateAssignment($selectedNumber, $wholeNumber, $commissionRate, $startNumber)
    {
        if((int) $selectedNumber == $wholeNumber)
        {
            $decimal = abs($selectedNumber - $commissionRate);
            $decimal *= 10;
        
            if(number_format($decimal) <= 1) {
                return $this->setDecimal(0);
            }

            return $this->setDecimal($decimal - 1);
        }

        if($selectedNumber === "0")
        {
            return $this->setDecimal(9, $startNumber);
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
        $commissionRateConversion = new CommissionRatesConversion($user);
        if($user->hasRole('Master Agent')) {
            $userCommisionRate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();
        }

        if($user->hasRole('Master Agent') && $user->referred_by !== null)
        {   
            $userCommisionRate = $commissionRateConversion->convertAgent()->agentCommissionRate();
        } 

       
        $wholeNumber = floor($userCommisionRate);
        $decimal = $userCommisionRate - $wholeNumber;
        $decimalNumberRate[$decimal] = '.' . $decimal * 10;

        return [
            'whole_number' => $wholeNumber,
            'decimal_number' => $decimal
        ];
    }
}
