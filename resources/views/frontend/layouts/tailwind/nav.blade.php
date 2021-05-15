<div class="h-full w-full z-30">
    <!-- Code block starts -->
    <nav class="w-full bg-gray-800 hidden xl:block shadow">
        <div class="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
            <div class="flex items-center">
                <div class="mr-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#DC2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <circle cx="6.5" cy="17" r="4" />
                        <circle cx="17.5" cy="17" r="4" />
                    </svg>
                    <h3 class="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block"><strong class="text-red-600">PULA</strong> PUTI</h3>
                </div>
                <ul class="hidden xl:flex items-center h-full">
                    <li class="cursor-pointer h-full flex items-center text-sm text-yellow-500 tracking-normal transition duration-150 ease-in-out">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="4" y="4" width="6" height="6" rx="1" />
                                        <rect x="14" y="4" width="6" height="6" rx="1" />
                                        <rect x="4" y="14" width="6" height="6" rx="1" />
                                        <rect x="14" y="14" width="6" height="6" rx="1" />
                                    </svg>
                                </span>
                        Dashboard
                    </li>
                    <li class="cursor-pointer h-full flex items-center text-sm hover:text-yellow-500 text-white mx-10 tracking-normal transition duration-150 ease-in-out">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="3" y1="21" x2="21" y2="21" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <polyline points="5 6 12 3 19 6" />
                                <line x1="4" y1="10" x2="4" y2="21" />
                                <line x1="20" y1="10" x2="20" y2="21" />
                                <line x1="8" y1="14" x2="8" y2="17" />
                                <line x1="12" y1="14" x2="12" y2="17" />
                                <line x1="16" y1="14" x2="16" y2="17" />
                            </svg>
                        </span>
                        <x-utils.link :href="route('frontend.wallet.index')" :text="__('Withdrawal/Deposit')"/>
                    </li>
                    <li class="cursor-pointer h-full flex items-center text-sm hover:text-yellow-500 text-white mr-10 tracking-normal transition duration-150 ease-in-out">
                        <span class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="12 8 12 12 14 14" />
                                <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                            </svg>
                        </span>
                        <x-utils.link :href="route('frontend.bets.index')" :text="__('Bet History')"/>
                    </li>
                </ul>
            </div>
            <div class="h-full hidden xl:flex items-center justify-end">
                <div class="h-full flex">
                    <div class="flex items-center pl-8 relative cursor-pointer" onclick="dropdownHandler(this)">
                        <ul class="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 hidden">
                            <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <span class="ml-2">
                                        <x-utils.link :href="route('frontend.user.account')" :text="__('My Profile')" />
                                    </span>
                                </div>
                            </li>
                            <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-500 flex items-center focus:text-yellow-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                                <span class="ml-2">
                                    <x-utils.link
                                        :text="__('Logout')"
                                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                    <x-slot name="text">
                                        @lang('Logout')
                                        <x-forms.post :action="route('frontend.auth.logout')" id="logout-form" class="d-none" />
                                    </x-slot>
                            </x-utils.link>
                                </span>
                            </li>
                        </ul>
                        <img class="rounded h-10 w-10 object-cover" src="{{ $logged_in_user->avatar }}" alt="logo" />
                        <p class="text-white text-sm ml-2">{{ $logged_in_user->name }} </p>
                    </div>
                </div>
            </div>
            <div class="flex items-center xl:hidden">
                <ul class="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                    <li class="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                            </svg>
                            <span class="ml-2 font-bold">
                                 <x-utils.link :href="route('frontend.user.dashboard')" :text="__('Dashboard')"/>
                            </span>
                        </div>
                    </li>
                    <li class="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="3" y1="21" x2="21" y2="21" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <polyline points="5 6 12 3 19 6" />
                                <line x1="4" y1="10" x2="4" y2="21" />
                                <line x1="20" y1="10" x2="20" y2="21" />
                                <line x1="8" y1="14" x2="8" y2="17" />
                                <line x1="12" y1="14" x2="12" y2="17" />
                                <line x1="16" y1="14" x2="16" y2="17" />
                            </svg>
                            <span class="ml-2 font-bold">
                                <x-utils.link :href="route('frontend.wallet.index')" :text="__('Withdrawal/Deposit')"/>
                            </span>
                        </div>
                    </li>
                    <li class="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 flex items-center focus:text-yellow-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                            <circle cx="12" cy="12" r="9"></circle>
                        </svg>
                        <span class="ml-2 font-bold"><x-utils.link :href="route('frontend.bets.index')" :text="__('Bet History')"/></span>
                    </li>

                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow-500 flex items-center focus:text-yellow-500 focus:outline-none">
                        <div class="flex items-center">
                            <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                <img class="rounded h-10 w-10 object-cover" src="{{ $logged_in_user->avatar }}" alt="logo" />
                            </div>
                            <p class="text-sm ml-2 cursor-pointer">
                                {{ $logged_in_user->name }}
                            </p>
                            <div class="sm:ml-2 text-white relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span class="ml-2">
                                <x-utils.link :href="route('frontend.user.account')" :text="__('My Profile')" />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar -->
    <nav>
        <div class="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#DC2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <circle cx="6.5" cy="17" r="4" />
                    <circle cx="17.5" cy="17" r="4" />
                </svg>
            </div>
            <p class="text-base text-white font-bold tracking-normal leading-tight "><strong class="text-red-600">PULA</strong> PUTI</p>
            <div>
                <div id="menu" class="text-white" onclick="sidebarHandler(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
        <!--Mobile responsive sidebar-->
        <div class="absolute w-full h-full transform -translate-x-full z-40 xl:hidden" id="mobile-nav">
            <div class="bg-gray-800 opacity-50 w-full h-full" onclick="sidebarHandler(false)"></div>
            <div class="w-64 z-40 overflow-y-auto fixed z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                <div class="px-6 h-full">
                    <div class="flex flex-col justify-between h-full w-full">
                        <div>
                            <div class="mt-6 flex w-full items-center justify-between">
                                <div class="flex items-center justify-between w-full">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#DC2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="7" r="4" />
                                        <circle cx="6.5" cy="17" r="4" />
                                        <circle cx="17.5" cy="17" r="4" />
                                        </svg>
                                        <p class="text-base  text-white ml-3"><strong class="text-red-600">PULA</strong> PUTI</p>
                                    </div>
                                    <div id="cross" class="text-white" onclick="sidebarHandler(false)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ul class="f-m-m">
                                    <li class="text-white pt-10">
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 md:w-8 md:h-8 text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                                </svg>
                                            </div>
                                            <p class="text-yellow-500 xl:text-base text-base ml-3">
                                                <x-utils.link :href="route('frontend.user.dashboard')" :text="__('Dashboard')"/>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="text-white pt-8">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="w-6 h-6 md:w-8 md:h-8 text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <line x1="3" y1="21" x2="21" y2="21" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                        <polyline points="5 6 12 3 19 6" />
                                                        <line x1="4" y1="10" x2="4" y2="21" />
                                                        <line x1="20" y1="10" x2="20" y2="21" />
                                                        <line x1="8" y1="14" x2="8" y2="17" />
                                                        <line x1="12" y1="14" x2="12" y2="17" />
                                                        <line x1="16" y1="14" x2="16" y2="17" />
                                                    </svg>
                                                </div>
                                                <p class="text-white xl:text-base  text-base ml-3">
                                                    <x-utils.link :href="route('frontend.wallet.index')" :text="__('Withdrawal/Deposit')"/>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="text-white pt-8">
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 md:w-8 md:h-8 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <polyline points="12 8 12 12 14 14" />
                                                    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                                                </svg>
                                            </div>
                                            <p class="text-white xl:text-base text-base ml-3">
                                                <x-utils.link :href="route('frontend.bets.index')" :text="__('Bet History')"/>
                                            </p>
                                        </div>
                                    </li>
                            </ul>
                        </div>
                        <div class="w-full pt-4">

                            <div class="border-t border-gray-700">
                                <div class="w-full flex items-center justify-between pt-5 pb-3">
                                    <div class="flex items-center">
                                        <img alt="profile-pic" src="{{ $logged_in_user->avatar }}" class="w-8 h-8 rounded-md" />
                                        <p class=" text-white text-base leading-4 ml-2">
                                            <x-utils.link :href="route('frontend.user.account')" :text="$logged_in_user->name" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- Sidebar ends -->
    <!-- Code block ends -->
