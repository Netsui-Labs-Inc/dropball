<?php

namespace App\Domains\Bet\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BetController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        return view('frontend.pages.betting.index')
            ->with('user', $user);
    }
}
