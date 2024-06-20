<?php

//use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
//use Spatie\Permission\Models\Role;

//$role = Role::create(['name' => 'admin']);
//$role = Role::create(['name' => 'client']);

Route::get('/', function () {
    return view('welcome');
});
//Route::post('/auth/register', AuthController::class, 'register');
//Route::post('/auth/login', AuthController::class, 'login');
