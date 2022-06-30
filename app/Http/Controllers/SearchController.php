<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Course;
use App\Models\Faq;
use App\Models\Page;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    function search(Request $request) {
        $request->validate([
            'query'=>'required|string'
        ]);
        
        if(isset($_GET['query'])) {
            $search_text = $request->input('query');
            $courses = Course::Where('name', 'LIKE', '%'. $search_text.'%')->get();
            $posts = Blog::where('title', 'LIKE', '%'. $search_text.'%')->get();
            $pages = Page::where('title', 'LIKE', '%' . $search_text . '%')->get();
            $faqs = Faq::where('question', 'LIKE', '%' . $search_text . '%')->get();
            return view('search', compact('courses', 'posts', 'pages', 'faqs'));
        } else {
            return redirect()->back();
        }
    }
}
