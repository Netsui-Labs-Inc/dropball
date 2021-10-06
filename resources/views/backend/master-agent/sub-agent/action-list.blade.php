
@role('Master Agent')
<a href='{{route('admin.agents.info',$user)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> @lang('View') </a>
@else
<a href='{{route('admin.agents.info',$user)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> @lang('View') </a>
<a href='{{route('admin.agents.edit',$user)}}' class='btn btn-sm btn-warning text-white'><i class='fa fa-edit'></i> @lang('Edit')</a>
<a href='{{route('admin.agents.wallet',['sorts' => ['created_at' => 'desc'], 'agent' => $user])}}' class='btn btn-sm btn-info text-white'><i class='fa fa-dollar-sign'></i> @lang('Wallet')</a>
@endrole

