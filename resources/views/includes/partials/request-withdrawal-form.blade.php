<x-utils.modal
        wire:ignore.self
        title="Request Withdrawal"
        type="form"
        targetId="requestWithdrawal"
        action="{{$route}}"
        submitBtn="Send Request"
    >
    <livewire:request-withdrawal-form
    :walletBalance="$walletBallance"
     />
</x-utils.modal>
