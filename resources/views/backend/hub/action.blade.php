@unlessrole('Processor')
<a href='{{route('admin.hubs.info',$hub)}}' class='btn btn-sm btn-primary text-white'><i class='fa fa-eye'></i> View Hub</a>
<a href='{{route('admin.hubs.edit',$hub)}}' class='btn btn-sm btn-warning text-white'><i class='fa fa-edit'></i> Edit Hub</a>
@endunlessrole
<a href='{{route('admin.hubs.wallet',$hub)}}' class='btn btn-sm btn-info text-white'><i class='fa fa-dollar-sign'></i> Transactions</a>

