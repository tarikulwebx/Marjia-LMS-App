<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'video',
        'course_id',
        'group_id'
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
}
