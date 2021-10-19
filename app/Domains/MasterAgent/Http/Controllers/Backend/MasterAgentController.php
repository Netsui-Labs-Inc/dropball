<?php


namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Domains\Auth\Http\Requests\Backend\User\StoreMasterAgentRequest;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateMasterAgentByHubRequest;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateMasterAgentRequest;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\PermissionService;
use App\Domains\Auth\Services\RoleService;
use App\Domains\Auth\Services\UserService;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\CommissionRate\Http\Services\CommissionRateService;
use App\Domains\Hub\Models\Hub;
use App\Domains\MasterAgent\Http\Service\AgentFilter;
use App\Domains\Wallet\Models\Withdrawal;
use App\Http\Controllers\Controller;
use App\Http\Requests\DepositRequest;
use App\Models\CommissionRate;
use Auth;
use Bavix\Wallet\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
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

    private $commissionRateService;

    /**
     * UserController constructor.
     *
     * @param  UserService  $userService
     * @param  RoleService  $roleService
     * @param  PermissionService  $permissionService

     */

    public function __construct(
        UserService $userService,
        RoleService $roleService,
        PermissionService $permissionService,
        CommissionRateService $commissionRateService
    ){
        $this->userService = $userService;
        $this->roleService = $roleService;
        $this->permissionService = $permissionService;
        $this->commissionRateService = $commissionRateService;
    }
    public function index(Request $request)
    {
        return view('backend.master-agent.index');
    }

    private function filterAgent($isAgent)
    {
        return ($isAgent  === '1') ? 'Agent' : 'Master Agent';
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
        return view('backend.master-agent.create');
    }

    public function edit(User $masterAgent)
    {
        $hubs = Hub::all()->pluck('name', 'id');
        $hubText = '';
        if(auth()->user()->hasRole('Virtual Hub'))
        {
            $hubText = '.hub';
        }

        return view('backend.master-agent.edit')
            ->with('masterAgent', $masterAgent)
            ->with('hubs', $hubs)
            ->with('hubText', $hubText);

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
            $input['hub_id'] = $user->hub_id;
        }

        $hub = Hub::where('id', $input['hub_id'])->first();
        $masterAgentCommissionRate = $input['whole_number_rate'] + $input['decimal_number_rate'];
        $commissionRateConversion = new CommissionRatesConversion($hub, true);
        $hubRate = $commissionRateConversion->convertHub()->hubCommissionRate();
        if ($hubRate < $masterAgentCommissionRate || $masterAgentCommissionRate <= 0)
        {
            return redirect()->back()->withErrors('Something went wrong!');
        }

        $input['commission_rate'] = $masterAgentCommissionRate;
        $user = $this->userService->store($input);
        $commissionRateConversion = new CommissionRatesConversion($user);
        $masterAgentCommissionRate = $commissionRateConversion->converMasterAgentRateToPercentage($user->commission_rate, $input['hub_id']);

        $user->commission_rate = $masterAgentCommissionRate;
        $user->save();

        $user->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);

        CommissionRate::create([
            'hub_id'          => $input['hub_id'],
            'master_agent_id' => $user->id,
            'commission_rate' => 1 - $masterAgentCommissionRate // 1 is equal to 100%
        ]);

        return redirect()->to(route('admin.master-agents.index'))->withFlashSuccess("Master Agent Created Successfully");
    }

    public function updateByHub(UpdateMasterAgentByHubRequest $request, User $masterAgent)
    {
        $input = $request->validated();
        $input['name'] = $masterAgent->name;
        $input['email'] = $masterAgent->email;
        $input['mobile'] = $masterAgent->mobile;
        $input['referral_id'] = $masterAgent->referral_id;
        if($this->update($masterAgent, $request, $input))
        {
            return redirect()->to(route('admin.master-agents.index'))->withFlashSuccess("Master Agent updated Successfully");
        }
        return redirect()->back()->withErrors('Something went wrong!');
    }

    public function updateByAdmin(UpdateMasterAgentRequest $request, User $masterAgent)
    {
        $input = $request->validated();
        if($this->update($masterAgent, $request, $input))
        {
            return redirect()->to(route('admin.master-agents.index'))->withFlashSuccess("Master Agent updated Successfully");
        }
        return redirect()->back()->withErrors('Something went wrong!');

    }

    private function update(User $masterAgent, $request, $input)
    {
        $user = $request->user();
        if ($request->has('email_verified') || $masterAgent->email_verified_at) {
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

        $masterAgentCommissionRate = $input['whole_number_rate'] + $input['decimal_number_rate'];

        $commissionRateConversion = new CommissionRatesConversion($masterAgent);
        $masterAgentCommissionRate = $commissionRateConversion->converMasterAgentRateToPercentage($masterAgentCommissionRate, $input['hub_id'],  true);

        if(!$masterAgentCommissionRate){
            return redirect()->back()->withErrors('Something went wrong!');
        }

        $input['commission_rate'] = $masterAgentCommissionRate;
        $user = $this->userService->update($masterAgent, $input);

        $commissionRate = CommissionRate::where('hub_id', $input['hub_id'])
                                        ->where('master_agent_id', $user->id)
                                        ->get()
                                        ->first();

        if ($commissionRate) {
            $commissionRate->commission_rate = 1 - $input['commission_rate']; //1 is equal to 100%
            $commissionRate->updated_at = Carbon::now()->toDateTimeString();
            $commissionRate->save();

        } else {
            CommissionRate::create([
                'hub_id'          => $input['hub_id'],
                'master_agent_id' => $user->id,
                'commission_rate' => 1 - $input['commission_rate'] //1 is equal to 100%
            ]);
        }

        return true;
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
                $hub->transferFloat($masterAgent, $request->get('amount'), [
                    'transfer_to' => $masterAgent->id,
                    'credited_by' => Auth()->user()->id,
                    'deposit' => true
                ]);
            }
            if($user->hasRole('Master Agent'))
            {
                $user->transferFloat($masterAgent, $request->get('amount'),[
                    'transfer_to' => $masterAgent->id,
                    'credited_by' => Auth()->user()->id,
                    'deposit' => true
                ]);
            }

            if($user->hasRole('Administrator'))
            {
                $creditedBy = [
                    'credited_by' => Auth()->user()->id
                ];
                $masterAgent->depositFloat($request->get('amount'), $creditedBy);
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

    public function transactions(Request $request, AgentFilter $agentFilter)
    {

        if (auth()->user()->hasRole('Virtual Hub')) {
            $query = User::join('withdrawals', 'withdrawals.user_id', 'users.id')
                ->where('reviewer_id', auth()->user()->id)
                ->where('status', Withdrawal::PENDING);
        } else {
            $query = User::join('withdrawals', 'withdrawals.user_id', 'users.id')
                ->whereHas('roles', function ($query) {
                    return $query->where('name', 'Master Agent');
                })
                ->where('status', Withdrawal::PENDING);
        }
        $query = $agentFilter->setAgent($query, $request->get('agent'))->getQuery();
        $pendingWithdrawals = $query->get()->count();
        return view('backend.master-agent.transactions')->with('pendingWithdrawals',$pendingWithdrawals);
    }
}
