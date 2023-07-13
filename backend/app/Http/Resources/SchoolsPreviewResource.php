<?php

namespace App\Http\Resources;

use App\Traits\ClientRequest;
use Illuminate\Http\Resources\Json\JsonResource;

class SchoolsPreviewResource extends JsonResource
{
    use ClientRequest;

    public function toArray($request): array
    {
        $user = $this->resource->user;
        return [
            'id' => $this->user_id,
            'title' => $this->name,
            'image' => $user->getFirstMediaUrl('school-preview'),
            'url' => $this->url,
            'totalCourses' => $this->courseTotal,
            'reviewTotal' => $this->reviewTotal,
        ];
    }
}
