<?php


namespace App\Repository;


use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

interface CategoryRepository
{
    public function getCategoriesForRating(): ?Collection;

    public function findOneByUrl(string $url): Category|Builder;
}
