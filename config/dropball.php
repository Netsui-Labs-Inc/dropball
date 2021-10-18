<?php

return [
    'stream_url_default' => env('STREAM_URL_DEFAULT','https://stream.peryapinoy.com:5443/WebRTCAppEE/play.html?name=323630156555518197017062&autoplay=true'),

    'jackpot' => [
        'minimum_streak' => 5,
    ],
    'minimum_withdrawal' => env('MINIMUM_WITHDRAWAL', 500),
    'streaming_minimum_balance' => env('STREAMING_MINIMUM_BALANCE', 50),
    'default_overall_commission_rate' => env('DEFAULT_OVERALL_COMMISSION', 3),
    'max_overall_commission' => env('MAX_OVER_ALL_COMMISSION', 10)
];
