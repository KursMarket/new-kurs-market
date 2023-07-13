<?php


namespace App\Service\Implementation;


use App\Enums\ReviewStatus;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Service\CommentService;
use Illuminate\Support\Collection;

class CommentServiceImpl implements CommentService
{
    public function getHomePageComments(): Collection
    {
        return Comment::query()
            ->where(['show_on_home_page' => true, 'status' => ReviewStatus::PUBLISHED])
            ->orderBy('sort_order_on_home_page')
            ->get()
            ->map(fn(Comment $comment): CommentResource => new CommentResource($comment))
        ;
    }
}
