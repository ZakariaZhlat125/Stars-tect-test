<?php

use App\Http\Controllers\api\Auth\AuthController;
use App\Http\Controllers\api\HouseController;
use App\Http\Controllers\api\UserController;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' =>  'cors'], function () {
    Route::get('house', [HouseController::class, 'index']);
    Route::get('house/{id}', [HouseController::class, 'show']);

    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
    });


    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('user-info', [UserController::class, 'userInfo']);
    });
});
