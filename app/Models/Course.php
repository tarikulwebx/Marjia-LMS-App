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
     *  Course belongs to Category
     */
    public function category() {
        return $this->belongsTo(Category::class);
    }


    /**
     * Course has many Enrollments
     */
    public function enrollments() {
        return $this->hasMany(Enrollment::class, 'course_id', 'id');
    }


    /**
     * Course hasMany Lesson Groups
     */
    public function groups() {
        return $this->hasMany(Group::class);
    }


    /**
     * Course hasMany Lessons
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
