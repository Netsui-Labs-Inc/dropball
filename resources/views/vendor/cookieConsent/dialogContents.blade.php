<div class="alert js-cookie-consent cookie-consent flex items-center justify-center px-4 mb-0 fixed w-full z-10 bottom-0">
    <div class=" transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between">
        <div class="flex flex-col items-center md:flex-row">
            <div class="mr-3 p-4 bg-yellow-400 rounded md:rounded-tr-none md:rounded-br-none text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path class="heroicon-ui" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
            </div>
            <p class="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">Attention</p>
            <div class="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
            <p class="cookie-consent__message text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">{!! trans('cookieConsent::texts.message') !!}</p>
        </div>
        <div class="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
            <span class="js-cookie-consent-agree cookie-consent__agree text-sm mr-4 font-bold cursor-pointer text-indigo-700 dark:text-indigo-600">
                                {{ trans('cookieConsent::texts.agree') }}
            </span>
            <span class="text-sm cursor-pointer text-gray-600 dark:text-gray-400 close-alert">Dismiss</span>
        </div>
    </div>
</div>
