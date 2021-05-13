<?php
namespace App\Domains\Hub\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Exceptions\GeneralException;

class UpdateHubAction
{
    public function __invoke(Hub $hub, $data) : Hub
    {
        $hub->update([
           'name' => $data['name'],
           'admin_id' => $data['admin_id'],
        ]);

        return $hub->fresh();
    }
}
