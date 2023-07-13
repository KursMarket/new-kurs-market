<?php


namespace App\Service;

use App\Models\User;
use Illuminate\Http\Request;

interface AuthService
{
    public function createUser(Request $request): User;
}
