<?php


namespace App\Service;

use App\Http\Resources\SchoolSingleResource;
use App\Models\School;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

interface SchoolService
{
    public function getWithPaginate(Request $request): ?Paginator;

    public function getFilterCategories(Request $request);

    public function getSingleBreadcrumbs(SchoolSingleResource $school): array;

    public function getByUrl(string $url): SchoolSingleResource;

    public function getSchoolCourses(SchoolSingleResource $school, Request $request): array;
}
