<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Http\Requests\UpdatePasswordRequest;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{

    public function updateProfile(ProfileRequest $request)
    {
        $request->user()->update([
            'name' => $request->name,
            'email' => $request->email
        ]);

        return back()->with('success', 'Profile updated successfully.');
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        $request->user()->update([
            'password' => Hash::make($request->password),
        ]);
        return back()->with('success', 'Password updated successfully.');
    }
}
