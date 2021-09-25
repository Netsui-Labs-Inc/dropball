<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        <h3>{{ config('app.name') }}</h3>
    </div><!--c-sidebar-brand-->

    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.dashboard')"
                :active="activeClass(Route::is('admin.dashboard'), 'c-active')"
                icon="c-sidebar-nav-icon cil-speedometer"
                :text="__('Dashboard')" />
        </li>
        @can('admin.access.betting-events.list')
        <li class="c-sidebar-nav-title">@lang('Events')</li>
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.betting-events.index', ['sorts' => ['id' => 'desc']])"
                :active="activeClass(Route::is('admin.betting-events.index'), 'c-active')"
                icon="c-sidebar-nav-icon cil-calendar"
                :text="__('Betting Events')" />
        </li>
        @endcan
        @can('admin.access.players.list')
        <li class="c-sidebar-nav-title">@lang('Players')</li>
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.players.index', ['sorts' => ['id' => 'desc']])"
                :active="activeClass(Route::is('admin.players.index'), 'c-active')"
                icon="c-sidebar-nav-icon cil-user"
                :text="__('Players List')" />
        </li>
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.players.transactions', ['sorts' => ['id' => 'desc'], 'filters' => ['status' => 'pending'], 'userType' => 'Player'])"
                :active="activeClass(Route::is('admin.players.transactions'), 'c-active')"
                icon="c-sidebar-nav-icon cil-wallet"
                :text="__('Players Wallet')" />
        </li>
        @endcan
        @role('Master Agent')
        <li class="c-sidebar-nav-title">@lang('Sub-agents')</li>
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.sub-agents.index', ['sorts' => ['id' => 'desc']])"
                :active="activeClass(Route::is('admin.sub-agents.index'), 'c-active')"
                icon="c-sidebar-nav-icon cil-user"
                :text="__('Sub-Agents List')" />
        </li>
        @endrole
        @can('admin.access.my-wallet')
        @if(!$logged_in_user->hasRole('Administrator'))
            <li class="c-sidebar-nav-title">@lang('My Wallet')</li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.my.wallet.transactions', ['sorts' => ['id' => 'desc']])"
                    :active="activeClass(Route::is('admin.my.wallet.transactions'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-wallet"
                    :text="__('Wallet Transactions')" />
            </li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.my.cash-in', ['sorts' => ['id' => 'desc']])"
                    :active="activeClass(Route::is('admin.my.cash-in'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-money"
                    :text="__('Cash In')" />
            </li>
        @endif
        @endcan
        @role('Master Agent')
        <li class="c-sidebar-nav-title">@lang('Commission Rewards')</li>
        <li class="c-sidebar-nav-item">
            <x-utils.link
                class="c-sidebar-nav-link"
                :href="route('admin.my.commissions.index', ['sorts' => ['id' => 'desc']])"
                :active="activeClass(Route::is('admin.my.commissions.index'), 'c-active')"
                icon="c-sidebar-nav-icon cil-wallet"
                :text="__('Commissions')" />
        </li>
        @endrole
        @can('admin.access.master-agents.manage')
            <li class="c-sidebar-nav-title">@lang('Master Agents')</li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.master-agents.index', ['sorts' => ['id' => 'desc']])"
                    :active="activeClass(Request::is('admin/master-agents/*'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-user"
                    :text="__('Master Agents List')" />
            </li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.master-agents.transactions', ['sorts' => ['created_at' => 'desc'], 'userType' => 'Master Agent'])"
                    :active="activeClass(Request::is('admin/master-agents-transactions*'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-wallet"
                    :text="__('Master Agents Wallet')" />
            </li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.sub-agents.pending', ['sorts' => ['created_at' => 'desc']])"
                    :active="activeClass(Route::is('admin.sub-agents.pending'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-user"
                    :text="__('Sub-agents Approval')" />
            </li>
        @endcan
        @can('admin.access.hubs.manage')
            <li class="c-sidebar-nav-title">@lang('Hubs')</li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.hubs.index', ['sorts' => ['id' => 'desc']])"
                    :active="activeClass(Request::is('admin/hubs/*'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-building"
                    :text="__('Hubs List')" />
            </li>
            <li class="c-sidebar-nav-item">
                <x-utils.link
                    class="c-sidebar-nav-link"
                    :href="route('admin.hubs.transactions', ['sorts' => ['id' => 'desc'], 'userType' => 'Hub'])"
                    :active="activeClass(Request::is('admin/hubs-transactions*'), 'c-active')"
                    icon="c-sidebar-nav-icon cil-wallet"
                    :text="__('Hubs Wallet')" />
            </li>
        @endcan
        @if (
            $logged_in_user->hasAllAccess() ||
            (
                $logged_in_user->can('admin.access.user.list') ||
                $logged_in_user->can('admin.access.user.deactivate') ||
                $logged_in_user->can('admin.access.user.reactivate') ||
                $logged_in_user->can('admin.access.user.clear-session') ||
                $logged_in_user->can('admin.access.user.impersonate') ||
                $logged_in_user->can('admin.access.user.change-password')
            )
        )
            <li class="c-sidebar-nav-title">@lang('System')</li>

            <li class="c-sidebar-nav-dropdown {{ activeClass(Route::is('admin.auth.user.*') || Route::is('admin.auth.role.*'), 'c-open c-show') }}">
                <x-utils.link
                    href="#"
                    icon="c-sidebar-nav-icon cil-user"
                    class="c-sidebar-nav-dropdown-toggle"
                    :text="__('Access')" />

                <ul class="c-sidebar-nav-dropdown-items">
                    @if (
                        $logged_in_user->hasAllAccess() ||
                        (
                            $logged_in_user->can('admin.access.user.list') ||
                            $logged_in_user->can('admin.access.user.deactivate') ||
                            $logged_in_user->can('admin.access.user.reactivate') ||
                            $logged_in_user->can('admin.access.user.clear-session') ||
                            $logged_in_user->can('admin.access.user.impersonate') ||
                            $logged_in_user->can('admin.access.user.change-password')
                        )
                    )
                        <li class="c-sidebar-nav-item">
                            <x-utils.link
                                :href="route('admin.auth.user.index', ['sorts' => ['id' => 'desc']])"
                                class="c-sidebar-nav-link"
                                :text="__('User Management')"
                                :active="activeClass(Route::is('admin.auth.user.*'), 'c-active')" />
                        </li>
                    @endif

                    @if ($logged_in_user->hasAllAccess())
                        <li class="c-sidebar-nav-item">
                            <x-utils.link
                                :href="route('admin.auth.role.index')"
                                class="c-sidebar-nav-link"
                                :text="__('Role Management')"
                                :active="activeClass(Route::is('admin.auth.role.*'), 'c-active')" />
                        </li>
                    @endif
                </ul>
            </li>
        @endif

        @if ($logged_in_user->hasAllAccess())
            <li class="c-sidebar-nav-dropdown">
                <x-utils.link
                    href="#"
                    icon="c-sidebar-nav-icon cil-list"
                    class="c-sidebar-nav-dropdown-toggle"
                    :text="__('Logs')" />

                <ul class="c-sidebar-nav-dropdown-items">
                    <li class="c-sidebar-nav-item">
                        <x-utils.link
                            :href="route('log-viewer::dashboard')"
                            class="c-sidebar-nav-link"
                            :text="__('Dashboard')" />
                    </li>
                    <li class="c-sidebar-nav-item">
                        <x-utils.link
                            :href="route('log-viewer::logs.list')"
                            class="c-sidebar-nav-link"
                            :text="__('Logs')" />
                    </li>
                </ul>
            </li>
        @endif
    </ul>

    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
</div><!--sidebar-->
@include('cashin.cash-in');
    <livewire:cash-in-callback />
