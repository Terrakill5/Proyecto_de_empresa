<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {


        // try {
        $response = ["success" => false];

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']);
        $user = User::create($input);
        $user->assignRole('client');

        $response["success"] = true;
        $response["token"] = $user->createToken("jose")->plainTextToken;
        //return $input;
        return response()->json($response, 200);
        // } catch (\Throwable $th) {
        // return $th->getMessage();
        //return $th->getTraceAsString();
        //    return Log::error($th->getMessage(),[$th->getTraceAsString()]);

        // }



    }

    public function login(Request $request)
    {
        // try {
        $response = ["success" => false];

        $validator = Validator::make($request->all(), [

            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            $response = ["error" => $validator->errors()];
            return response()->json($response, 200);
        }

        if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = auth()->user();
            $user->hasRole('client');

            $response['token'] = $user->createToken("jose")->plainTextToken;
            $response['user'] = $user;
            $response['message'] = "logeado";
            $response['success'] = true;
        }

        return response()->json($response, 200);
        // } catch (\Throwable $th) {
        //    return $th->getMessage();
        //}
    }

    public function logout()
    {
        $response = ["success" => false];
        auth()->user()->tokens()->delete();
        $response = [
            "success" => true,
            "message" => "Sesion cerrada"
        ];
        return response()->json($response, 200);
    }
}
