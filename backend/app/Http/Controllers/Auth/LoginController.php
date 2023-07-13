<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\AuthException;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Service\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * LoginController constructor.
     * @param UserService $userService
     */
    public function __construct(
        private UserService $userService,
    ) {}

    /**
     * @param LoginRequest $request
     * @return UserResource
     * @throws AuthException
     */
    public function login(LoginRequest $request): UserResource
    {
        if (!$token = Auth::attempt( $request->only(['email', 'password']) ) ) {
            throw new AuthException("Неверный логин и/или пароль");
        }

        return ( new UserResource($request->user()) )
            ->additional([
                'meta' => [
                    'token' => $token
                ]
            ])
            ;
    }

    /**
     * @param Request $request
     * @return UserResource
     */
    public function user(Request $request): UserResource
    {
        return new UserResource($request->user());
    }

    public function logout()
    {
        Auth::logout();
    }
}
