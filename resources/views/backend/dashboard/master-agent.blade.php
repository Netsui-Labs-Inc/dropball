@extends('backend.layouts.app')

@section('title', __('Dashboard - Master Agent'))

@section('content')
    <h2 class="mb-4">Welcome Master Agent {{$logged_in_user->name}}</h2>
    <div class="row">
        <div class="col-12 col-md-6">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($user->balanceFloat ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Credit Balance")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12 col-md-6">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-success">{{number_format($user->getWallet('income-wallet')->balanceFloat ?? 0)}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Income Balance")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12 col-md-6">
            <x-backend.card>
                <x-slot name="body">
                    <div class="text-value-lg text-info">{{number_format($user->referrals()->count())}}</div>
                    <small class="text-muted text-uppercase font-weight-bold">@lang("Total Players")</small>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12 col-md-6">
            <x-backend.card>
                <x-slot name="body">
                    <small class="text-muted text-uppercase font-weight-bold">Invite players and earn commissions</small>
                    <div class="text-value-lg text-info">
                        <div class="input-group">
                            <input type="text"  id="referralLink" class="form-control " value="{{route('frontend.auth.register', ['referral' => $user->referral_id])}}" aria-label="referral">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" onclick="copyReferralLink()">Copy</button>
                            </div>
                        </div>
                    </div>
                </x-slot>
            </x-backend.card>
        </div>
        <div class="col-12">
            <x-frontend.card headerClass="bg-info">
                <x-slot name="header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="h3 text-white mb-0"> @lang("Master Agent Commission History")</h3>
                        </div>
                    </div>
                </x-slot>
                <x-slot name="body">
                    <livewire:commissions-table :model="$user" />
                </x-slot>
            </x-frontend.card>
        </div>
    </div>
@endsection
@push('after-scripts')
    <script>
        function copyReferralLink() {
            /* Get the text field */
            var copyText = document.getElementById("referralLink");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy");
        }
    </script>
@endpush
