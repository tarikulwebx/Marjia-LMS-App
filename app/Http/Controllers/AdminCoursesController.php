<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminCoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::all();
        return view('admin.courses.index', compact('courses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::pluck('name', 'id')->all();
        $students = Role::whereName('student')->first()->users->pluck('email', 'id');
        return view('admin.courses.create', compact('categories', 'students'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'              =>  'required|string|max:255',
            'visibility'  => 'required',
            'duration'  => 'required',
            'level'  => 'required',
            'language'  => 'required',
            'description'       => 'required',
            'short_description' => 'required',
            'learning' => 'required',
            'category_id'       => 'required',
            'thumbnail'       => 'required',
        ]);

        $inputs = $request->all();
        $user = Auth::user();

        $course = $user->courses()->create($inputs);

        $student_enrolls = $request->input('student_enrolls');
        if ($student_enrolls) {
            foreach($student_enrolls as $user_id) {
                $course->enrollments()->UpdateOrCreate(['user_id' => $user_id]);
            }
        }

        session()->flash('course_action_msg', 'Course "'.$inputs['name'] .'" Created Successfully');
        return redirect()->route('courses.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $course = Course::findBySlugOrFail($slug);
        $categories = Category::pluck('name', 'id')->all();
        $students = Role::whereName('student')->first()->users->pluck('email', 'id');
        $students = User::pluck('email', 'id')->all();
        $enrolled_students_object = $course->enrollments;
        $enrolled_students = array();
        foreach($enrolled_students_object as $student) {
            $enrolled_students[] = $student->user_id;
        }
        return view('admin.courses.edit', compact('course', 'categories', 'students', 'enrolled_students'));
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $request->validate([
            'name'              =>  'required|string|max:255',
            'visibility'  => 'required',
            'duration'  => 'required',
            'level'  => 'required',
            'language'  => 'required',
            'description'       => 'required',
            'short_description' => 'required',
            'learning' => 'required',
            'category_id'       => 'required',
            'thumbnail'       => 'required',
        ]);

        $inputs = $request->all();
        $course = Course::findBySlugOrFail($slug);
        $course->update($inputs);


        // Delete all enrollment to this course
        $course_enrollments = $course->enrollments;
        if ($course_enrollments) {
            foreach($course_enrollments as $enrollment) {
                $enrollment->delete();
            }
        }
        
        // Enroll selected users
        $enrolled_students = $request->input('student_enrolls');
        if ($enrolled_students) {
            foreach($enrolled_students as $user_id) {
                $course->enrollments()->UpdateOrCreate(['user_id' => $user_id]);
            }
        }
        
    
        session()->flash('course_action_msg', 'Course "'.$inputs['name'] .'" Updated Successfully');
        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $course = Course::findBySlugOrFail($slug);
        $course->delete();

        session()->flash('course_action_msg', 'Course "'.$course['name'] .'" Deleted Successfully');
        return redirect()->route('courses.index');
    }
}
