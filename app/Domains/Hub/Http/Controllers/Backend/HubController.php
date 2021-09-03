<?php


namespace App\Domains\Hub\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\UserService;
use App\Domains\Hub\Actions\CreateHubAction;
use App\Domains\Hub\Actions\UpdateHubAction;
use App\Domains\Hub\Http\Requests\Backend\StoreHubRequest;
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

    public function show(Hub $hub)
    {
        return view('backend.hub.show')->with('hub', $hub);
    }

    public function create()
    {
        $hubAdmins = User::role('Virtual Hub')
            ->doesntHave('hubAdmin')
            ->get()->pluck('name', 'id');
        return view('backend.hub.create')->with([
            'hubAdmins' => $hubAdmins,
        ]);
    }

    public function edit(Hub $hub)
    {
        $hubAdmins = User::role('Virtual Hub')
            ->where(function($query) use ($hub) {
                $query->doesntHave('hubAdmin')
                    ->orWhere('id', $hub->admin_id);
            })
            ->get()->pluck('name', 'id');
        return view('backend.hub.edit')->with([
            'hubAdmins' => $hubAdmins,
            'hub' => $hub
        ]);
    }

    public function store(StoreHubRequest $request)
    {
        try {
            $data = $request->validated();
            (new CreateHubAction)($data);
            return redirect()->to(route('admin.hubs.index'))->withFlashSuccess("Hub Created Successfully");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    public function update(StoreHubRequest $request, Hub $hub, UserService $userService)
    {
        try {
            $data = $request->validated();
            (new UpdateHubAction)($hub, $data);
            $userService->updateHubId(User::find($data['admin_id']), $hub->id);
            return redirect()->to(route('admin.hubs.index'))->withFlashSuccess("Hub updated Successfully");
        } catch (\Exception $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }

    public function cashBalance(Hub $hub)
    {
        return view('backend.hub.wallet')->with('hub', $hub);
    }

    public function deposit(Hub $hub, DepositRequest $request)
    {
        $user = $request->user();
        if (! Hash::check($request->get('password'), $user->password)) {
            return redirect()->back()->withErrors("Invalid Password");
        }

        try {
            $creditedBy = [
                'credited_by' => Auth()->user()->id
            ];

            $hub->depositFloat($request->get('amount'), $creditedBy);

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
