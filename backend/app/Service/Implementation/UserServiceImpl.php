<?php


namespace App\Service\Implementation;


use App\Models\School;
use App\Models\User;
use App\Service\UserService;

class UserServiceImpl implements UserService
{
    public function findUserByEmail(string $email): ?User
    {
        return User::where('email', $email)
            ->first()
            ;
    }

    public function countTotalSchools(): int
    {
        return School::leftJoin('users', 'schools.user_id', '=', 'users.id')
            ->where('users.status', User::STATUS_ACTIVE)
            ->count()
            ;
    }
}
