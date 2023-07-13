<?php

namespace App\Http\Resources\Rating;

use Illuminate\Http\Resources\Json\JsonResource;

class MenuResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' =>  $this->title,
            'url' => $this->url,
            'parent' => $this->parent_id ?? 0,
            'children' => []
        ];
    }
}
