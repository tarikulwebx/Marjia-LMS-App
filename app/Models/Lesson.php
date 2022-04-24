<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    use Sluggable;
    use SluggableScopeHelpers;

    protected $fillable = [
        'title',
        'body',
        'video',
        'course_id',
        'group_id',
        'files',
    ];

    /**
     * Lesson belongsTo a Course
     */
    public function course() {
        return $this->belongsTo(Course::class);
    }

    /**
     * Lesson belongsTo a group
     */
    public function group() {
        return $this->belongsTo(Group::class);
    }


    /**
     * Lesson has many reads
     */
    public function reads() {
        return $this->hasMany(Read::class, 'lesson_id', 'id');
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
                'source' => 'title',
                'onUpdate' => 'true'
            ]
        ];
    }
}
