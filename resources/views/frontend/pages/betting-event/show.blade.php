@extends('frontend.layouts.app')

@section('title', $bettingEvent->name)

@section('content')
    <div class="container-fluid py-4">
        <div class="row justify-content-center">
            <div class="col-lg-12 col-xl-8 col-xx1-8 col-md-12 col-sm-12">
                <x-frontend.card bodyClass="bg-gradient-gray-dark"  headerClass="bg-gradient-primary">
                    <x-slot name="header">
                        <livewire:frontend.video-header :bettingEventId="$bettingEvent->id"></livewire:frontend.video-header>
                    </x-slot>
                    <x-slot name="body">
                        <div class="row justify-content-center text-center  jumbotron-fluid" style="min-height: 200px">
                            <h1 class="text-white" style="padding: 9em"><i class="fa fa-video"></i> Loading Video...</h1>
                        </div>
                    </x-slot>
                </x-frontend.card>
            </div>
            <div class="col-lg-12 col-xl-4 col-xx1-4 col-md-12 col-sm-12">
                <x-frontend.card headerClass="bg-gradient-default" bodyClass="bg-yellow-50">
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
