<?php

use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminCoursesController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminLessonGroupController;
use App\Http\Controllers\AdminLessonsController;
use App\Http\Controllers\AdminUsersController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/', [HomeController::class, 'index']);

// Courses Routes
Route::get('/courses', [CoursesController::class, 'index'])->name('courses');
Route::get('/courses/{slug}', [CoursesController::class, 'show'])->name('single-course');



/**
 * Admin Routes
 */
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('admin', [AdminDashboardController::class, 'index'])->name('admin-dashboard');

    // Users CRUD
    Route::resource('admin/users', AdminUsersController::class);
    Route::patch('admin/users/update-password/{slug}', [AdminUsersController::class, 'updatePassword'])->name('users.updatePassword');
    Route::patch('admin/users/update-email/{slug}', [AdminUsersController::class, 'updateEmail'])->name('users.updateEmail');

    // Categories CRUD
    Route::resource('admin/courses/categories', AdminCategoriesController::class);

    // Courses CRUD
    Route::resource('admin/courses', AdminCoursesController::class);

    // Lesson group CRUD
    Route::resource('admin/courses/{slug}/groups', AdminLessonGroupController::class);

    // Lesson CRUD
    Route::resource('admin/courses/{slug}/lessons', AdminLessonsController::class);

});


Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth', 'admin']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::middleware(['auth', 'web'])->group(function () {
    Route::get('admin/media/images', function () {
        return view('admin.media.images');
    });
    Route::get('admin/media/files', function () {
        return view('admin.media.files');
    });
});
