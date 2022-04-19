<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Group;
use Illuminate\Http\Request;

class AdminLessonGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($course_slug)
    {
        
    }

    public function get_course_lesson_groups($course_id) {
        $course = Course::findOrFail($course_id);
        $lesson_groups = json_encode($course->groups->all());
        return $lesson_groups;
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

    public function create_new_course_lesson_group(Request $request) {
        
        $course_id = $request->input('course_id');
        $name = $request->input('input_group_name');

        // $course = Course::findOrFail($course_id);
        $result = Group::create([
            'course_id' => $course_id,
            'name'  => $name,
        ]);
        if ($result) {
            return 1;
        } else {
            return 0;
        }
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
    public function destroy($course_slug, $group_slug)
    {
        $group = Group::findBySlugOrFail($group_slug);
        $group->delete();
        session()->flash('group_action_msg', 'Group Deleted Successfully');
        return redirect()->route('lessons.index', $course_slug);
    }

}
