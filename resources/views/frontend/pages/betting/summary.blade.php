<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Round: #{{$round->id}} {{$bet['bet']}}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ mix('css/frontend.css') }}" rel="stylesheet">
</head>
<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
<body>
<div  class="flex-center position-ref full-height">
    <div class="content">
        <h1 class=" m-b-md">Current Time: {{\Carbon\Carbon::now()}}</h1>
        <h1 class=" m-b-md">Date: {{$event->schedule}}</h1>
        <h1 class=" m-b-md">Event: #{{$event->id}} - {{$event->name}}</h1>
        <h2 class="title m-b-md">Round: #{{$round->id}} - {!!$round->statusLabel()!!}</h2>
        <h1 class="title">Result: <strong style="color: {{$bet['color']}}">{{$bet['bet']}}</strong></h1>
        <p>{{$bet['total']}}</p>
    </div>
</div>
</body>
</html>
