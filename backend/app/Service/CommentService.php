<?php


namespace App\Service;


use Illuminate\Support\Collection;

interface CommentService
{
    public function getHomePageComments(): Collection;
}
