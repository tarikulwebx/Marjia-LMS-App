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
     * Course has many Reviews
     */
    public function reviews() {
        return $this->hasMany(Review::class, 'course_id', 'id');
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
     * Average Rating
     */
    public function averageRating() {
        $total_rating = 0;
        $average_rating = 0;
        foreach($this->reviews as $review) {
            $total_rating += $review['rating'];
        }

        if ($this->reviews->count() > 0) {
            $average_rating = $total_rating/$this->reviews->count();
            $average_rating = round($average_rating, 1, PHP_ROUND_HALF_UP);
        }
        
        return $average_rating;
    }



    public function completedLecturesCount($user_id) {
        $count = 0;
        foreach($this->lessons as $lesson) {
            foreach($lesson->reads as $read) {
                if ($read['user_id'] == $user_id) {
                    $count++;
                }
            }
        }

        return $count;
    }



    public function firstLessonOrContinueSlug($user_id) {
        $first_lesson_slug = "";
        $last_read_lesson_slug = false;

        $i = 0;
        foreach($this->lessons as $lesson) {
            if ($i == 0) {
                $first_lesson_slug = $lesson['slug'];
                $i++;
            }
            foreach($lesson->reads as $read) {
                if ($read['user_id'] == $user_id) {
                    $last_read_lesson_slug = $lesson['slug'];
                }
            }
        }


        if ($last_read_lesson_slug) {
            return $last_read_lesson_slug;
        }

        return $first_lesson_slug;

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
