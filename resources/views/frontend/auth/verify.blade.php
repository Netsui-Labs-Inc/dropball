@extends('frontend.layouts.app')

@section('title', __('Verify Your E-mail Address'))

@section('content')
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <x-frontend.card>
                    <x-slot name="header">
                        @lang('Your Account is being processed')
                    </x-slot>

                    <x-slot name="body">
                        @lang('Before proceeding, please wait for the Master Agent to verify your account.')
                    </x-slot>
                </x-frontend.card>
            </div><!--col-md-8-->
        </div><!--row-->
    </div><!--container-->
@endsection
