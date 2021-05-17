@extends('frontend.layouts.tailwind.app')

@section('title', $bettingEvent->name)

@section('content')
    <div class="container pt-20 xl:pt-6 2xl:pt-6  mx-auto">
        <div class="flex flex-wrap">
            <div class="xl:w-3/5 w-full lg:pb-2 pb-0 xl:pb-2 relative">
                <div class="absolute top-1 z-20 w-full">
                    <livewire:frontend.video-header theme="tailwind" :bettingEventId="$bettingEvent->id" />
                </div>
                <div class="aspect-w-16 aspect-h-9 z-10">
                    @if($bettingEvent->stream_url)
                        <iframe src="{{$bettingEvent->stream_url}}&autoplay=true"
                                allow="autoplay; picture-in-picture"
                                frameborder="0"></iframe>
                    @else
                        <h2 class="text-white text-center" style="height:59vh;width:100%;">No Stream Found</h2>
                    @endif
                </div>
            </div>
            <div class="xl:w-2/5 w-full py-0 xl:pl-6 ">
                <div class="w-full py-3 md:py-6 bg-gray-800 rounded">
                    <div class="px-2 md:px-6 lg:px-8">
                        <livewire:frontend.event-betting-round theme="tailwind" :bettingEventId="$bettingEvent->id" />
                        <livewire:frontend.bet-form theme="tailwind" :bettingEventId="$bettingEvent->id" />
                    </div>
                </div>
            </div>
            <div class="xl:w-3/5 w-full mt-6 bg-gray-800 rounded py-2">
                <div class="px-2 md:px-6 lg:px-8">
                    <livewire:frontend.event-trend theme="tailwind" :bettingEventId="$bettingEvent->id" />
                </div>
            </div>

        </div>
    </div>
@endsection
