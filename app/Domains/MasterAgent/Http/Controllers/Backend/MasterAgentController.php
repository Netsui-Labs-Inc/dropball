<?php


namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use App\Http\Controllers\Controller;
use App\Http\Requests\DepositRequest;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class MasterAgentController extends Controller
{
    public function index()
    {
        return view('backend.master-agent.index');
    }

    public function show(User $masterAgent)
    {
        return view('backend.master-agent.show')->with('user', $masterAgent);
    }

    public function cashBalance(User $masterAgent)
    {
        return view('backend.master-agent.wallet')->with('user', $masterAgent);
    }

    public function deposit(User $masterAgent, DepositRequest $request)
    {
        $user = $request->user();

        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        $hub = Hub::where('admin_id', $user->id)->first();

        try {
            if ($user->hasRole('Virtual Hub')) {
                $hub->transferFloat($masterAgent, $request->get('amount'));
                if (! $hub->hasWallet('income-wallet')) {
                    $hubWallet = $hub->createWallet([
                        'name' => 'Income Wallet',
                        'slug' => 'income-wallet',
                    ]);
                } else {
                    $hubWallet = $hub->getWallet('income-wallet');
                }
                $hubWallet->depositFloat($request->get('amount') * .02);
            }
            if ($user->hasRole('Administrator')) {
                $masterAgent->depositFloat($request->get('amount'));
            }

            return redirect()->back()->withFlashSuccess("Cash Added Successfully");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    public function verify(User $masterAgent)
    {
        $masterAgent->email_verified_at = Carbon::now();
        $masterAgent->active = 1;
        $masterAgent->save();

        return redirect()->back()->withFlashSuccess("Master Agent was verified");
    }

    public function transactions()
    {
        $query = Transaction::query();
        $query->whereHasMorph('payable', 'App\Domains\Auth\Models\User', function ($query) {
            if (auth()->user()->hasRole('Virtual Hub')) {
                $hub = Hub::where('admin_id', auth()->user()->id)->first();
                $query->where('hub_id', $hub->id);
            }
            $query->whereHas('roles', function ($query) {
                return $query->where('name', 'Master Agent');
            });
        });
        $query->whereHas('wallet', fn ($query) => $query->where('slug', 'income-wallet'));

        $pendingTransactions = $query->where('confirmed', false)->get();

        return view('backend.master-agent.transactions')->with('pendingTransactions', $pendingTransactions);
    }
}
