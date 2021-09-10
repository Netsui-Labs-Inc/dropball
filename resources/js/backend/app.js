window.$ = window.jQuery = require('jquery');
import 'jquery-ui/ui/widgets/datepicker.js';
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
let datePicker = $('#datePickerId');
datePicker.max = new Date().toISOString().split("T")[0];
let min = $('.datepicker-min').val();
let newDate = new Date(Date.parse(min));
datePicker.min = newDate.toISOString().split("T")[0];



