<?php
namespace App\Domains\Hub\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;

class CreateHubAction
{
    public function __invoke($data) : Hub
    {
        if(Hub::where('admin_id', $data['admin_id'])->exists()) {
            throw new GeneralException("Admin cannot be assigned to another Hub");
        }
        $commission_rate = $data['whole_number_rate'] + $data['decimal_number_rate'];
        return Hub::create([
           'name'            => $data['name'],
           'admin_id'        => $data['admin_id'],
           'commission_rate' => $commission_rate
        ]);
    }
}
