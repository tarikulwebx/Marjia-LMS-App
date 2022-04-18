<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

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
}
