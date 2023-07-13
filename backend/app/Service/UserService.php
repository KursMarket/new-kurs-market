<?php


namespace App\Service;


use App\Models\User;

interface UserService
{
    public function findUserByEmail(string $email): ?User;

    public function countTotalSchools(): int;
}
