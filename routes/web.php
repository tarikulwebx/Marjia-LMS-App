<?php

use App\Http\Controllers\AdminUsersController;
use App\Http\Controllers\HomeController;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Auth::routes();


/**
 * Public Routes
 */
Route::get('/', [HomeController::class, 'index']);



/**
 * Admin Routes
 */

Route::middleware(['auth', 'admin'])->group(function () {
    Route::resource('admin/users', AdminUsersController::class);
    Route::patch('admin/users/update-password/{id}', [AdminUsersController::class, 'updatePassword'])->name('users.updatePassword');
    Route::patch('admin/users/update-email/{id}', [AdminUsersController::class, 'updateEmail'])->name('users.updateEmail');
    Route::get('/admin',function(){ return view('admin.index'); });
});