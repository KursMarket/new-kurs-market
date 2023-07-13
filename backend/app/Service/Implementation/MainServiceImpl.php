<?php


namespace App\Service\Implementation;


use App\Models\Category;
use App\Models\Option;
use App\Service\MainService;
use App\Traits\ClientRequest;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class MainServiceImpl implements MainService
{
    use ClientRequest;
    public function getCategories(): Collection
    {
        return Category::with('totalChildren')
            ->select(['categories.*', DB::raw('(select count(*) from courses left join category_course on (courses.id = category_course.course_id) where category_course.category_id = categories.id) as cnt')])
            ->whereNull('categories.parent_id')
            ->orderBy('categories.sort_order')
            ->groupBy('categories.id')
            ->orderByDesc('cnt')
            ->get()
            ;
    }

    public function getBanner(): array
    {
        $option = Option::where('option_name', Option::MAIN_BANNER_H1_TITLE)
            ->first();

        $data = [];

        if ($option) {
            $data['title'] = $option->option_value;
            $data['image'] = $option->getFirstMediaUrl('banner_options');
        }

        return $data;
    }
}
