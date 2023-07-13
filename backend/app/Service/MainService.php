<?php


namespace App\Service;


use App\Models\Option;
use Illuminate\Support\Collection;

interface MainService
{
    public function getCategories(): Collection;

    public function getBanner(): array;
}
