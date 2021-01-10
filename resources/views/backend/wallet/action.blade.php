@if(!$transaction->confirmed)
    <x-utils.form-button :action="route('admin.wallet.confirm', $transaction)" button-class="btn btn-success btn-sm">Verify </x-utils.form-button>
@endif
