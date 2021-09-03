<?php


namespace App\Domains\Player\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Requests\DepositRequest;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class PlayerController extends Controller
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
                $user->transferFloat($player, $request->get('amount'), [
                    'transfer_to' => $player->id,
                    'credited_by' => Auth()->user()->id,
                    'deposit' => true
                ]);
            }
            if ($user->hasRole('Administrator')) {
                $creditedBy = [
                    'credited_by' => Auth()->user()->id
                ];
                $player->depositFloat($request->get('amount'), $creditedBy);
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
        if (auth()->user()->hasRole('Master Agent')) {
            $pendingWithdrawals = Withdrawal::where('reviewer_id', auth()->user()->id)
                ->where('status', Withdrawal::PENDING)
                ->count();

        } else {
            $pendingWithdrawals = User::join('withdrawals', 'withdrawals.user_id', 'users.id')
                ->whereHas('roles', function ($query) {
                    return $query->where('name', 'Player');
                })
                ->where('status', Withdrawal::PENDING)
                ->get()
                ->count();
        }
        return view('backend.player.all-transactions')
            ->with('pendingWithdrawals', $pendingWithdrawals);
    }
}
