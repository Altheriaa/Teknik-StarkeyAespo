<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private const MAX_ATTEMPTS = 5;
    private const LOCK_SECONDS = 300;

    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'login' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string'],
        ], [
            'login.required' => 'Username wajib diisi.',
            'password.required' => 'Password wajib diisi.',
        ]);

        // Batasi percobaan login: 5x salah -> ditunda 5 menit (per username + IP)
        $throttleKey = Str::transliterate(Str::lower($data['login']) . '|' . $request->ip());

        if (RateLimiter::tooManyAttempts($throttleKey, self::MAX_ATTEMPTS)) {
            $seconds = RateLimiter::availableIn($throttleKey);

            throw ValidationException::withMessages([
                'login' => "Terlalu banyak percobaan login. Coba lagi dalam {$seconds} detik.",
            ]);
        }

        // Bisa login dengan username (akun QA) atau email (admin)
        $field = filter_var($data['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $attempt = Auth::guard('web')->attempt([
            $field => $data['login'],
            'password' => $data['password'],
            'is_active' => true,
        ]);

        if (! $attempt) {
            RateLimiter::hit($throttleKey, self::LOCK_SECONDS);

            // Pesan sengaja umum agar tidak membocorkan apakah username ada / nonaktif
            throw ValidationException::withMessages([
                'login' => 'Username atau password salah.',
            ]);
        }

        RateLimiter::clear($throttleKey);
        $request->session()->regenerate();

        // Ka. Prodi langsung diarahkan ke e-SPMI (pekerjaan utamanya di sana)
        $default = $request->user()->isKaprodi() ? '/e-spmi' : '/sop';

        return redirect()->intended($default);
    }

    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}