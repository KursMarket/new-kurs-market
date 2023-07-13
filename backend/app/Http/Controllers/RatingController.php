<?php

namespace App\Http\Controllers;

use App\Service\RatingService;
use App\Service\TagService;
use App\Traits\ArrayCollectionTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    use ArrayCollectionTrait;

    /**
     * RatingController constructor.
     * @param RatingService $ratingService
     * @param TagService $tagService
     */
    public function __construct(
        private RatingService $ratingService,
        private TagService $tagService
    ){}

    /**
     * @return array
     */
    public function getHeaderMenu(): array
    {
        $allMenus = $this->ratingService->getHeaderMenu();

        return $this->arrayValuesRecursive($allMenus);
    }

    public function getByUrl(Request $request, string $url): JsonResponse
    {
        $rating = $this->ratingService->getOneByUrl($url);
        $tags = $this->tagService->getAllTags();

        return response()->json([
            'category' => $rating['category'],
            'tags' => $tags
        ]);
    }
}
