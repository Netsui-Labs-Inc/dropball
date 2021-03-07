@extends('backend.layouts.app')

@section('title', __('My Account'))

@section('content')
    <div class="row">
        <div class="col-12">
                <x-backend.card headerClass="bg-primary text-white">
                    <x-slot name="header">
                        @lang('My Account')
                    </x-slot>

                    <x-slot name="body">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <x-utils.link
                                    :text="__('My Profile')"
                                    class="nav-link active"
                                    id="my-profile-tab"
                                    data-toggle="pill"
                                    href="#my-profile"
                                    role="tab"
                                    aria-controls="my-profile"
                                    aria-selected="true" />

                                <x-utils.link
                                    :text="__('Edit Information')"
                                    class="nav-link"
                                    id="information-tab"
                                    data-toggle="pill"
                                    href="#information"
                                    role="tab"
                                    aria-controls="information"
                                    aria-selected="false"/>

                                @if (! $logged_in_user->isSocial())
                                    <x-utils.link
                                        :text="__('Password')"
                                        class="nav-link"
                                        id="password-tab"
                                        data-toggle="pill"
                                        href="#password"
                                        role="tab"
                                        aria-controls="password"
                                        aria-selected="false" />
                                @endif
                        </nav>

                        <div class="tab-content" id="my-profile-tabsContent">
                            <div class="tab-pane fade pt-3 show active" id="my-profile" role="tabpanel" aria-labelledby="my-profile-tab">
                                @include('backend.auth.my-account.tabs.profile')
                            </div><!--tab-profile-->

                            <div class="tab-pane fade pt-3" id="information" role="tabpanel" aria-labelledby="information-tab">
                                @include('backend.auth.my-account.tabs.information')
                            </div><!--tab-information-->

                            @if (! $logged_in_user->isSocial())
                                <div class="tab-pane fade pt-3" id="password" role="tabpanel" aria-labelledby="password-tab">
                                    @include('backend.auth.my-account.tabs.password')
                                </div><!--tab-password-->
                            @endif
                        </div><!--tab-content-->
                    </x-slot>
                </x-backend.card>
            </div><!--col-md-10-->
        </div><!--row-->
@endsection
