<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\support\Str;

class AdminCourseCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return view('admin.categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('admin.categories.index', compact('categories'));
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
            'name' => 'required|max:255',
            'thumb' => 'mimes:png,jpg|nullable',
        ]);

        $inputs = $request->all();

        if ($photo_file = $request->file('thumb')) {
            $name_rename = time().'-'. Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            $photo_file->move('images/category', $name_rename);
            $inputs['thumb'] = $name_rename;
        }

        $category = Category::create($inputs);
        session()->flash('category_action_msg', 'Category "'.ucfirst($category->name).'" Created Successfully');
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $category = Category::findBySlugOrFail($slug);
        return view('admin.categories.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $request->validate([
            'name' => 'required|max:255',
            'thumb' => 'mimes:png,jpg|nullable',
        ]);

        $inputs = $request->all();
        $category = Category::findBySlugOrFail($slug);

        if ($photo_file = $request->file('thumb')) {
            $name_rename = time().'-'.Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            // Delete old photo if exists
            if($category->thumb) {
                $old_photo = $category->thumb;
                unlink(public_path() . '/images/category/' . $old_photo);
            }
            // Upload Photo
            $photo_file->move('images/category', $name_rename);
            $inputs['thumb'] = $name_rename;
        }

        $category->update($inputs);
        session()->flash('category_action_msg', 'Category Updated Successfully');
        return redirect()->route('categories.index');
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
