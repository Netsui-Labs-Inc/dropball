<?php
namespace App\Domains\Hub\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;

class CreateHubAction
{
    public function __invoke($data) : Hub
    {
        return Hub::create([
           'name' => $data['name'],
           'admin_id' => $data['admin_id'],
        ]);
    }
}
