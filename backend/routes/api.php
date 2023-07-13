<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\SchoolController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::get('/user', [LoginController::class, 'user']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::get('/', [MainController::class, 'test']);

Route::group(['prefix' => 'schools'], function () {
    Route::get('/', [SchoolController::class, 'index']);
    Route::get('/{url}', [SchoolController::class, 'show']);
    Route::get('/categories/parent', [SchoolController::class, 'getCategoriesForFilter']);
});

Route::group(['prefix' => 'main'], function () {
    Route::get('/categories', [MainController::class, 'getCategories']);
});

Route::group(['prefix' => 'rating'], function () {
    Route::get('/get/{url}', [RatingController::class, 'getByUrl']);
    Route::get('/menu', [RatingController::class, 'getHeaderMenu']);
});

