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

    public function update(UpdateAgentRequest $request, User $agent)
    {
        $user = $request->user();
        $input = $request->validated();

        if(!$this->checkMasterAgentCommissionRates($input['referred_by'], $input['commission_rate']))
        {
            return redirect()->back()->withErrors('Something went wrong!');
        }

        if ($request->has('email_verified') || $agent->email_verified_at) {
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
        $user = $this->userService->update($agent, $input);
        if(array_key_exists('email_verified', $input))
        {
            return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent updated Successfully");
        }
        return redirect()->to(route('admin.agents.pending'))->withFlashSuccess("Agent updated Successfully.");

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
            if ($user->hasRole('Administrator')) {
                $pendingAgents = User::role('Master Agent')->whereNotNull('referred_by')->whereNull('email_verified_at')->get();
            } else {
                $pendingAgents = $user->referrals()->whereNull('email_verified_at')->get();
            }

            return view('backend.master-agent.sub-agent.master-agent-agent-list')->with('pendingAgents', $pendingAgents);
        }

        return view('backend.master-agent.sub-agent.index');
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

    public function store(StoreSubAgentRequest $request)
    {
        $user = $request->user();
        $input = $request->validated();
        if(!$this->checkMasterAgentCommissionRates($input['referred_by'], $input['commission_rate']))
        {
            return redirect()->back()->withErrors('Something went wrong!');
        }

        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';
        $input['hub_id'] = $user->hub_id;
        $agent = $this->userService->store($input);

        $agent->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);
        if (auth()->user()->hasRole('Virtual Hub'))
        {
            return redirect()->to(route('admin.agents.pending'))->withFlashSuccess("Agent Created Successfully");

        }
        return redirect()->to(route('admin.agents.index'))->withFlashSuccess("Agent Created Successfully");

    }

    private function checkMasterAgentCommissionRates($masterAgentId, $AgentRate)
    {
        $masterAgentCommissionRate = User::where('id', $masterAgentId)
                                    ->get()->first()->commission_rate;

        $masterAgentCommissionRate -= 0.1;
        $rates = collect();
        for ($rate = $masterAgentCommissionRate; $rate > 0  ; $rate -= 0.1) {
            $formatedRate = number_format($rate, 1);
            $rates->push($formatedRate);
        }

        return $rates->contains($AgentRate);
    }

    public function pending()
    {
        return view('backend.master-agent.sub-agent.pending');
    }
}
