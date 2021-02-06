<?php


namespace App\Domains\Hub\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Http\Controllers\Controller;
use App\Http\Requests\DepositRequest;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class HubController extends Controller
{
    public function index()
    {
        return view('backend.hub.index');
    }

    public function show(User $hub)
    {
        return view('backend.hub.show')->with('user', $hub);
    }

    public function cashBalance(User $hub)
    {
        return view('backend.hub.wallet')->with('user', $hub);
    }

    public function deposit(User $hub, DepositRequest $request)
    {
        $user = $request->user();
        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        try {
            if ($user->hasRole('Satoshi')) {
                $hub->depositFloat($request->get('amount'));
            } elseif ($user->hasRole('Administrator')) {
                $hub->depositFloat($request->get('amount'));
            }

            return redirect()->back()->withFlashSuccess("Cash Added Successfully");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    public function verify(User $hub)
    {
        $hub->email_verified_at = Carbon::now();
        $hub->active = 1;
        $hub->save();

        return redirect()->back()->withFlashSuccess("Master Agent was verified");
    }

    public function transactions()
    {
        $pendingTransactions = Transaction::query()
            ->where("payable_type", Hub::class)
            ->where('confirmed', false);

        return view('backend.hub.transactions')->with('pendingTransactions', $pendingTransactions);
    }
}
