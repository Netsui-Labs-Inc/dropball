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
{{--                        <iframe src="https://player.twitch.tv/?channel=drofball&parent={{parse_url(url('/'),PHP_URL_HOST)}}" frameborder="0" allowfullscreen="true" scrolling="no" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:59vh;width:100%;border:none;overflow:hidden;"></iframe>--}}
                        <iframe src="https://iframe.dacast.com/live/dd17071c-6076-3869-9491-176e165230b7/75beea42-8328-7631-8583-e77fc2cd335b" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen style="height:59vh;width:100%;border:none;overflow:hidden;" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'></iframe>
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
