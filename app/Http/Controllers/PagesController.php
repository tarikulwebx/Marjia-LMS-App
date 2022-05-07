<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    // Show page by slug
    public function show_page($slug) {
        $page = Page::findBySlugOrFail($slug);
        return view('page_show', compact('page'));
    }
}
