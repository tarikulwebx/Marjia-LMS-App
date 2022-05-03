<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    // All Blog Posts
    public function all_blog_posts() {
        $blog_posts = Blog::where('visibility', '=', 'public')->paginate(4);
        return view('blog_posts', compact('blog_posts'));
    }


    // Single Blog Post
    public function single_blog_post($slug) {
        $post = Blog::findBySlugOrFail($slug);
        $previous_post = $post->previous();
        $next_post = $post->next();

        $post->update([
            'views' => $post['views']+1,
        ]);

        if ($post->visibility == 'public') {
            return view('blog_post_single', compact('post', 'previous_post', 'next_post'));
        } else {
            return redirect()->route('blogs');
        }

       
    }
}
