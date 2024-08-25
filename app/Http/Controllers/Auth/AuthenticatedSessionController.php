<?php

namespace App\Http\Controllers\Auth;
use Config;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        Auth::user()->token()->revoke();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['loggedout']);
    }

/**
 * It takes the email and password from the request, sends it to the Passport server, and returns the
 * response
 * 
 * @param Request request The request object.
 * 
 * @return The response is being returned as a json object.
 */
    public function login(Request $request): JsonResponse
    {
        $response = Http::asForm()->post(Config::get('passport.PASSPORT_LOGIN_ENDPOINT'), [
            'grant_type' => 'password',
            'client_id' => Config::get('passport.personal_access_client.id'),
            'client_secret' => Config::get('passport.personal_access_client.secret'),
            'username' => strtolower($request->email),
            'password' => $request->password,
            'scope' => '*',
        ]);


        $status = $response->getStatusCode();
        $code = json_decode($response->getBody()->getContents());
        if ($status == 200) {
            $user = \App\Models\User::where('email', strtolower($request->email))->first();
            if(!$user->hasVerifiedEmail()){
                return response()->json(['status' => 'Email not verified']);
            }
            return response()->json(['status' => 'Fine', 'user' => $user,
                'token' => $response['access_token'], 'passport' => $response]);
            //get the rest of the user and append the $response to it
        } else {
            return response()->json(['code'=>$code,'status' => $status,'data'=>$response]);
        }
    }
}
