<?php

return [
    'stream_url_default' => env('STREAM_URL_DEFAULT','https://stream.peryapinoy.com:5443/WebRTCAppEE/play.html?name=323630156555518197017062&autoplay=true'),

    'jackpot' => [
        'minimum_streak' => 5,
    ],
    'minimum_withdrawal' => env('MINIMUM_WITHDRAWAL', 500),
    'fiat' => env('FIAT_URL', 'http://devapi.buy2play.biz/fiat-payment'),
    'crypto' => env('CRYPTO_URL', 'http://devapi.buy2play.biz/crypto-payment'),
    'b2play_key' => env('B2PLAY_KEY', '')
];
