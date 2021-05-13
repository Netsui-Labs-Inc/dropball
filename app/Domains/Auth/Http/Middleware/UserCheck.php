<?php

namespace App\Domains\Auth\Http\Middleware;

use App\Domains\Auth\Models\User;
use Closure;

/**
 * Class UserCheck.
 */
class UserCheck
{
    /**
     * @param $request
     * @param  Closure  $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user() && $request->user()->isType(User::TYPE_USER)) {
            return $next($request);
        }

        return redirect()->route('admin.dashboard');
    }
}
