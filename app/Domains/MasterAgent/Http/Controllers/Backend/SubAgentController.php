<?php

namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Domains\Auth\Http\Requests\Backend\User\StoreSubAgentRequest;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\PermissionService;
use App\Domains\Auth\Services\RoleService;
use App\Domains\Auth\Services\UserService;
use App\Domains\Hub\Models\Hub;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateAgentRequest;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateAgentByMasterAgent;
use App\Domains\CommissionRate\Http\Services\CommissionRatesConversion;
use App\Domains\CommissionRate\Http\Services\CommissionRateService;
use Carbon\Carbon;

class SubAgentController extends Controller
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

    private $agentCommissionRate;
    private $commissionRateService;

    /**
     * UserController constructor.
     *
     * @param  UserService  $userService
     * @param  RoleService  $roleService
     * @param  PermissionService  $permissionService
     */
    public function __construct(UserService $userService, 
            RoleService $roleService, 
            PermissionService $permissionService,
            CommissionRateService $commissionRateService
            )
    {
        $this->userService = $userService;
        $this->roleService = $roleService;
        $this->permissionService = $permissionService;
        $this->commissionRateService = $commissionRateService;
    }

    public function updateByMasterAgent(UpdateAgentByMasterAgent $request, User $agent)
    {
      
        $input = $request->validated();
        
        $AgentCommissionRate = $input['whole_number_rate'] + $input['decimal_number_rate'];
        $commissionRateConversion = new CommissionRatesConversion($agent);
        $AgentCommissionRate = $commissionRateConversion
            ->convertAgentRateToPercentage($AgentCommissionRate, $agent->hub_id, $agent->referred_by, true);
        
        if(!$AgentCommissionRate){
            return redirect()->back()->withErrors('Something went wrong!');
        }
        $agent->commission_rate = $AgentCommissionRate;
        $agent->referral_id = $input['referral_id'];
        $agent->save();
        return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent updated Successfully");
    }

    public function approve(User $agent)
    {
        $agent->active = 1;
        $agent->email_verified_at = Carbon::now()->timestamp;
        $agent->save();

        return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent Created Successfully");

    }

    public function show(User $agent)
    {
        return view('backend.master-agent.sub-agent.show')->with('user', $agent);
    }

    public function index(Request $request)
    {
        $user = auth()->user();

        if ($user->hasRole('Master Agent'))
        {
            $pendingAgents = $user->referrals()->whereNull('email_verified_at')->get();
        }

        if ($user->hasRole('Virtual Hub'))
        {
            $pendingAgents = User::where('hub_id', $user->hub_id)
                            ->where('email_verified_at', null)->get();
        }

        if ($user->hasRole('Administrator')) {
            $pendingAgents = User::role('Master Agent')->whereNotNull('referred_by')->whereNull('email_verified_at')->get();
        }

        return view('backend.master-agent.sub-agent.master-agent-agent-list')->with('pendingAgents', $pendingAgents);
    }

    public function create()
    {
        return view('backend.master-agent.sub-agent.create');
    }

    public function edit(User $agent)
    {

        $hubs = Hub::all()->pluck('name', 'id');

        return view('backend.master-agent.sub-agent.edit')
            ->with('agent', $agent)
            ->with('hubs', $hubs);
    }

    public function masterAgentEdit(User $agent)
    {
        $hubs = Hub::all()->pluck('name', 'id');

        return view('backend.master-agent.sub-agent.master-agent-edit-module')
            ->with('agent', $agent)
            ->with('hubs', $hubs);
    }
    
    public function update(UpdateAgentRequest $request, User $agent)
    {
        $user = $request->user();
        $input = $request->validated();
       
        if ($request->has('email_verified') || $agent->email_verified_at) {
            $input['active'] = "1";
        }
        $AgentCommissionRate = $input['whole_number_rate'] + $input['decimal_number_rate'];

        $commissionRateConversion = new CommissionRatesConversion($agent);
        $AgentCommissionRate = $commissionRateConversion
            ->convertAgentRateToPercentage($AgentCommissionRate, $input['hub_id'], $input['referred_by'], true);
        if(!$AgentCommissionRate){
            return redirect()->back()->withErrors('Something went wrong!');
        }
        
        $input['commission_rate'] = $AgentCommissionRate;
        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';
       
        if ($user->hasRole('Virtual Hub')) {
            $input['hub_id'] = Hub::where('admin_id', $user->id)->first()->id;
        } elseif ($user->hasRole('Master Agent')) {
            $input['hub_id'] = $user->hub_id;
        }
    
        $user = $this->userService->update($agent, $input);
        return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent updated Successfully");
    }

    public function store(StoreSubAgentRequest $request)
    {
        $user = $request->user();
        $input = $request->validated();

        if ($this->checkHubId($input['hub_id']))
        {
            return redirect()->back()->withErrors('Something went wrong!');
        }

        $agentCommissionRate = $input['whole_number_rate'] + $input['decimal_number_rate'];
        $masterAgent = User::where('id', $input['referred_by'])->first();

        $commissionRateConversion = new CommissionRatesConversion($masterAgent);
        $masterAgentRate = $commissionRateConversion->convertMasterAgent()->masterAgentCommissionRate();
        if($masterAgentRate < $agentCommissionRate || $agentCommissionRate <= 0)
        {
            return redirect()->back()->withErrors('Something went wrong!');
        }

        $input['commission_rate'] = $agentCommissionRate;
        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';


        $agent = $this->userService->store($input);
        $commissionRateConversion = new CommissionRatesConversion($agent);
        $agent->commission_rate = $commissionRateConversion->convertAgentRateToPercentage($agent->commission_rate, $agent->hub_id, $agent->referred_by);
        
        $agent->save();
        $agent->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);

        return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent Created Successfully");

    }

    public function cashBalance(User $agent)
    {
        return view('backend.master-agent.wallet')->with('user', $agent);
    }

    private function checkHubId($hubId)
    {
        if(auth()->user()->hasRole('Master Agent'))
        {
            return ((int) $hubId === auth()->user()->hub_id) ? false : true;
        }
        return false;
    }

    public function pending()
    {
        return view('backend.master-agent.sub-agent.pending');
    }
}
