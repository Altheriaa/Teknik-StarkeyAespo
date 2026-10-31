<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \App\Http\Middleware\TrackVisitor::class,
        ]);

        // Middleware pelindung halaman Quality Assurance
        $middleware->alias([
            'qa' => \App\Http\Middleware\EnsureQaAccess::class,
        ]);

        // Tamu yang membuka halaman ber-middleware `auth` diarahkan ke login website
        // (panel Filament tetap memakai halaman login-nya sendiri).
        $middleware->redirectGuestsTo(fn () => route('login'));
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();