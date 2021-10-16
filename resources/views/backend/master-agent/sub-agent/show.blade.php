@extends('backend.layouts.app')

@section('title', __('View Agent'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Agent Info')
        </x-slot>

        <x-slot name="headerActions">

        </x-slot>

        <x-slot name="body">
            <table class="table table-hover">
                <tr>
                    <th>@lang('Type')</th>
                    <td>@include('backend.auth.user.includes.type')</td>
                </tr>

                <tr>
                    <th>@lang('Avatar')</th>
                    <td><img src="{{ $user->avatar }}" class="user-profile-image" /></td>
                </tr>

                <tr>
                    <th>@lang('Name')</th>
                    <td>{{ $user->name }}</td>
                </tr>

                <tr>
                    <th>@lang('E-mail Address')</th>
                    <td>{{ $user->email }}</td>
                </tr>

                <tr>
                    <th>@lang('Status')</th>
                    <td>@include('backend.auth.user.includes.status', ['user' => $user])</td>
                </tr>

                <tr>
                    <th>@lang('Verified')</th>
                    <td>@include('backend.auth.user.includes.verified', ['user' => $user])</td>
                </tr>

                <tr>
                    <th>@lang('Balance')</th>
                    <td>{{ number_format($user->balanceFloat) }}</td>
                </tr>

                <tr>
                    <th>@lang('Timezone')</th>
                    <td>{{ $user->timezone ?? __('N/A') }}</td>
                </tr>

                <tr>
                    <th>@lang('Last Login At')</th>
                    <td>
                        @if($user->last_login_at)
                            @displayDate($user->last_login_at)
                        @else
                            @lang('N/A')
                        @endif
                    </td>
                </tr>

                <tr>
                    <th>@lang('Last Known IP Address')</th>
                    <td>{{ $user->last_login_ip ?? __('N/A') }}</td>
                </tr>

                @if ($user->isSocial())
                    <tr>
                        <th>@lang('Provider')</th>
                        <td>{{ $user->provider ?? __('N/A') }}</td>
                    </tr>

                    <tr>
                        <th>@lang('Provider ID')</th>
                        <td>{{ $user->provider_id ?? __('N/A') }}</td>
                    </tr>
                @endif

                <tr>
                    <th>@lang('Roles')</th>
                    @if($user->referred_by)
                        <td>Agent</td>
                    @else
                        <td>Master Agent</td>
                    @endif
                </tr>

                <tr>
                    <th>@lang('Additional Permissions')</th>
                    <td>{!! $user->permissions_label !!}</td>
                </tr>
                @if($user->hasRole('Master Agent'))
                    <tr>
                        <th>@lang('Commission rate')</th>
                        <td>{{ $user->commission_rate ?? 2 }}%</td>
                    </tr>
                    <tr>
                        <th>@lang('Code Name')</th>
                        <td>{{ $user->referral_id }}</td>
                    </tr>
                @endif
                @if($user->masterAgent)
                    <tr>
                        <th>@lang('Referred by')</th>
                        <td>{{ $user->masterAgent->name}}</td>
                    </tr>
                @endif
                @if($user->hub)
                    <tr>
                        <th>@lang('Hub')</th>
                        <td>{{ $user->hub->name}}</td>
                    </tr>
                @endif
            </table>
                @if(!$user->email_verified_at)
                    @if(Auth::user()->hasRole('Virtual Hub') || Auth::user()->hasRole('Administrator'))
                        <div class="float-right">
                            <a href='{{route('admin.agents.approve',$user)}}' class='btn btn-sm btn-warning text-white'><i class='fa fa-check'></i> Approve</a>
                        </div>
                    @endif
                @endif
        </x-slot>

        <x-slot name="footer">

            <small class="float-right text-muted">
                <strong>@lang('Account Created'):</strong> @displayDate($user->created_at) ({{ $user->created_at->diffForHumans() }}),
                <strong>@lang('Last Updated'):</strong> @displayDate($user->updated_at) ({{ $user->updated_at->diffForHumans() }})

                @if($user->trashed())
                    <strong>@lang('Account Deleted'):</strong> @displayDate($user->deleted_at) ({{ $user->deleted_at->diffForHumans() }})
                @endif
            </small>
        </x-slot>
    </x-backend.card>
@endsection