<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LessonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  string  $course_slug
     * @return \Illuminate\Http\Response
     */
    public function index($course_slug)
    {
        $course = Course::findBySlugOrFail($course_slug);
        $groups = $course->groups->all();
        if (Auth::user()->isEnrolled($course->id)) {
            return view('lessons', compact('course', 'groups'));
        } else {
            return redirect()->route('single-course', $course_slug);
        }
        
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($course_slug, $lesson_slug)
    {
        $course = Course::findBySlugOrFail($course_slug);
        $current_lesson = Lesson::findBySlugOrFail($lesson_slug);
        $groups = $course->groups->all();

        // Separate file urls from string
        $files = [];
        if ($current_lesson->files) {
            $files_url = explode(',', $current_lesson->files);
            foreach($files_url as $file_url) {
                $file_name = explode('/', $file_url);
                $files[ $file_url] = end($file_name);
            }
        }

        // Next and Previous Lesson
        $all_lessons_slugs = [];
        foreach($groups as $group) {
            if ($group->lessons->count()> 0) {
                $lessons = $group->lessons;
                foreach($lessons as $lesson) {
                    $all_lessons_slugs[] = $lesson['slug'];
                }
            }
        }

        $previous_lesson_slug = null;
        $next_lesson_slug = null;
        for($i = 0; $i<sizeof($all_lessons_slugs); ++$i) {
            if ($all_lessons_slugs[$i] == $lesson_slug) {
                if (isset($all_lessons_slugs[$i-1])) {
                    $previous_lesson_slug = $all_lessons_slugs[$i-1];
                }
                
                if (isset($all_lessons_slugs[$i+1])) {
                    $next_lesson_slug = $all_lessons_slugs[$i+1];
                }
            }
        }


        // If user is enrolled to this course then go to lessons
        if (Auth::user()->isEnrolled($course->id)) {
            // User read this lesson
            Auth::user()->reads()->UpdateOrCreate(['lesson_id' => $current_lesson['id']]);
            return view('lesson_single', compact('course', 'groups', 'current_lesson', 'files', 'previous_lesson_slug', 'next_lesson_slug'));
        } else {
            return redirect()->route('single-course', $course_slug);
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
