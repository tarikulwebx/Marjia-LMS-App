<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\support\Str;

class AdminCategoriesController extends Controller
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
            'name' => 'required|string|max:255',
            'thumbnail' => 'nullable',
        ]);

        $inputs = $request->all();

        Category::create($inputs);
        session()->flash('category_action_msg', 'Category "'.$inputs['name'] .'" Created Successfully');
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $category = Category::findBySlugOrFail($slug);
        $categories = Category::all();
        return view('admin.categories.edit', compact('category', 'categories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $category = Category::findBySlugOrFail($slug);
        $categories = Category::all();
        return view('admin.categories.edit', compact('category', 'categories'));
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
            'name' => 'required|string|max:255',
            'thumbnail' => 'nullable',
        ]);

        $inputs = $request->all();

        $category = Category::findBySlugOrFail($slug);
        $category->update($inputs);
        session()->flash('category_action_msg', 'Category "'.$inputs['name'] .'" Updated Successfully');
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $category = Category::findBySlugOrFail($slug);
        $category->delete();
        session()->flash('category_action_msg', 'Category Deleted Successfully');
        return redirect()->route('categories.index');
    }
}
