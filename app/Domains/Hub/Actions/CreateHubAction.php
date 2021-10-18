<?php
namespace App\Domains\Hub\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;
use App\Models\OverallCommissionRate;

class CreateHubAction
{
    public function __invoke($data) : Hub
    {
        if(Hub::where('admin_id', $data['admin_id'])->exists()) {
            throw new GeneralException("Admin cannot be assigned to another Hub");
        }
        $commissionRate = $data['whole_number_rate'] + $data['decimal_number_rate'];
        
        $overallCommissionRate = OverallCommissionRate::query()->first()->rate;
        if($overallCommissionRate < $commissionRate
        ||$commissionRate <= 0
        ){
            throw new GeneralException("Something went wrong!");
        }
        
        return Hub::create([
           'name'            => $data['name'],
           'admin_id'        => $data['admin_id'],
           'commission_rate' => $commissionRate
        ]);
    }
}
