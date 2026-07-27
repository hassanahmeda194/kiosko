<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {}


    public function loginPage()
    {
        return Inertia::render('Auth/Login');
    }


    public function login(LoginRequest $request)
    {
        if (! $this->authService->login($request->validated())) {
            return back()->with('error', 'Invalid credentials.');
        }

        $request->session()->regenerate();
        return redirect()->route('dashboard')->with('success', 'Login successful.');
    }

    public function registerPage()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(RegisterRequest $request)
    {
        $this->authService->register($request->validated());
        return redirect()->route('login');
    }

    public function logout(Request $request)
    {
        $this->authService->logout();
        return redirect()->route('login')->with('success' , 'Logout Successfully!');
    }
}
