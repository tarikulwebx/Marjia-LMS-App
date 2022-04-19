<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class AdminLessonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($course_slug)
    {
        $course = Course::findBySlugOrFail($course_slug);
        $groups = $course->groups->all();
        $lessons = $course->lessons;
        return view('admin.lessons.index', compact('course', 'groups', 'lessons'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($course_slug)
    {
        $course = Course::findBySlugOrFail($course_slug);
        $groups = $course->groups->pluck('name', 'id');
        
        return view('admin.lessons.create', compact('course', 'groups'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $slug)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'body'      => 'required',
            'group_id'  => 'required',
            'video'     => 'nullable|url',
        ]);

        $course = Course::findBySlugOrFail($slug);
        $inputs = $request->all();
        
        $course->lessons()->create($inputs);
        session()->flash('lesson_action_msg', 'New Lesson "'.$inputs['title'] .'" Created Successfully');
        return redirect()->route('lessons.index', $course->slug);
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
