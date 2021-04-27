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
                        <video-js id=vid1 width=600 height=300 class="vjs-default-skin"  data-setup='{"fluid": true, "autoplay": true, "preload": "auto"}'>
                            <source src="https://d1han5hspwb3pi.cloudfront.net/stream/index.m3u8" type="application/x-mpegURL">
                        </video-js>
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
