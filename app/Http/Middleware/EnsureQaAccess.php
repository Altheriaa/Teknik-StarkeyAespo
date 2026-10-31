<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

/**
 * Melindungi halaman Quality Assurance (SOP, Survey, Dokumen AMI, Dokumen Monev).
 * - Belum login      -> diarahkan ke /login (URL tujuan diingat)
 * - Akun nonaktif    -> otomatis dikeluarkan (logout) lalu diarahkan ke /login
 */
class EnsureQaAccess
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (! $user) {
            return redirect()->guest(route('login'));
        }

        if (! $user->canViewQa()) {
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return redirect()->route('login')->withErrors([
                'login' => 'Akun Anda tidak aktif atau tidak memiliki akses.',
            ]);
        }

        return $next($request);
    }
}