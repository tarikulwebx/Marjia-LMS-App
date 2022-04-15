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
        'category_id',
        'name',
        'short_description',
        'description',
        'visibility',
        'level',
        'language',
        'duration',
        'certification',
        'thumbnail',
    ];



    /**
     * Course - Category Relation
     */
    public function category() {
        return $this->belongsTo(Category::class);
    }


    /**
     * Course - user relationship
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
