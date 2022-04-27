<?php

use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminCoursesController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminLessonGroupController;
use App\Http\Controllers\AdminLessonsController;
use App\Http\Controllers\AdminUsersController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonsController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ReviewsController;
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
Route::get('/course/{course_slug}/enroll', [CoursesController::class, 'user_enroll_course'])->middleware('auth')->name('user-enroll-course');

Route::get('/courses/categories/{category_slug}', [CoursesController::class, 'courses_by_category'])->name('category.courses');



Route::middleware(['auth'])->group(function () {
    //Lessons Route
    Route::get('courses/{course_slug}/lessons', [LessonsController::class, 'index'])->name('course-lessons');
    Route::get('courses/{course_slug}/lessons/{lesson_slug}', [LessonsController::class, 'show'])->name('lesson-single');

    // Review Routes
    Route::get('courses/{course_id}/reviews', [ReviewsController::class, 'index'])->name('course.reviews');
    Route::post('courses/{course_id}/reviews', [ReviewsController::class, 'store'])->name('course.reviews.store');
    Route::post('update_review', [ReviewsController::class, 'update_review']);
    Route::post('delete_review', [ReviewsController::class, 'delete_review']);

    // Profile Routes
    Route::get('profile', [ProfilesController::class, 'show'])->name('profile.show');
    Route::get('profile/edit', [ProfilesController::class, 'edit'])->name('profile.edit');
    Route::patch('profile/update', [ProfilesController::class, 'update'])->name('profile.update');
    Route::post('profile/reset-read/{course_id}', [ProfilesController::class, 'reset_course_read'])->name('profile.reset-course-read');
    Route::get('profile/reviews', [ProfilesController::class, 'reviews'])->name('profile.reviews');
});


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

    // Group CRUD
    Route::resource('admin/courses/{course_slug}/groups', AdminLessonGroupController::class);
    Route::get('get-lesson-groups/{course_id}', [AdminLessonGroupController::class, 'get_course_lesson_groups']);
    Route::post('create-lesson-group', [AdminLessonGroupController::class, 'create_new_course_lesson_group']);

    // Lesson CRUD
    Route::resource('admin/courses/{course_slug}/lessons', AdminLessonsController::class);
    Route::get('admin/courses/{course_slug}/groups/{group_slug}/lessons/create', [AdminLessonsController::class, 'create_by_group'])->name('create-lesson-by-group');
    Route::post('admin/courses/{course_slug}/groups/{group_slug}/lessons/store', [AdminLessonsController::class, 'store_by_group'])->name('store_lesson_by_group');

});










Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth', 'admin']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::middleware(['auth', 'web', 'admin'])->group(function () {
    Route::get('admin/media/images', function () {
        return view('admin.media.images');
    });
    Route::get('admin/media/files', function () {
        return view('admin.media.files');
    });
});
