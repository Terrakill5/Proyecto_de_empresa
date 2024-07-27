<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\AuthController;
 use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\EmpresaController as AdminEmpresaController;
use App\Http\Controllers\Api\Admin\UserController;

use App\Http\Controllers\Api\client\EmpresaController;



Route::prefix('v1')->group(function (){
    //Publica
    //Route::get('/public/{slug}', FrontController::class, 'categoria');

    //::Auth

    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::apiResource('/admin/user', UserController::class);

    //Privadas
    Route::group(['middleware' => 'auth:sanctum'], function (){
        //auth::
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        //rol client
        Route::apiResource('/client/empresa', EmpresaController::class);
         //rol admin

         Route::apiResource('/admin/categoria', CategoriaController::class);
         Route::apiResource('/admin/empresa', AdminEmpresaController::class);
    });

});




/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */
