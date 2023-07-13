<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    const STATUS_ACTIVE = 'active';
    const DEFAULT_PER_PAGE = 16;
    protected $table = 'courses';
}
