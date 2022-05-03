<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    use Sluggable;
    use SluggableScopeHelpers;

    protected $fillable = [
        'user_id',
        'visibility',
        'title',
        'body',
        'thumbnail',
        'views',
        'slug',
    ];

    /**
     *  Blog belongs to User
     */
    public function user() {
        return $this->belongsTo(User::class);
    }


    // Next post
    public function next() {
        return Blog::where('id', '>', $this->id)->where('visibility', '=', 'public')->orderby('id', 'asc')->first();
    }

        // Next post
    public function previous() {
        return Blog::where('id', '<', $this->id)->where('visibility', '=', 'public')->orderby('id', 'desc')->first();
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
