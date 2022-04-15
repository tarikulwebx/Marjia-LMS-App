<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    use Sluggable;
    use SluggableScopeHelpers;


    protected $fillable = [
        'user_id',
        'category_id',
        'visibility',
        'name',
        'description',
        'short_description',
        'learning',
        'thumbnail',
        'language',
        'level',
        'duration',
    ];



    /**
     *  Course belongs to User
     */
    public function user() {
        return $this->belongsTo(User::class);
    }


    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => 'true'
            ]
        ];
    }
}
