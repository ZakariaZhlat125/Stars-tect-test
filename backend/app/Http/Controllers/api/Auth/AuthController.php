<?php

namespace App\Http\Controllers\api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Traits\User\AuthTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{


    use AuthTrait;


    protected $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public  function register(RegisterRequest $request)
    {
        try {
            $userData = $request->validated();
            $existingUser = $this->checkExistingUser($userData);
            if ($existingUser) {
                return errorResponse('User already exists.', [], JsonResponse::HTTP_CONFLICT);
            }

            $user = $this->user->create($userData);
            return successResponse('User created successfully.', $user, JsonResponse::HTTP_CREATED);
        } catch (\Exception $e) {
            return errorResponse('Failed to Create User', [], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function login(LoginRequest $request)
    {
        try {
            $credentials = $request->validated();
            if ($token = Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = JWTAuth::fromUser($user);
                return successResponse('Login successfully', ['user' => $user, 'token' => $token], JsonResponse::HTTP_OK);
            } else {
                return errorResponse('Unauthorized', [], JsonResponse::HTTP_UNAUTHORIZED);
            }
        } catch (\Exception $e) {
            return errorResponse('Internal Server Error.', [], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    private function checkExistingUser(array $userData)
    {
        if (isset($userData['email'])) {
            return $this->user->where('email', $userData['email'])->first();
        }
        return null;
    }
}
