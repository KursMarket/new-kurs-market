<?php


namespace App\Service\Implementation;


use App\Http\Resources\TagResource;
use App\Repository\TagRepository;
use App\Service\TagService;

class TagServiceImpl implements TagService
{
    /**
     * TagServiceImpl constructor.
     * @param TagRepository $tagRepository
     */
    public function __construct(
        private TagRepository $tagRepository
    ){}

    /**
     * @return array
     */
    public function getAllTags(): array
    {
        $tags = $this
            ->tagRepository
            ->findAll()
        ;

        return $tags->isNotEmpty()
            ? (TagResource::collection($tags))->toArray(app('request'))
            : []
            ;
    }
}
