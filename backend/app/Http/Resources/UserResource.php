<?php

namespace App\Http\Resources;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use JsonSerializable;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        $user = $request->user();
        $role = $user->role;

        return [
            'email' => $this->email,
            'name' => $role->id === Role::STUDENT
                ? $user->student->first_name
                : $user->schools->name,
            'created_at' => null !== $this->created_at
                ? Carbon::parse($this->created_at)->format('Y-m-d')
                : '',
            'role' => $role->alias
        ];
    }
}
