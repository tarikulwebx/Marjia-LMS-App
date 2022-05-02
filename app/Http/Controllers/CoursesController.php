<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::where('visibility', 'public')->paginate(12);
        $categories = Category::all();

        $popular_public_courses = Course::where('visibility', 'public')->withCount('reviews')->orderBy('reviews_count', 'desc')->take(4)->get();
        return view('courses', compact('courses', 'categories', 'popular_public_courses'));
    }

    public function courses_by_category($category_slug) {
        $category = Category::findBySlugOrFail($category_slug);
        $courses = $category->courses()->where('visibility', 'public')->paginate(12);
        $categories = Category::all();
        $popular_public_courses = Course::where('visibility', 'public')->withCount('reviews')->orderBy('reviews_count', 'desc')->take(4)->get();
        return view('category', compact('courses', 'categories', 'category', 'popular_public_courses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  String  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $course = Course::findBySlugOrFail($slug);
        $categories = Category::all();
        $reviews = $course->reviews;
        $reviews_with_pagination = $course->reviews()->paginate(10);

        $popular_public_courses = Course::withCount('reviews')->orderBy('reviews_count', 'desc')->take(4)->get();

        if($course['visibility'] == 'public' || ($course['visibility'] == 'defined' && Auth::user() && Auth::user()->isEnrolled($course['id']))) {
            return view('course_single', compact('course', 'categories', 'reviews', 'reviews_with_pagination', 'popular_public_courses'));
        } 
        else {
            return redirect()->route('courses');
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }


    public function user_enroll_course($course_slug) {
        $course = Course::findBySlugOrFail($course_slug);
        $user = Auth::user();
        $course->enrollments()->UpdateOrCreate(['user_id' => $user['id']]);
        session()->flash('course_action_msg', 'Hi '.$user['first_name'].', you enrolled this course. Continue learning...');
        return redirect()->route('course-lessons', $course_slug);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
