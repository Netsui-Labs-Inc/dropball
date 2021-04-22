@if($user->isVerified())
    <a href='{{route('admin.players.info',$user)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> View Player</a>
    <a href='{{route('admin.players.wallet',$user)}}' class='btn btn-sm btn-info text-white'><i class='fa fa-dollar-sign'></i> Wallet</a>
@endif
@if(!$user->isVerified())
    <x-utils.form-button :action="route('admin.players.verify', $user)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
@endif
