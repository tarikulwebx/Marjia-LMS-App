<?php

// use App\Http\Controllers\AdminCourseCategoriesController;
// use App\Http\Controllers\AdminCoursesController;
use App\Http\Controllers\AdminDashboardController;
// use App\Http\Controllers\AdminUsersController;
use App\Http\Controllers\HomeController;
// use App\Http\Controllers\InstructorProfileController;
// use App\Http\Controllers\StudentProfileController;
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
    // Route::resource('admin/users', AdminUsersController::class);
    // Route::patch('admin/users/update-password/{slug}', [AdminUsersController::class, 'updatePassword'])->name('users.updatePassword');
    // Route::patch('admin/users/update-email/{slug}', [AdminUsersController::class, 'updateEmail'])->name('users.updateEmail');
    Route::get('admin', [AdminDashboardController::class, 'index'])->name('admin-dashboard');

    // Course routes
    // Route::resource('admin/courses/categories', AdminCourseCategoriesController::class);
    
});


/**
 * Instructor Profile Routes
 */
// Route::middleware(['auth'])->group(function () {
//     Route::resource('admin/courses', AdminCoursesController::class);
// });



/**
 * Student Profile Routes
 */
// Route::middleware(['auth', 'student'])->group(function () {
//     Route::resource('student', StudentProfileController::class);
// });



