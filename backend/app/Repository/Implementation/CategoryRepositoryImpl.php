<?php


namespace App\Repository\Implementation;


use App\Models\Category;
use App\Repository\CategoryRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CategoryRepositoryImpl implements CategoryRepository
{
    public function getCategoriesForRating(): ?Collection
    {
        return Category::query()
            ->where('show_in_rating', true)
            ->orderBy('sort_order')
            ->get()
            ->keyBy('id')
            ;
    }

    public function findOneByUrl(string $url): Category|Builder
    {
        return Category::with('parent')
            ->where('url', $url)
            ->first()
            ;
    }
}
