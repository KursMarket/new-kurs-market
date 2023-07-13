<?php

namespace App\Http\Resources;

use App\Traits\ClientRequest;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class CommentResource extends JsonResource
{
    use ClientRequest;

    public function toArray($request): array
    {
        $user = $this->user;
        $author = $user?->student;
        $school = $this->school;
        $course = $this->course;
        return [
            'author' => $author ? $author->first_name : 'No Name',
            'grade' => $this->grade,
            'rating' => number_format((((float)$this->grade * 20) + $this->grade/4), 2, '.', ''),
            'date' => Carbon::parse($this->created_at)->format('d.m.Y'),
            'text' => html_entity_decode($this->text, ENT_QUOTES, 'UTF-8'),
            'course' => $course->title,
            'school_id' => $school->user_id,
            'school_name' => $school->short_title ? $school->short_title : $school->name,
            'school_image' => $user->getFirstMediaUrl('school-preview')
        ];
    }
}
