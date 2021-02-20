<?php


namespace App\Domains\Player\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Http\Requests\DepositRequest;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class PlayerController extends \App\Http\Controllers\Controller
{
    public function index()
    {
        $user = auth()->user();
        if ($user->hasRole('Administrator')) {
            $pendingPlayers = User::where('type', 'user')->whereNull('email_verified_at')->get();
        } else {
            $pendingPlayers = $user->referrals()->whereNull('email_verified_at')->get();
        }

        return view('backend.player.index')->with('pendingPlayers', $pendingPlayers);
    }

    public function show(User $player)
    {
        return view('backend.player.show')->with('user', $player);
    }

    public function cashBalance(User $player)
    {
        return view('backend.player.wallet')->with('user', $player);
    }

    public function deposit(User $player, DepositRequest $request)
    {
        $user = $request->user();
        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        try {
            if ($user->hasRole('Master Agent')) {
                $user->transferFloat($player, $request->get('amount'), ['transfer_to' => $player->id, 'deposit' => true]);
            }
            if ($user->hasRole('Administrator')) {
                $player->depositFloat($request->get('amount'));
            }

            return redirect()->back()->withFlashSuccess("Cash Added Successfully");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    public function verify(User $player)
    {
        $player->email_verified_at = Carbon::now();
        $player->active = 1;
        $player->save();

        return redirect()->back()->withFlashSuccess("Player was verified");
    }

    public function transactions()
    {
        $query = Transaction::query();
        $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) {
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Player');
            });
        });
        if (auth()->user()->hasRole('Master Agent')) {
            $pendingTransactions = $query->where("payable_type", User::class)->where('confirmed', false)
                ->whereIn('payable_id', auth()->user()->referrals->pluck('id'));
        } else {
            $pendingTransactions = $query->where("payable_type", User::class)->where('confirmed', false)->get();
        }

        return view('backend.player.all-transactions')
            ->with('pendingTransactions', $pendingTransactions);
    }
}
