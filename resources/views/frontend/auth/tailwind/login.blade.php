@extends('frontend.layouts.tailwind.full')

@section('title', __('Login'))

@section('content')
    <section class="bg-gray-900 h-screen">
        <div class="mx-auto flex justify-center md:items-center relative md:h-full">
            <div class="absolute top-0 right-0 pt-2 mr-4">
                <svg width="200" height="144" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#DC2626" fill-rule="evenodd">
                        <rect width="4" height="4" rx="2" />
                        <rect x="23" width="4" height="4" rx="2" />
                        <rect x="45" width="4" height="4" rx="2" />
                        <rect x="68" width="4" height="4" rx="2" />
                        <rect x="90" width="4" height="4" rx="2" />
                        <rect x="113" width="4" height="4" rx="2" />
                        <rect x="135" width="4" height="4" rx="2" />
                        <rect x="158" width="4" height="4" rx="2" />
                        <rect x="181" width="4" height="4" rx="2" />
                        <rect x="203" width="4" height="4" rx="2" />
                        <rect y="18" width="4" height="4" rx="2" />
                        <rect x="23" y="18" width="4" height="4" rx="2" />
                        <rect x="45" y="18" width="4" height="4" rx="2" />
                        <rect x="68" y="18" width="4" height="4" rx="2" />
                        <rect x="90" y="18" width="4" height="4" rx="2" />
                        <rect x="113" y="18" width="4" height="4" rx="2" />
                        <rect x="135" y="18" width="4" height="4" rx="2" />
                        <rect x="158" y="18" width="4" height="4" rx="2" />
                        <rect x="181" y="18" width="4" height="4" rx="2" />
                        <rect x="203" y="18" width="4" height="4" rx="2" />
                        <rect y="35" width="4" height="4" rx="2" />
                        <rect x="23" y="35" width="4" height="4" rx="2" />
                        <rect x="45" y="35" width="4" height="4" rx="2" />
                        <rect x="68" y="35" width="4" height="4" rx="2" />
                        <rect x="90" y="35" width="4" height="4" rx="2" />
                        <rect x="113" y="35" width="4" height="4" rx="2" />
                        <rect x="135" y="35" width="4" height="4" rx="2" />
                        <rect x="158" y="35" width="4" height="4" rx="2" />
                        <rect x="181" y="35" width="4" height="4" rx="2" />
                        <rect x="203" y="35" width="4" height="4" rx="2" />
                        <rect y="53" width="4" height="4" rx="2" />
                        <rect x="23" y="53" width="4" height="4" rx="2" />
                        <rect x="45" y="53" width="4" height="4" rx="2" />
                        <rect x="68" y="53" width="4" height="4" rx="2" />
                        <rect x="90" y="53" width="4" height="4" rx="2" />
                        <rect x="113" y="53" width="4" height="4" rx="2" />
                        <rect x="135" y="53" width="4" height="4" rx="2" />
                        <rect x="158" y="53" width="4" height="4" rx="2" />
                        <rect x="181" y="53" width="4" height="4" rx="2" />
                        <rect x="203" y="53" width="4" height="4" rx="2" />
                        <rect y="70" width="4" height="4" rx="2" />
                        <rect x="23" y="70" width="4" height="4" rx="2" />
                        <rect x="45" y="70" width="4" height="4" rx="2" />
                        <rect x="68" y="70" width="4" height="4" rx="2" />
                        <rect x="90" y="70" width="4" height="4" rx="2" />
                        <rect x="113" y="70" width="4" height="4" rx="2" />
                        <rect x="135" y="70" width="4" height="4" rx="2" />
                        <rect x="158" y="70" width="4" height="4" rx="2" />
                        <rect x="181" y="70" width="4" height="4" rx="2" />
                        <rect x="203" y="70" width="4" height="4" rx="2" />
                        <rect y="88" width="4" height="4" rx="2" />
                        <rect x="23" y="88" width="4" height="4" rx="2" />
                        <rect x="45" y="88" width="4" height="4" rx="2" />
                        <rect x="68" y="88" width="4" height="4" rx="2" />
                        <rect x="90" y="88" width="4" height="4" rx="2" />
                        <rect x="113" y="88" width="4" height="4" rx="2" />
                        <rect x="135" y="88" width="4" height="4" rx="2" />
                        <rect x="158" y="88" width="4" height="4" rx="2" />
                        <rect x="181" y="88" width="4" height="4" rx="2" />
                        <rect x="203" y="88" width="4" height="4" rx="2" />
                        <rect y="105" width="4" height="4" rx="2" />
                        <rect x="23" y="105" width="4" height="4" rx="2" />
                        <rect x="45" y="105" width="4" height="4" rx="2" />
                        <rect x="68" y="105" width="4" height="4" rx="2" />
                        <rect x="90" y="105" width="4" height="4" rx="2" />
                        <rect x="113" y="105" width="4" height="4" rx="2" />
                        <rect x="135" y="105" width="4" height="4" rx="2" />
                        <rect x="158" y="105" width="4" height="4" rx="2" />
                        <rect x="181" y="105" width="4" height="4" rx="2" />
                        <rect x="203" y="105" width="4" height="4" rx="2" />
                        <rect y="123" width="4" height="4" rx="2" />
                        <rect x="23" y="123" width="4" height="4" rx="2" />
                        <rect x="45" y="123" width="4" height="4" rx="2" />
                        <rect x="68" y="123" width="4" height="4" rx="2" />
                        <rect x="90" y="123" width="4" height="4" rx="2" />
                        <rect x="113" y="123" width="4" height="4" rx="2" />
                        <rect x="135" y="123" width="4" height="4" rx="2" />
                        <rect x="158" y="123" width="4" height="4" rx="2" />
                        <rect x="181" y="123" width="4" height="4" rx="2" />
                        <rect x="203" y="123" width="4" height="4" rx="2" />
                        <rect y="140" width="4" height="4" rx="2" />
                        <rect x="23" y="140" width="4" height="4" rx="2" />
                        <rect x="45" y="140" width="4" height="4" rx="2" />
                        <rect x="68" y="140" width="4" height="4" rx="2" />
                        <rect x="90" y="140" width="4" height="4" rx="2" />
                        <rect x="113" y="140" width="4" height="4" rx="2" />
                        <rect x="135" y="140" width="4" height="4" rx="2" />
                        <rect x="158" y="140" width="4" height="4" rx="2" />
                        <rect x="181" y="140" width="4" height="4" rx="2" />
                        <rect x="203" y="140" width="4" height="4" rx="2" />
                    </g>
                </svg>
            </div>
                <x-forms.post :action="route('frontend.auth.login')" class="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-2 sm:px-0">

                <div class="px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
                    <h2 class="text-4xl text-gray-100 leading-tight pt-8"><span class="text-red-600">Kingpin</span> Gaming</h2>
                </div>
                <div class="pt-16 px-2 flex flex-col items-center justify-center">
                    <h3 class="text-2xl sm:text-3xl xl:text-2xl font-bold text-gray-100 leading-tight">Sign-in to your account</h3>
                </div>
                <div class="mt-12 w-full px-2 sm:px-6">
                    <div class="flex flex-col mt-5">
                        <label for="email" class="text-lg font-semibold text-gray-100 leading-tight">Email</label>
                        <input required name="email" id="email" class="@error('email') border-red-500 @enderror h-10 px-2 w-full rounded mt-2 text-gray-400 bg-gray-800 border-gray-700 focus:border-red-600 focus:outline-none focus:border border shadow" type="email" />
                        @error('email')
                        <p class="text-red-500 text-xs italic mt-4">
                            {{ $message }}
                        </p>
                        @enderror
                    </div>
                    <div class="flex flex-col mt-5">
                        <label for="password" class="text-lg font-semibold text-gray-100 fleading-tight">Password</label>
                        <input required name="password" id="password" class="@error('email') border-red-500 @enderror h-10 px-2 w-full rounded mt-2 text-gray-400 bg-gray-800 border-gray-700 focus:border-red-600 focus:outline-none focus:border  border shadow" type="password" />
                        @error('password')
                        <p class="text-red-500 text-xs italic mt-4">
                            {{ $message }}
                        </p>
                        @enderror
                    </div>
                </div>
                <div class="pt-6 w-full flex justify-between px-2 sm:px-6">
                    <div class="flex items-center">
                        <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2 bg-gray-800" type="checkbox" />
                        <label for="rememberme" class="text-xs text-gray-100">Remember Me</label>
                    </div>
                    <a class="text-xs text-red-600" href="{{route('frontend.auth.password.request')}}">Forgot Password?</a>
                </div>
                <div class="px-2 mb-16 sm:mb-56 md:mb-16 sm:px-6">
                    <button class="focus:outline-none w-full bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-8 py-3 text-sm mt-6">Login</button>
                    <p class="mt-16 text-xs text-center text-gray-100">Don’t Have An Account? <a class="underline text-red-600" href="{{route('frontend.auth.register')}}">Sign Up</a></p>
                </div>
            </x-forms.post>
            <div class="absolute bottom-0 left-0 pb-2 md:ml-4">
                <svg width="200" height="144" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#DC2626" fill-rule="evenodd">
                        <rect width="4" height="4" rx="2" />
                        <rect x="23" width="4" height="4" rx="2" />
                        <rect x="45" width="4" height="4" rx="2" />
                        <rect x="68" width="4" height="4" rx="2" />
                        <rect x="90" width="4" height="4" rx="2" />
                        <rect x="113" width="4" height="4" rx="2" />
                        <rect x="135" width="4" height="4" rx="2" />
                        <rect x="158" width="4" height="4" rx="2" />
                        <rect x="181" width="4" height="4" rx="2" />
                        <rect x="203" width="4" height="4" rx="2" />
                        <rect y="18" width="4" height="4" rx="2" />
                        <rect x="23" y="18" width="4" height="4" rx="2" />
                        <rect x="45" y="18" width="4" height="4" rx="2" />
                        <rect x="68" y="18" width="4" height="4" rx="2" />
                        <rect x="90" y="18" width="4" height="4" rx="2" />
                        <rect x="113" y="18" width="4" height="4" rx="2" />
                        <rect x="135" y="18" width="4" height="4" rx="2" />
                        <rect x="158" y="18" width="4" height="4" rx="2" />
                        <rect x="181" y="18" width="4" height="4" rx="2" />
                        <rect x="203" y="18" width="4" height="4" rx="2" />
                        <rect y="35" width="4" height="4" rx="2" />
                        <rect x="23" y="35" width="4" height="4" rx="2" />
                        <rect x="45" y="35" width="4" height="4" rx="2" />
                        <rect x="68" y="35" width="4" height="4" rx="2" />
                        <rect x="90" y="35" width="4" height="4" rx="2" />
                        <rect x="113" y="35" width="4" height="4" rx="2" />
                        <rect x="135" y="35" width="4" height="4" rx="2" />
                        <rect x="158" y="35" width="4" height="4" rx="2" />
                        <rect x="181" y="35" width="4" height="4" rx="2" />
                        <rect x="203" y="35" width="4" height="4" rx="2" />
                        <rect y="53" width="4" height="4" rx="2" />
                        <rect x="23" y="53" width="4" height="4" rx="2" />
                        <rect x="45" y="53" width="4" height="4" rx="2" />
                        <rect x="68" y="53" width="4" height="4" rx="2" />
                        <rect x="90" y="53" width="4" height="4" rx="2" />
                        <rect x="113" y="53" width="4" height="4" rx="2" />
                        <rect x="135" y="53" width="4" height="4" rx="2" />
                        <rect x="158" y="53" width="4" height="4" rx="2" />
                        <rect x="181" y="53" width="4" height="4" rx="2" />
                        <rect x="203" y="53" width="4" height="4" rx="2" />
                        <rect y="70" width="4" height="4" rx="2" />
                        <rect x="23" y="70" width="4" height="4" rx="2" />
                        <rect x="45" y="70" width="4" height="4" rx="2" />
                        <rect x="68" y="70" width="4" height="4" rx="2" />
                        <rect x="90" y="70" width="4" height="4" rx="2" />
                        <rect x="113" y="70" width="4" height="4" rx="2" />
                        <rect x="135" y="70" width="4" height="4" rx="2" />
                        <rect x="158" y="70" width="4" height="4" rx="2" />
                        <rect x="181" y="70" width="4" height="4" rx="2" />
                        <rect x="203" y="70" width="4" height="4" rx="2" />
                        <rect y="88" width="4" height="4" rx="2" />
                        <rect x="23" y="88" width="4" height="4" rx="2" />
                        <rect x="45" y="88" width="4" height="4" rx="2" />
                        <rect x="68" y="88" width="4" height="4" rx="2" />
                        <rect x="90" y="88" width="4" height="4" rx="2" />
                        <rect x="113" y="88" width="4" height="4" rx="2" />
                        <rect x="135" y="88" width="4" height="4" rx="2" />
                        <rect x="158" y="88" width="4" height="4" rx="2" />
                        <rect x="181" y="88" width="4" height="4" rx="2" />
                        <rect x="203" y="88" width="4" height="4" rx="2" />
                        <rect y="105" width="4" height="4" rx="2" />
                        <rect x="23" y="105" width="4" height="4" rx="2" />
                        <rect x="45" y="105" width="4" height="4" rx="2" />
                        <rect x="68" y="105" width="4" height="4" rx="2" />
                        <rect x="90" y="105" width="4" height="4" rx="2" />
                        <rect x="113" y="105" width="4" height="4" rx="2" />
                        <rect x="135" y="105" width="4" height="4" rx="2" />
                        <rect x="158" y="105" width="4" height="4" rx="2" />
                        <rect x="181" y="105" width="4" height="4" rx="2" />
                        <rect x="203" y="105" width="4" height="4" rx="2" />
                        <rect y="123" width="4" height="4" rx="2" />
                        <rect x="23" y="123" width="4" height="4" rx="2" />
                        <rect x="45" y="123" width="4" height="4" rx="2" />
                        <rect x="68" y="123" width="4" height="4" rx="2" />
                        <rect x="90" y="123" width="4" height="4" rx="2" />
                        <rect x="113" y="123" width="4" height="4" rx="2" />
                        <rect x="135" y="123" width="4" height="4" rx="2" />
                        <rect x="158" y="123" width="4" height="4" rx="2" />
                        <rect x="181" y="123" width="4" height="4" rx="2" />
                        <rect x="203" y="123" width="4" height="4" rx="2" />
                        <rect y="140" width="4" height="4" rx="2" />
                        <rect x="23" y="140" width="4" height="4" rx="2" />
                        <rect x="45" y="140" width="4" height="4" rx="2" />
                        <rect x="68" y="140" width="4" height="4" rx="2" />
                        <rect x="90" y="140" width="4" height="4" rx="2" />
                        <rect x="113" y="140" width="4" height="4" rx="2" />
                        <rect x="135" y="140" width="4" height="4" rx="2" />
                        <rect x="158" y="140" width="4" height="4" rx="2" />
                        <rect x="181" y="140" width="4" height="4" rx="2" />
                        <rect x="203" y="140" width="4" height="4" rx="2" />
                    </g>
                </svg>
            </div>
        </div>
    </section>
@endsection
@push('after-scripts')
    <script>
        var Alert = document.getElementById("alert");
        var close = document.getElementById("close-modal");
        Alert.style.transform = "translateY(-200%)";
        setTimeout(function () {
            Alert.style.transform = "translateY(0%)";
        }, 1000);
        function closeAlert() {
            Alert.style.transform = "translateY(-200%)";
        }
    </script>
@endpush
