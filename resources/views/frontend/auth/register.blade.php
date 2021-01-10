@extends('frontend.layouts.full')

@section('title', __('Register'))

@section('content')
    <div class="header bg-gradient-danger py-4 py-lg-5 pt-lg-5">
        <div class="container">
            <div class="header-body text-center mb-7">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                        <h1 class="text-white text-uppercase"> Create an Account</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>
    <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <div class="card bg-secondary shadow border-0 mb-2">
                    <div class="card-header bg-default pb-2">
                        <div class="btn-wrapper text-center">
                            <h2 class="text-danger text-uppercase"> Register</h2>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-4">
                        @include('includes.partials.messages')

                        <x-forms.post :action="route('frontend.auth.register')">
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                    </div>
                                    <input name="name" class="form-control" placeholder="Name" type="text"  value="{{ old('name') }}">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                    </div>
                                    <input name="email" class="form-control" placeholder="Email" type="email"  value="{{ old('email') }}">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                                    </div>
                                    <input name="referral_id" class="form-control" placeholder="Referral ID" type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input name="password" class="form-control" placeholder="Password" type="password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input name="password_confirmation" class="form-control" placeholder="Password Confirmation" type="password" >
                                </div>
                            </div>
                            <div class="row my-4">
                                <div class="col-12">
                                    <div class="custom-control custom-control-alternative custom-checkbox">
                                        <input class="custom-control-input" type="checkbox"  name="terms" value="1" id="terms" >
                                        <label class="custom-control-label" for="terms">
                                            <span class="text-muted">I agree with the <a href="{{ route('frontend.pages.terms') }}">Privacy Policy</a></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-default mt-2">Create account</button>
                            </div>
                        </x-forms.post>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-right">
                        <a href="{{route('frontend.auth.login')}}" class="text-light"><small>Login to existing account</small></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
