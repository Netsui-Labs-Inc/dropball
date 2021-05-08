<?php

namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MyCommissionsLogController extends Controller
{
    public function index(Request $request)
    {
        return view('backend.master-agent.commission-logs')->with('user',  $request->user());
    }
}
