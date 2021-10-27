window.$ = window.jQuery = require('jquery');
window.Swal = require('sweetalert2');
// CoreUI
require('@coreui/coreui');
// Boilerplate
require('../bootstrap');
require('../plugins');
require('./eyecandy');
require('./alert');
require('argon-design-system-free/assets/js/argon-design-system.min.js');
import Echo from 'laravel-echo';
import AmendmentDetails from './amendment-details';

window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_ABLY_PUBLIC_KEY,
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
});


let amendmentDetails = new AmendmentDetails();
amendmentDetails.init();

datePickerId.max = new Date().toISOString().split("T")[0];
let min = $('.datepicker-min').val();
let newDate = new Date(Date.parse(min));
datePickerId.min = newDate.toISOString().split("T")[0];
