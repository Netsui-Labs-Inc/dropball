@extends('frontend.layouts.app')

@section('title', $bettingEvent->name)

@section('content')
    <div class="container-fluid py-4 " >
        <div class="row justify-content-center">
            <div class="col-lg-12 col-xl-7 col-xx1-7 col-md-12 col-sm-12">
                <x-frontend.card bodyClass="bg-gradient-gray-dark p-0"  headerClass="bg-gradient-gray-dark">
                    <x-slot name="header">
                        <livewire:frontend.video-header :bettingEventId="$bettingEvent->id"></livewire:frontend.video-header>
                    </x-slot>
                    <x-slot name="body">
                            <div class="fb-video"
                                 data-href="https://www.facebook.com/eden.cruz.39948/videos/278115187212218/"
                                 data-autoplay="true"
                                 data-allowfullscreen="true"
                                 data-lazy="true"
                                 data-show-text="false">
                            </div>
                        <x-frontend.card class="bg-gradient-default mb-0" bodyClass="p-2">
                            <x-slot name="body">
                                <livewire:frontend.event-trend :bettingEventId="$bettingEvent->id"></livewire:frontend.event-trend>
                            </x-slot>
                        </x-frontend.card>
                    </x-slot>
                </x-frontend.card>
            </div>
            <div class="col-lg-12 col-xl-5 col-xx1-5 col-md-12 col-sm-12">
                <x-frontend.card headerClass="bg-gradient-gray-dark" bodyClass="bg-gradient-default">
                    <x-slot name="header">
                        <livewire:frontend.event-betting-round :bettingEventId="$bettingEvent->id"></livewire:frontend.event-betting-round>
                    </x-slot>
                    <x-slot name="body">
                        <livewire:frontend.bet-form :bettingEventId="$bettingEvent->id"></livewire:frontend.bet-form>
                    </x-slot>
                </x-frontend.card>
            </div><!--col-md-10-->
        </div><!--row-->
    </div><!--container-->
@endsection

@push('fb')
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=936172183880068" nonce="e3WMiCOm"></script>
@endpush
