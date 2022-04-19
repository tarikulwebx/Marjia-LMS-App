<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; 

class Group extends Model
{
    use HasFactory;
    use Sluggable;
    use SluggableScopeHelpers;

    protected $fillable = [
        'name',
        'course_id',
    ];

    /**
     * Group belongsTo Course
     */
    public function course() {
        return $this->belongsTo(Course::class);
    }

    /**
     * Group hasMany Lessons
     */
    public function lessons() {
        return $this->hasMany(Lesson::class);
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
