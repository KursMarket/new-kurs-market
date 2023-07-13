<?php


namespace App\Repository\Implementation;


use App\Models\Tag;
use App\Repository\TagRepository;
use Illuminate\Database\Eloquent\Collection;

class TagRepositoryImpl implements TagRepository
{
    public function findAll(): ?Collection
    {
        return Tag::query()
            ->orderBy('sort_order')
            ->get();
    }
}
