<?php

namespace App\Domains\MasterAgent\Http\Controllers\Backend;

use App\Domains\Auth\Http\Requests\Backend\User\StoreMasterAgentRequest;
use App\Domains\Auth\Http\Requests\Backend\User\StoreSubAgentRequest;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\PermissionService;
use App\Domains\Auth\Services\RoleService;
use App\Domains\Auth\Services\UserService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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

    public function index(Request $request)
    {
        /** @var User $user */
        $user = auth()->user();
        if ($user->hasRole('Administrator')) {
            $pendingAgents = User::role('Master Agent')->whereNotNull('referred_by')->whereNull('email_verified_at')->get();
        } else {
            $pendingAgents = $user->referrals()->whereNull('email_verified_at')->get();
        }

        return view('backend.master-agent.sub-agent.index')->with('pendingAgents', $pendingAgents);

    }

    public function create()
    {

        return view('backend.master-agent.sub-agent.create');
    }

    public function store(StoreSubAgentRequest $request)
    {
        $user = $request->user();
        $input = $request->validated();
        $input['type'] = 'admin';
        $input['roles'] = ['Master Agent'];
        $input['timezone'] = 'Asia/Manila';
        $input['referred_by'] = $user->id;
        $input['hub_id'] = $user->hub_id;
        $agent = $this->userService->store($input);

        $agent->createWallet([
            'name' => 'Income Wallet',
            'slug' => 'income-wallet',
        ]);

        return redirect()->to(route('admin.sub-agents.index'))->withFlashSuccess("Sub Agent Created Successfully");
    }
}
