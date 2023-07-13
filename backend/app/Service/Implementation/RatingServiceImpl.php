<?php


namespace App\Service\Implementation;

use App\Http\Resources\Rating\MenuResource;
use App\Repository\CategoryRepository;
use App\Service\RatingService;
use App\Traits\ArrayCollectionTrait;

class RatingServiceImpl implements RatingService
{
    use ArrayCollectionTrait;
    /**
     * RatingServiceImpl constructor.
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(
        private CategoryRepository $categoryRepository
    ){}

    /**
     * @return array
     */
    public function getHeaderMenu(): array
    {
        $menus = [];
        $menuFromDB = $this->categoryRepository->getCategoriesForRating();

        if ($menuFromDB->isNotEmpty()) {
            $menus = MenuResource::collection($menuFromDB)->toArray(app('request'));
        }


        return $this->mapTreeBuilding($menus);
    }

    /**
     * @param string|null $url
     * @return array
     */
    public function getOneByUrl(?string $url): array
    {
        if (!$url) {

        }

        $category = $this->categoryRepository->findOneByUrl($url);
        return [
            'category' => $category
        ];
    }
}
