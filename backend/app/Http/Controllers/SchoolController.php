<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryFilterSchoolResource;
use App\Http\Resources\SchoolsPreviewResource;
use App\Models\Course;
use App\Service\SchoolService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SchoolController extends Controller
{
    /**
     * SchoolController constructor.
     *
     * @param SchoolService $schoolService
     */
    public function __construct(
        private SchoolService $schoolService,
    ) {}

    /**
     * @param Request $request
     * @return ResourceCollection
     */
    public function index(Request $request): ResourceCollection
    {
        $schools = $this->schoolService->getWithPaginate($request);

        return SchoolsPreviewResource::collection($schools);
    }

    /**
     * @param Request $request
     * @return ResourceCollection
     */
    public function getCategoriesForFilter(Request $request): ResourceCollection
    {
        $categories = $this->schoolService->getFilterCategories($request);

        return CategoryFilterSchoolResource::collection($categories);
    }

    /**
     * @param Request $request
     * @param string $url
     * @return array
     */
    public function show(Request $request, string $url): array
    {
        $school = $this->schoolService->getByUrl($url);

        $breadcrumbs = $this->schoolService->getSingleBreadcrumbs($school);

        $courses = $this->schoolService->getSchoolCourses($school, $request);



        return [
            'breadcrumbs'   => $breadcrumbs,
            'school'        => $school,
            'courses_total' => $courses['total'],
            'courses'       => $courses['results'],
            'current_page'  => $courses['current_page'],
        ];
    }
}
