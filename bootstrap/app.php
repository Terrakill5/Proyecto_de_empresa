<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        api: __DIR__.'/../routes/api.php',
        apiPrefix: 'api/',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();
       /*  $middleware->group('api', [
             \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
             \Illuminate\Routing\Middleware\SubstituteBindings::class,
             \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
            // 'throttle:api',
           // \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ]); */
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
