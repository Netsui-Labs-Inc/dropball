@extends('frontend.layouts.tailwind.app')

@section('title', $bettingEvent->name)

@section('content')
    <div class="container pt-16 xl:pt-6 2xl:pt-6  mx-auto">
        <div class="flex flex-wrap">
            <div class="xl:w-3/5 w-full lg:pb-2 pb-0 xl:pb-2 relative">
                <div class="absolute top-1 z-20 w-full">
                    <livewire:frontend.video-header theme="tailwind" :bettingEventId="$bettingEvent->id" />
                </div>
                <div class="aspect-w-16 aspect-h-9 z-10 pt-2">
                    @if($bettingEvent->stream_url)
                        <iframe src="{{$bettingEvent->stream_url}}&autoplay=true"
                                allow="autoplay; picture-in-picture"
                                frameborder="0"></iframe>
                    @else
                        <h2 class="text-white text-center" style="width:100%;">No Stream Found</h2>
                    @endif
                </div>
                <div class="w-full mt-2 bg-gray-800 rounded py-2 hidden xl:block lg:block ">
                    <div class="px-2 md:px-6 lg:px-8">
                        <livewire:frontend.event-trend theme="tailwind" :bettingEventId="$bettingEvent->id" />
                    </div>
                </div>
            </div>
            <div class="xl:w-2/5 w-full xl:pl-6" x-data="{ tab: 'play'}">

                <div class="justify-between flex-wrap sm:block shadow rounded">
                    <div class="xl:w-full xl:mx-0 px-4 bg-gray-500 h-12">
                        <div class="flex items-center h-full">
                            <button :class="{'bg-yellow-500 text-gray-700' : tab === 'play'}" @click.prevent="tab = 'play'" class="w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 mr-2 focus:ring-indigo-800 rounded-md hover:bg-yellow-400 focus:bg-yellow-500 py-2 px-1 font-normal hover:text-gray-800 cursor-pointer text-sm"><i class="fas fa-dice"></i> BETTING ROUND</button>
                            <button :class="{'bg-yellow-500 text-gray-700' : tab === 'jackpot'}" @click.prevent="tab = 'jackpot'" class="w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-2 focus:ring-indigo-800 rounded-md hover:bg-yellow-400 focus:bg-yellow-500 py-2 px-1 rounded-md font-normal cursor-pointer text-sm"><i class="fas fa-crown"></i> JACKPOT</button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:py-6 bg-gray-800 rounded" x-show="tab === 'play'">
                    <div class="px-4 py-2 md:px-6 lg:px-8">
                        <livewire:frontend.event-betting-round theme="tailwind" :bettingEventId="$bettingEvent->id" />
                        <livewire:frontend.bet-form theme="tailwind" :bettingEventId="$bettingEvent->id" />
                    </div>
                </div>
                <div class="w-full md:py-6 bg-gray-800 rounded" x-show="tab === 'jackpot'">
                    <div class="px-4 py-2 md:px-6 lg:px-8">
                        <livewire:frontend.jackpot-tab theme="tailwind" :bettingEventId="$bettingEvent->id" />
                    </div>
                </div>
            </div>
            <div class="w-full mt-6 bg-gray-800 rounded py-2 xl:hidden lg:hidden">
                <div class="px-4 md:px-6 lg:px-8">
                    <livewire:frontend.event-trend theme="tailwind" :bettingEventId="$bettingEvent->id" />
                </div>
            </div>
        </div>
    </div>
@endsection
