<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Option extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $table = 'options';
    public $timestamps = false;

    const MAIN_BANNER_H1_TITLE = 'main_banner_h1_title';
    const ADVANTAGES_BLOCK = 'advantages_block';
    const QUIZ_MODULE = 'quiz_module';
    const PROMO_MODULE = 'promo_module';
    const COLLABORATION_MODULE = 'collaboration_module';
}
