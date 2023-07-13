<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\DB;

class Category extends Model
{
    use HasFactory;

    public function totalChildren(): HasMany
    {
        return $this->hasMany(
            self::class,
            'parent_id',
            'id'
        )
            ->select(['categories.*', DB::raw('count(cs.id) as cnt')])
            ->leftJoin('category_course as c2c', 'categories.id', '=', 'c2c.category_id')
            ->leftJoin('courses as cs', 'cs.id', '=', 'c2c.course_id')
            ->groupBy('categories.title')
            ->orderByDesc('cnt')
            ;
    }

    public function parent(): HasOne
    {
        return $this->hasOne(self::class, 'id', 'parent_id');
    }
}
