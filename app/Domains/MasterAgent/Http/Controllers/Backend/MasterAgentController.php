<?php


namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Domains\Auth\Http\Requests\Backend\User\StoreMasterAgentRequest;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateMasterAgentRequest;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\PermissionService;
use App\Domains\Auth\Services\RoleService;
use App\Domains\Auth\Services\UserService;
use App\Domains\Hub\Models\Hub;
use App\Http\Controllers\Controller;
use App\Http\Requests\DepositRequest;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class MasterAgentController extends Controller
{
    /**
     * @var UserService
     */
    protected $userService;

    /**
     * @var RoleService
     */
    protected $roleService;

    /**
     * @var PermissionService
     */
    protected $permissionService;

    /**
     * UserController constructor.
     *
     * @param  UserService  $userService
     * @param  RoleService  $roleService
     * @param  PermissionService  $permissionService
     */
    public function __construct(UserService $userService, RoleService $roleService, PermissionService $permissionService)
    {
        $this->userService = $userService;
        $this->roleService = $roleService;
        $this->permissionService = $permissionService;
    }
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

    public function create()
    {
        $hubs = Hub::all()->pluck('name', 'id');

        return view('backend.master-agent.create')->with('hubs', $hubs);
    }

    public function edit(User $masterAgent)
    {
        $hubs = Hub::all()->pluck('name', 'id');

        return view('backend.master-agent.edit')
            ->with('masterAgent', $masterAgent)
            ->with('hubs', $hubs);
    }

    public function store(StoreMasterAgentRequest $request)
    {
        $user = $request->user();
        $input = $request->validated();
        $input['email_verified'] = "1";
        $input['active'] = "1";
        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';
        if ($user->hasRole('Virtual Hub')) {
            $input['hub_id'] = Hub::where('admin_id', $user->id)->first()->id;
        }
        $user = $this->userService->store($input);

        $user->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);

        return redirect()->to(route('admin.master-agents.index'))->withFlashSuccess("Master Agent Created Successfully");
    }

    public function update(UpdateMasterAgentRequest $request, User $masterAgent)
    {
        $user = $request->user();
        $input = $request->validated();
        if ($request->has('email_verified')) {
            $input['active'] = "1";
        }
        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';
        if ($user->hasRole('Virtual Hub')) {
            $input['hub_id'] = Hub::where('admin_id', $user->id)->first()->id;
        } elseif ($user->hasRole('Master Agent')) {
            $input['hub_id'] = $user->hub_id;
        }
        $user = $this->userService->update($masterAgent, $input);

        return redirect()->to(route('admin.master-agents.index'))->withFlashSuccess("Master Agent updated Successfully");
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
                $hub->transferFloat($masterAgent, $request->get('amount'), ['transfer_to' => $masterAgent->id, 'deposit' => true]);
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
