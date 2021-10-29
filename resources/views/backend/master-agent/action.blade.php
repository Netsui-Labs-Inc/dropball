<a href='{{route('admin.master-agents.info',$user)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> @lang('View') </a>
<a href='{{route('admin.master-agents.edit',$user)}}' class='btn btn-sm btn-warning text-white'><i class='fa fa-edit'></i> @lang('Edit')</a>
<a href='{{route('admin.master-agents.wallet',['sorts' => ['created_at' => 'desc'], 'masterAgent' => $user])}}' class='btn btn-sm btn-info text-white'><i class='fa fa-dollar-sign'></i> @lang('Wallet')</a>

