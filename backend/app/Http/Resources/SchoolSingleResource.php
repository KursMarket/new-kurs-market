<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SchoolSingleResource extends JsonResource
{
    public function toArray($request): array
    {
        $user = $this->user;

        return [
            'id' => $this->user_id,
            'url' => $this->url,
            'sort_order' => $this->sort_order,
            'name' => $this->name,
            'short_title' => $this->short_title,
            'phone' => $this->phone,
            'partner_suffix' => $this->partner_suffix,
            'partner_postfix' => $this->partner_postfix,
            'description' => html_entity_decode($this->description, ENT_QUOTES, 'UTF-8'),
            'site_link' => $this->site_link,
            'site_link_text' => $this->site_link_text,
            'confirm_status' => $this->confirm_status,
            'meta_point' => $this->meta_point,
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'user' => new UserResource($user)
        ];
    }
}
