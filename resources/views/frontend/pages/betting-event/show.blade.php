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
                        <iframe src="https://stream.gosurge.ph:5443/LiveApp/play.html?name=785041316264222321196437" frameborder="0" allowfullscreen
                                onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:59vh;width:100%;border:none;overflow:hidden;"
                        ></iframe>
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
