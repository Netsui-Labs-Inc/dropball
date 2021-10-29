@if($user->isVerified())
    <a href='{{route('admin.players.info',$user)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> @lang('View')</a>
    <a href='{{route('admin.players.wallet',['sorts' => ['created_at' => 'desc'], 'player' => $user])}}' class='btn btn-sm btn-info text-white'><i class='fa fa-dollar-sign'></i> @lang('Wallet')</a>
    <a href='{{route('admin.players.bet-histories',['sorts' => ['created_at' => 'desc'], 'player' => $user])}}' class='btn btn-sm btn-warning text-white'><i class='fa fa-calendar'></i> @lang('Bet History')</a>
    <a href='{{route('admin.player.edit',$user)}}' class='btn btn-sm btn-success text-white'><i class='fa fa-edit'></i> @lang('Edit')</a>
@endif
@if(!$user->isVerified())
    <x-utils.form-button :action="route('admin.players.verify', $user)" button-class="btn btn-success btn-sm">@lang('Verify') </x-utils.form-button>
@endif
