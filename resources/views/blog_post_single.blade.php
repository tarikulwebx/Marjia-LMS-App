@extends('layouts.app')

@section('title', $post->title)

@section('styles')
    <style>
        .previous-btn,
        .next-btn {
            width: 110px;
            white-space: nowrap;
            text-align: center;
        }
    </style>
@endsection

@section('content')
    <!-- ABOUT US SECTION: START -->
    <section class="page">
        <!-- Heading -->
        <div class="page-head text-white">
            <div class="container">
                <h1 class="page-head__title">{{ $post->title }}</h1>
                <ul class="list-inline m-0">
                    <li class="list-inline-item fw-400 me-3">By <span class="fw-500">{{ $post->user->first_name }} {{ $post->user->last_name }}</span></li>
                    <li class="list-inline-item fw-400 me-3"><i class="far fa-eye me-1"></i> {{ $post->views }} views</li>
                    <li class="list-inline-item fw-400"> <i class="far fa-calendar me-1"></i> {{ $post->created_at->format('M d, Y') }}</li>
                </ul>
            </div>
        </div>

        <!-- Content -->
        <div class="page-content">
            <div class="container">
                <div class="page-content__body">
                    {!! $post->body !!}
                </div>

                <div class="d-flex justify-content-between mt-4">
                    <div class="me-3">
                        @if ($previous_post)
                            <a href="{{ route('blog_post_single', $previous_post->slug) }}" class="btn btn-primary previous-btn"><i class="fas fa-chevron-left"></i> Previous</a>
                            <div class="mt-2"><a href="{{ route('blog_post_single', $previous_post->slug) }}">{{ $previous_post->title }}</a></div>
                            @else
                            <button type="button" class="btn btn-light previous-btn" disabled><i class="fas fa-chevron-left"></i> Previous</button>
                        @endif
                    </div>
                    <div>
                        @if ( $next_post)
                            <div class="text-end">
                                <a href="{{ route('blog_post_single', $next_post->slug) }}" class="btn btn-primary next-btn" title="{{ $next_post->title }}">Next <i class="fas fa-chevron-right"></i></a>
                            </div>
                            <div class="mt-2"><a href="{{ route('blog_post_single', $next_post->slug) }}">{{ $next_post->title }}</a></div>
                            @else
                                <button type="button" class="btn btn-light next-btn" disabled >Next <i class="fas fa-chevron-right"></i></button>
                        @endif
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>

    </section>
    <!-- ABOUT US SECTION: END -->
@endsection