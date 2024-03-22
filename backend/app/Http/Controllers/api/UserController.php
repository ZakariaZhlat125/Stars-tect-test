<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    protected $user;

    public function __construct(User $user)

    {
        $this->user = $user;
    }


    public function userInfo()
    {
        $user  = Auth::user();
        return successResponse('Success', $user, JsonResponse::HTTP_OK);
    }
}
