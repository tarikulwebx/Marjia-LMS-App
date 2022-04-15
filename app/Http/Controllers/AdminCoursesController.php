<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\support\Str;

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
        //
        $categories = Category::pluck('name', 'id')->all();
        $users = User::pluck('email', 'id')->all();
        return view('admin.courses.create', compact('categories', 'users'));
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
            'name'  =>  'required|string|max:255',
            'description'   => 'required',
            'category_id'   => 'required',
            'short_description' => 'required',
            'thumbnail'    => 'nullable|mimes:png,jpg',
            'visibility'    => 'required',
            'level'    => 'required',
            'certification'    => 'nullable',
            'language'    => 'required',
            'duration'    => 'required',
        ]);

        $inputs = $request->all();

        if ($photo_file = $request->file('thumbnail')) {
            $name_rename = time().'-'.Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            $photo_file->move('images/course-thumbnails', $name_rename);
            $inputs['thumbnail'] = '/images/course-thumbnails/' . $name_rename;
        }

        $user = Auth::user();
        $user->courses()->create($inputs);
        return "Course created"; 
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
