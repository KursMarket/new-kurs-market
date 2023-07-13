<?php

namespace App\Providers;

use App\Repository\CategoryRepository;
use App\Repository\Implementation\CategoryRepositoryImpl;
use App\Repository\Implementation\TagRepositoryImpl;
use App\Repository\TagRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this
            ->app
            ->bind(
                CategoryRepository::class,
                CategoryRepositoryImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                TagRepository::class,
                TagRepositoryImpl::class
            )
        ;
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
