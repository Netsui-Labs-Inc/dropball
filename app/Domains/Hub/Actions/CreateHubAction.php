<?php
namespace App\Domains\Hub\Actions;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;

class CreateHubAction
{
    public function __invoke($data) : Hub
    {
        $user = User::where('email', $data['admin'])->where('type', 'admin')->first();

        return Hub::create([
           'name' => $data['name'],
           'admin_id' => $user->id,
        ]);
    }
}
