<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use Sluggable;
    use SluggableScopeHelpers;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role_id',
        'is_active',
        'first_name',
        'last_name',
        'email',
        'password',
        'photo',
        'is_active',
        'phone',
        'address',
        'about',
        'bachelor_degree_department',
        'bachelor_degree_university',
        'bachelor_degree_session',
        'bachelor_degree_year',
        'master_degree_department',
        'master_degree_university',
        'master_degree_session',
        'master_degree_year',
        'facebook',
        'twitter',
        'telegram',
        'github',
        'linkedin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    /**
     *  User belongs to Role
     */
    public function role() {
        return $this->belongsTo(Role::class);
    }


    /**
     * User has many Course
     */
    public function courses() {
        return $this->hasMany(Course::class);
    }


    /**
     * User has many Enroll
     */
    public function enrollments() {
        return $this->hasMany(Enrollment::class, 'user_id', 'id');
    }


        /**
     * Is Admin?
     */
    public function isAdmin() {
        if ($this->role->name == 'administrator' && $this->is_active == 1) {
            return true;
        }
        return false;
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
                'source' => 'first_name',
                'onUpdate' => 'true'
            ]
        ];
    }

}
