<?php


namespace App\Service\Implementation;


use App\Enums\CourseStatus;
use App\Enums\ReviewStatus;
use App\Http\Resources\SchoolSingleResource;
use App\Models\Category;
use App\Models\Course;
use App\Models\School;
use App\Service\SchoolService;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SchoolServiceImpl implements SchoolService
{
    /**
     * @param Request $request
     * @return Paginator|null
     */
    public function getWithPaginate(Request $request): ?Paginator
    {
//        $schools = School::query()
//            ->select(['user_id', 'name'])
//            ->where(function ($q) {
//                $q->whereNull('url')->orWhere('url', '=', '');
//            })
//            ->get()->toBase();
//
//        foreach ($schools as $school) {
//            DB::table('schools')->where('user_id', $school->user_id)->update(['url' => Str::slug($school->name, '-')]);
//        }
//        exit;
        $show = $request->has('show')
            ? $request->show
            : School::DEFAULT_PER_PAGES
            ;
        $results = School::query()
            ->select([
                'schools.*',
                DB::raw("(select count(*) from courses where courses.school_id = schools.user_id and courses.status = '". CourseStatus::ACTIVE ."') as courseTotal"),
                DB::raw("(select count(*) from reviews where schools.user_id = reviews.school_id and reviews.status = '". ReviewStatus::PUBLISHED ."') as reviewTotal")
            ])
            ->orderBy('sort_order')
            ->where('confirm_status', School::ACTIVE_STATUS)
            ;

        if ($request->has('search') && $request->search) {
            $results
                ->where(DB::raw('lcase(name)'), 'like', '%'. Str::lower($request->search) .'%')
                ->orWhere(DB::raw('lcase(short_title)'), 'like', Str::lower($request->search));
        }

        if ($request->has('category_id') && $request->category_id) {
            $ids = $this->getCourseIdsByCategoryId((int)$request->category_id);
            $results->whereIn('id', $ids);
        }

        return $results->paginate($show);
    }

    /**
     * @param Request $request
     * @return Collection|array
     */
    public function getFilterCategories(Request $request): Collection|array
    {
        return Category::query()
            ->select(['id', 'title'])
            ->whereNull('parent_id')
            ->get()
            ;
    }

    /**
     * @param int $category_id
     * @return array
     */
    private function getCourseIdsByCategoryId(int $category_id): array
    {
        $courses = DB::table('category_course')
            ->select('course_id')
            ->where('category_id', $category_id)
            ->get()
            ->toBase()
            ;
        $ids = [];

        if ($courses->isNotEmpty()) {
            foreach ($courses as $course) {
                $ids[] = $course->course_id;
            }
        }

        return $ids;
    }

    /**
     * @param SchoolSingleResource $school
     * @return array
     */
    public function getSingleBreadcrumbs(SchoolSingleResource $school): array
    {
        $breadcrumbs = [];

        $breadcrumbs[] = [
            'title'     => 'Главная',
            'url_name'  => '',
            'path'      => '/'
        ];

        $breadcrumbs[] = [
            'title' => 'Все школы',
            'url_name' => '',
            'path' => '/schools'
        ];

        $breadcrumbs[] = [
            'title' => $school->name,
            'url_name' => '',
            'path' => ''
        ];

        return $breadcrumbs;
    }

    /**
     * @param string|null $url
     * @return SchoolSingleResource
     */
    public function getByUrl(?string $url): SchoolSingleResource
    {
        $school = School::query()
            ->with(['user'])
            ->where('url', $url)
            ->first()
            ;

        return new SchoolSingleResource($school);
    }

    /**
     * @param SchoolSingleResource $school
     * @param Request $request
     * @return array
     */
    public function getSchoolCourses(SchoolSingleResource $school, Request $request): array
    {
        $courses = $school->courses();
        $current_page = $request->has('current_page') ? $request->current_page : 1;
        $limit = $request->has('per_page') ? $request->per_page : Course::DEFAULT_PER_PAGE;
        $offset = $current_page === 0 ? $current_page * $limit : 0;

        return [
            'results'       => $courses->limit($limit)->offset($offset)->get(),
            'total'         => $courses->count(),
            'current_page'  => $current_page
        ];
    }
}
