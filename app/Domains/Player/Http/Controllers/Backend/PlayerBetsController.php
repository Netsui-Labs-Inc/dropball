<?php


namespace App\Domains\Player\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;

class PlayerBetsController extends Controller
{
    public function index(User $player)
    {
        return view('backend.player.bets')
            ->with('player', $player);
    }
}
