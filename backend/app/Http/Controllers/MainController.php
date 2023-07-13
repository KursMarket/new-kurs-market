<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Service\CommentService;
use App\Service\CourseService;
use App\Service\MainService;
use App\Service\OptionService;
use App\Service\UserService;
use Illuminate\Support\Facades\Log;

class MainController extends Controller
{
    /**
     * MainController constructor.
     * @param MainService $mainService
     * @param UserService $userService
     * @param CourseService $courseService
     * @param OptionService $optionService
     * @param CommentService $commentService
     */
    public function __construct(
        private MainService $mainService,
        private UserService $userService,
        private CourseService $courseService,
        private OptionService $optionService,
        private CommentService $commentService
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function getCategories(): array
    {
        $categories = $this->mainService->getCategories();
        $schoolsCount = $this->userService->countTotalSchools();
        $coursesTotal = $this->courseService->countTotalCourses();
        $banner = $this->mainService->getBanner();
        $cooperation = $this->optionService->getCooperationModule();
        $promo = $this->optionService->getPromoModule();
        $comments = $this->commentService->getHomePageComments();

        return [
            'categories'    => $categories,
            'schoolsCount'  => number_format($schoolsCount, 0, ' ', ' '),
            'coursesTotal'  => number_format($coursesTotal, 0, ' ', ' '),
            'bannerTitle'   => array_key_exists('title', $banner) ? $banner['title'] : '',
            'bannerImage'   => array_key_exists('image', $banner) ? $banner['image'] : '',
            'cooperation'   => $cooperation,
            'promo'         => $promo,
            'comments'      => $comments,
        ];
    }

    public function test()
    {
        dd(12345);
    }
}
