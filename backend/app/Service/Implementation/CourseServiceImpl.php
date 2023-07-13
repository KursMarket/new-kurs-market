<?php


namespace App\Service\Implementation;


use App\Models\Course;
use App\Service\CourseService;

class CourseServiceImpl implements CourseService
{
    public function countTotalCourses(): int
    {
        return Course::where('status', Course::STATUS_ACTIVE)->count();
    }
}
