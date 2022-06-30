<?php

use App\Http\Controllers\AdminBlogsController;
use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminContactsController;
use App\Http\Controllers\AdminCoursesController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminFaqsController;
use App\Http\Controllers\AdminLessonGroupController;
use App\Http\Controllers\AdminLessonsController;
use App\Http\Controllers\AdminPagesController;
use App\Http\Controllers\AdminUsersController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\FaqsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InstructorProfilesController;
use App\Http\Controllers\LessonsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\SearchController;
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

// Blog Posts
Route::get('/blogs', [BlogsController::class, 'all_blog_posts'])->name('blogs');
Route::get('/blogs/{slug}', [BlogsController::class, 'single_blog_post'])->name('blog_post_single');


// Contact Us
Route::get('/contact-us', [ContactsController::class, 'show_contact_page'])->name('show_contact_page');
Route::post('/contact-us/store', [ContactsController::class, 'store_contact_message'])->name('store_contact_message');

// Pages
Route::get('/pages/{slug}', [PagesController::class, 'show_page'])->name('show_page');

// FAQs
Route::get('/faqs', [FaqsController::class, 'all_faqs'])->name('all_faqs');


// Search
Route::get('/search', [SearchController::class, 'search'])->name('web.search');




Route::middleware(['auth'])->group(function () {
    //Lessons Route
    Route::get('courses/{course_slug}/lessons', [LessonsController::class, 'index'])->name('course-lessons');
    Route::get('courses/{course_slug}/lessons/{lesson_slug}', [LessonsController::class, 'show'])->name('lesson-single');

    // Review Routes
    Route::get('courses/{course_id}/reviews', [ReviewsController::class, 'index'])->name('course.reviews');
    Route::post('courses/{course_id}/reviews', [ReviewsController::class, 'store'])->name('course.reviews.store');
    Route::post('update_review', [ReviewsController::class, 'update_review']);
    Route::post('delete_review', [ReviewsController::class, 'delete_review']);

    // Profile (student) Routes
    Route::get('profile', [ProfilesController::class, 'show'])->name('profile.show');
    Route::get('profile/edit', [ProfilesController::class, 'edit'])->name('profile.edit');
    Route::patch('profile/update', [ProfilesController::class, 'update'])->name('profile.update');
    Route::post('profile/reset-read/{course_id}', [ProfilesController::class, 'reset_course_read'])->name('profile.reset-course-read');
    Route::get('profile/reviews', [ProfilesController::class, 'reviews'])->name('profile.reviews');
    Route::get('profile/delete', [ProfilesController::class, 'delete'])->name('profile.delete');
    Route::post('profile/delete-confirm', [ProfilesController::class, 'delete_confirm']);

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


    // Profile-instructor Routes
    Route::get('instructor-profile', [InstructorProfilesController::class, 'instructor_profile_show'])->name('instructor.profile.show');
    Route::get('instructor-profile/courses', [InstructorProfilesController::class, 'instructor_profile_courses'])->name('instructor.profile.courses');
    Route::get('instructor-profile/reviews', [InstructorProfilesController::class, 'instructor_profile_reviews'])->name('instructor.profile.reviews');
    Route::post('instructor-profile/delete_review', [InstructorProfilesController::class, 'delete_review']);
    Route::get('instructor-profile/edit', [InstructorProfilesController::class, 'instructor_profile_edit'])->name('instructor.profile.edit');
    Route::patch('instructor-profile/update', [InstructorProfilesController::class, 'instructor_profile_update'])->name('instructor.profile.update');


    // Blog CRUD
    Route::resource('admin/blogs', AdminBlogsController::class);

    // Contacts CRUD
    Route::get('admin/contacts/unread', [AdminContactsController::class, 'unread_contacts'])->name('contacts.unread-contacts');
    Route::resource('admin/contacts', AdminContactsController::class);

    // Pages CRUD
    Route::resource('admin/pages', AdminPagesController::class);


    // FAQs CRUD
    Route::resource('admin/faqs', AdminFaqsController::class);
   
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
