<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class School extends Model
{
    use HasFactory;
    protected $table = 'schools';
    protected $primaryKey = 'user_id';
    const ACTIVE_STATUS = 1;

    const DEFAULT_PER_PAGES = 16;

    public function promo(): HasOne
    {
        return $this->hasOne(Sale::class, 'school_id', 'user_id');
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function courses(): HasMany
    {
        return $this->hasMany(Course::class, 'school_id', 'user_id');
    }
}
