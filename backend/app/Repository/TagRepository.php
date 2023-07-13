<?php


namespace App\Repository;


use Illuminate\Database\Eloquent\Collection;

interface TagRepository
{
    public function findAll(): ?Collection;
}
