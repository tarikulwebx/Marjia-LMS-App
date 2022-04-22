<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Group;
use App\Models\Lesson;
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


    public function create_by_group($course_slug, $group_slug) {
        $course = Course::findBySlugOrFail($course_slug);
        $group = Group::findBySlugOrFail($group_slug);
        $groups = $course->groups->pluck('name', 'id');
        return view('admin.lessons.create_by_group', compact('course', 'group', 'groups'));
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
            'files'     => 'nullable',
        ]);

        $course = Course::findBySlugOrFail($slug);
        $inputs = $request->all();
        
        $course->lessons()->create($inputs);
        session()->flash('lesson_action_msg', 'New Lesson "'.$inputs['title'] .'" Created Successfully');
        return redirect()->route('lessons.index', $course->slug);
    }


    public function store_by_group(Request $request, $course_slug, $group_slug) {
        $request->validate([
            'title'     => 'required|string|max:255',
            'body'      => 'required',
            'files'     => 'nullable',
        ]);

        $course = Course::findBySlugOrFail($course_slug);
        $group = Group::findBySlugOrFail($group_slug);
        $lesson = $course->lessons()->create([
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'files' => $request->input('files'),
            'group_id' => $group->id,
        ]);

        session()->flash('lesson_action_msg', 'New Lesson "'. $lesson['title'] .'" Created');
        return redirect()->route('lessons.index', $course_slug);
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
     * @param  string  $course_slug
     * @param  string  $lesson_slug
     * @return \Illuminate\Http\Response
     */
    public function edit($course_slug, $lesson_slug)
    {
        $course = Course::findBySlugOrFail($course_slug);
        $lesson = Lesson::findBySlugOrFail($lesson_slug);
        $groups = $course->groups->pluck('name', 'id')->all();

        return view('admin.lessons.edit', compact('course', 'lesson', 'groups'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $course_slug
     * @param  string  $lesson_slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $course_slug, $lesson_slug)
    {
        $request->validate([
            'title'     => 'required|string|max:255',
            'body'      => 'required',
            'group_id'  => 'required',
            'files'     => 'nullable',
        ]);

        $inputs = $request->all();
        $lesson = Lesson::findBySlugOrFail($lesson_slug);
        $lesson->update($inputs);
        session()->flash('lesson_action_msg', 'Lesson Updated Successfully');
        return redirect()->route('lessons.edit', [$course_slug, $lesson_slug]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($course_slug, $lesson_slug)
    {
        $lesson = Lesson::findBySlugOrFail($lesson_slug);
        $result = $lesson->delete();

        if ($result == true) {
            session()->flash('lesson_action_msg', 'Lesson Deleted Successfully');
            return 1;
        } else {
            return 0;
        }
    }
}
