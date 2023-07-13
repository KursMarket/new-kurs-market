<?php

namespace App\Providers;

use App\Service\AuthService;
use App\Service\ClientRequest;
use App\Service\CommentService;
use App\Service\CourseService;
use App\Service\Implementation\AuthServiceImpl;
use App\Service\Implementation\ClientRequestImpl;
use App\Service\Implementation\CommentServiceImpl;
use App\Service\Implementation\CourseServiceImpl;
use App\Service\Implementation\MainServiceImpl;
use App\Service\Implementation\OptionServiceImpl;
use App\Service\Implementation\RatingServiceImpl;
use App\Service\Implementation\SchoolServiceImpl;
use App\Service\Implementation\TagServiceImpl;
use App\Service\Implementation\UserServiceImpl;
use App\Service\MainService;
use App\Service\OptionService;
use App\Service\RatingService;
use App\Service\SchoolService;
use App\Service\TagService;
use App\Service\UserService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this
            ->app
            ->bind(
                MainService::class,
                MainServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                AuthService::class,
                AuthServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                UserService::class,
                UserServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                CourseService::class,
                CourseServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                OptionService::class,
                OptionServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                CommentService::class,
                CommentServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                SchoolService::class,
                SchoolServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                RatingService::class,
                RatingServiceImpl::class
            )
        ;

        $this
            ->app
            ->bind(
                TagService::class,
                TagServiceImpl::class
            )
        ;
    }
}
