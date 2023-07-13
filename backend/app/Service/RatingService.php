<?php


namespace App\Service;


interface RatingService
{
    public function getHeaderMenu(): array;

    public function getOneByUrl(?string $url): array;
}
