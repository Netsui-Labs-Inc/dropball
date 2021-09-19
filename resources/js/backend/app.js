window.$ = window.jQuery = require('jquery');
window.Swal = require('sweetalert2');
// CoreUI
require('@coreui/coreui');
// Boilerplate
require('../plugins');
require('./alert');

import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_ABLY_PUBLIC_KEY,
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
});

datePickerId.max = new Date().toISOString().split("T")[0];
let min = $('.datepicker-min').val();
let newDate = new Date(Date.parse(min));
datePickerId.min = newDate.toISOString().split("T")[0];
