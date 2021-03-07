<?php

namespace App\Domains\Auth\Http\Controllers\Backend\User;

use App\Domains\Auth\Http\Requests\Backend\User\DeleteUserRequest;
use App\Domains\Auth\Http\Requests\Backend\User\EditUserRequest;
use App\Domains\Auth\Http\Requests\Backend\User\StoreUserRequest;
use App\Domains\Auth\Http\Requests\Backend\User\UpdateUserRequest;
use App\Domains\Auth\Http\Requests\Frontend\Auth\UpdatePasswordRequest;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\PermissionService;
use App\Domains\Auth\Services\RoleService;
use App\Domains\Auth\Services\UserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\User\UpdateProfileRequest;

/**
 * Class UserController.
 */
class MyAccountController extends Controller
{
    /**
     * @var UserService
     */
    protected $userService;

    /**
     * UserController constructor.
     *
     * @param  UserService  $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('backend.auth.my-account.account');
    }

    public function update(UpdateProfileRequest $request, UserService $userService)
    {
        $userService->updateProfile($request->user(), $request->validated());

        if (session()->has('resent')) {
            return redirect()->route('frontend.auth.verification.notice')->withFlashInfo(__('You must confirm your new e-mail address before you can go any further.'));
        }

        return redirect()->route('admin.auth.my-account', ['#information'])->withFlashSuccess(__('Profile successfully updated.'));
    }

    public function changePassword(UpdatePasswordRequest $request)
    {
        $this->userService->updatePassword($request->user(), $request->validated());

        return redirect()->route('admin.auth.my-account', ['#password'])->withFlashSuccess(__('Password successfully updated.'));
    }
}
