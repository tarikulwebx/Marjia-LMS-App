<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

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
        'photo',
        'first_name',
        'last_name',
        'email',
        'phone',
        'password',
        'is_active',
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
        'slug',
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
     * User-Role Relationship (User belongs to many roles)
     * 
     */

    public function role() {
        return $this->belongsTo(Role::class);
    }


    /**
     * Has many course - relation
     */
    public function courses() {
        return $this->hasMany(Course::class);
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
     * Is Student?
     */
    public function isStudent() {
        if ($this->role->name == 'student' && $this->is_active == 1) {
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
