<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\AuthException;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Service\AuthService;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /**
     * RegisterController constructor.
     * @param AuthService $authService
     */
    public function __construct(
        private AuthService $authService
    ) {}

    /**
     * @param RegisterRequest $request
     * @return UserResource
     * @throws AuthException
     */
    public function register(RegisterRequest $request): UserResource
    {
        $user = $this->authService->createUser($request);

        if (!$token = Auth::attempt( $request->only(['email', 'password']) )) {
            throw new AuthException("Ошибка авторизации!", "Invalid token!");
        }

        return (new UserResource($user))
            ->additional([
                'meta' => [
                    'token' => $token
                ]
            ])
            ;
    }
}
