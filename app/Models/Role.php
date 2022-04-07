<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;


    protected $fillable = [
        'name'
    ];


    /**
     * Role-user relation (Roles belongs to many users)
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

}