</div>

@push('after-scripts')
<script>
    function dropdownHandler(element) {
        let single = element.getElementsByTagName("ul")[0];
        single.classList.toggle("hidden");
    }
    function MenuHandler(el, val) {
        let MainList = el.parentElement.parentElement.getElementsByTagName("ul")[0];
        let closeIcon = el.parentElement.parentElement.getElementsByClassName("close-m-menu")[0];
        let showIcon = el.parentElement.parentElement.getElementsByClassName("show-m-menu")[0];
        if (val) {
            MainList.classList.remove("hidden");
            el.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        } else {
            showIcon.classList.remove("hidden");
            MainList.classList.add("hidden");
            el.classList.add("hidden");
        }
    }
    function searchHandler(element) {
        let Input = element.parentElement.getElementsByTagName("input")[0];
        Input.classList.toggle("w-0");
    }
    // ------------------------------------------------------
    let sideBar = document.getElementById("mobile-nav");
    let menu = document.getElementById("menu");
    let cross = document.getElementById("cross");
    const sidebarHandler = (check) => {
        if (check) {
            sideBar.style.transform = "translateX(0px)";
            menu.classList.add("hidden");
            cross.classList.remove("hidden");
        } else {
            sideBar.style.transform = "translateX(-100%)";
            menu.classList.remove("hidden");
            cross.classList.add("hidden");
        }
    };

</script>
@endpush
