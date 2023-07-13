<?php


namespace App\Service\Implementation;


use App\Models\Role;
use App\Models\Student;
use App\Models\User;
use App\Service\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AuthServiceImpl implements AuthService
{

    public function createUser(Request $request): User
    {
        DB::beginTransaction();

        try {
            $user = User::create([
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => Role::STUDENT
            ]);

            $explodedEmail = explode('@', $request->email);

            Student::create([
                'user_id' => $user->id,
                'first_name' => $explodedEmail[0]
            ]);

            DB::commit();

            return $user;
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error("Register Error: {$exception->getMessage()}");
        }

    }
}
