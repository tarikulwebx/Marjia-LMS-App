<?php

use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminUsersController;
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
    
});
