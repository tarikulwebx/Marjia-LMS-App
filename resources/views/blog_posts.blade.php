@extends('layouts.app')

@section('title', 'Blog Posts')

@section('content')
    <!-- ABOUT US SECTION: START -->
    <section class="page article-page">
        <!-- Heading -->
        <div class="page-head text-white">
            <div class="container">
                <h1 class="page-head__title">Blog Posts</h1>
                <p class="page-head__page-description lead m-0">Here we are posting knowledge based blog posts that can help you to learn interesting topics. Find your interest from the blog posts.</p>
            </div>
        </div>

        <!-- Content -->
        <div class="page-content">
            <div class="container">
                <!-- ARTICLES -->
                <div class="articles">
                    <div class="row">

                        @if ($blog_posts)
                            @foreach ($blog_posts as $post)
                                <!-- Article Item -->
                                <div class="col-12 mb-5">
                                    <div class="article card shadow">
                                        <div class="row g-0">
                                            <div class="col-lg-4 col-xxl-5">
                                                <img src="{{ $post->thumbnail }}"
                                                    class="article__thumb img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-lg-8 col-xxl-7">
                                                <div class="card-body p-4">
                                                    <h3 class="article__title card-title"><a href="{{ route('blog_post_single', $post->slug) }}">{{ $post->title }}</a></h3>
                                                    <ul class="article__meta list-inline">
                                                        <li class="list-inline-item">By <span class="fw-500">{{ $post->user->first_name }} {{ $post->user->last_name }}</span></li>
                                                        <li class="list-inline-item"><i class="fas fa-eye fa-sm me-2"></i>{{ $post->views }} views</li>
                                                        <li class="list-inline-item"><i class="far fa-clock me-2"></i>{{ $post->created_at->diffForHumans() }}</li>
                                                    </ul>
                                                    <p class="article__text card-text">{!! Str::limit($post->body, 350, '...') !!}</p>
                                                    <a href="{{ route('blog_post_single', $post->slug) }}" class="article__readmore btn">Read more <i class="fas fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endif

                        <!-- PAGINATION -->
                        <div class="col-12">
                            {{ $blog_posts->links() }}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- ABOUT US SECTION: END -->
@endsection