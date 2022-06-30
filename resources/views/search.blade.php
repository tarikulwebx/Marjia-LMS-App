@extends('layouts.app')

@section('title', 'Search Results for "' . $_GET['query'] . '"')

@section('content')

    <div class="page">
        <!-- PAGE HEAD -->
        <div class="page-head text-white">
            <div class="container">
                <h5 class="text-white fw-500 mb-1">Search Result for: </h5>
                <div class="d-flex align-items-center justify-content-between">
                    <h1 class="page-head__title text-capitalize mb-0">&#8220;{{ $_GET['query'] }}&#8221;</h1>
                </div>
            </div>
        </div>

        <!-- PAGE CONTENT -->
        <div class="page-content" style="min-height: 220px">

            <!-- Courses -->
            @if (!$courses->isEmpty())
                <!-- COURSE SECTION: START -->
                <section class="course-section mb-5">
                    <!-- Section head -->
                    <div class="container">
                        <div class="section-head mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2 class="text-dark">Courses <small>({{ $courses->count() }})</small></h2>
                                <div>
                                    <div class="d-flex flex-nowrap align-items-center">
                                        <button class="btn btn-grid">
                                            <i class="fa-solid fa-grip"></i>
                                        </button>
                                        <button class="btn btn-list">
                                            <i class="fa-solid fa-list"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Courses -->
                    <div class="container">
                        <div class="courses">

                            @if ($courses)
                                @foreach ($courses as $course)
                                    <!-- Course Item -->
                                    <div class="card course shadow border-0 h-100">
                                        <img src="{{ $course->thumbnail }}" class="card-img-top course__thumbnail" alt="Thumb">
                                        <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <a href="{{ route('category.courses', $course->category->slug) }}" class="course__category badge text-success bg-success bg-opacity-10 text-decoration-none">{{ $course->category ? $course->category->name : ' ' }}</a>
                                                <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://www.facebook.com/sharer/sharer.php?u={{ route('single-course', $course->slug) }}' class='social facebook' target='_blank'  rel='noopener'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com/intent/tweet?url={{ route('single-course', $course->slug) }}' class='social twitter' target='_blank'  rel='noopener'><i class='fa-brands fa-twitter'></i></a><a href='{{ route('single-course', $course->slug) }}' data-href='{{ route('single-course', $course->slug) }}' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <h3 class="card-title course__title"><a href="{{ route('single-course', $course->slug) }}">{{ $course->name }}</a></h3>
                                            <div class="course__rating mb-2 d-flex align-items-center">
                                                @if ($course->averageRating() == floor($course->averageRating()))
                                                    @for ($i=0; $i<$course->averageRating(); $i++)
                                                        <small><i class="fa-solid fa-star"></i></small>
                                                    @endfor

                                                    @for ($i=0; $i<5-$course->averageRating(); $i++)
                                                        <small><i class="fa-regular fa-star"></i></small>
                                                    @endfor

                                                    

                                                    @else
                                                        @for ($i=0; $i<floor($course->averageRating()); $i++)
                                                            <small><i class="fa-solid fa-star"></i></small>
                                                        @endfor
                                                        <small><i class="fa-solid fa-star-half-stroke"></i></small>
                                                        @for ($i=0; $i<4-floor($course->averageRating()); $i++)
                                                            <small><i class="fa-solid fa-star"></i></small>
                                                        @endfor
                                                @endif
                                                
                                                <span>{{ $course->averageRating() }}/5</span>
                                            </div>
                                            <p class="card-text course__description">{{ Str::limit($course->short_description, 150, '...') }}</p>
                                            <div class="card-footer bg-transparent mt-auto px-0">
                                                <div class="course__meta align-items-center d-flex justify-content-between ">
                                                    <span class="h6 course__meta__readtime m-0">
                                                        <i class="fa-solid fa-users"></i>
                                                        {{ $course->enrollments->count() }} enrolled
                                                    </span>
                                                    <span class="h6 course__meta__lessons m-0">
                                                        <i class="fa-solid fa-book-open"></i>
                                                        {{ $course->lessons->count() }} lessons
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endif

                        </div>
                    </div>
                </section>
            @endif

            <!-- Posts -->
            @if (!$posts->isEmpty())
                <section class="mb-5">
                    <!-- Section head -->
                    <div class="container">
                        <div class="section-head mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2 class="text-dark">Posts <small>({{ $posts->count() }})</small></h2>
                            </div>
                        </div>
                    </div>
                    <!-- ARTICLES -->
                    <div class="container article-page">
                        <div class="articles">
                            <div class="row">
                                @if ($posts)
                                    @foreach ($posts as $post)
                                        <!-- Article Item -->
                                        <div class="col-12 col-lg-6 mb-4">
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
                                                            <p class="article__text card-text">{!! Str::limit($post->body, 110, '...') !!}</p>
                                                            <a href="{{ route('blog_post_single', $post->slug) }}" class="article__readmore btn">Read more <i class="fas fa-long-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </section>
            @endif

            <!-- pages -->
            @if (!$pages->isEmpty())
                <section class="mb-5">
                    <!-- Section head -->
                    <div class="container">
                        <div class="section-head mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2 class="text-dark">Pages <small>({{ $pages->count() }})</small></h2>
                            </div>
                        </div>
                    </div>
                    <!-- Pages -->
                    <div class="container">
                        <div class="row gy-3">
                            @if ($pages)
                                @foreach ($pages as $page)
                                    <div class="col-sm-6">
                                        <div class="card shadow-sm">
                                            <div class="card-body">
                                                <h4 class="card-title mb-2 text-primary"><a href="{{ route('pages.show', $page->slug) }}">{{ $page->title }}</a></h4>
                                                <div class="card-text">{!! Str::limit($page->body, 120, '...') !!}</div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </section>
            @endif

            <!-- FAQS SECTION -->
            @if (!$faqs->isEmpty())
                <section>
                    <!-- Section head -->
                    <div class="container">
                        <div class="section-head mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2 class="text-dark">Frequently Asked Questions <small>({{ $faqs->count() }})</small></h2>
                            </div>
                        </div>
                    </div>
                    <!-- FAQs -->
                    <div class="container">
                        <div class="row gy-3">
                            @if ($faqs)
                                @foreach ($faqs as $faq)
                                    <div class="col-sm-6">
                                        <div class="card shadow-sm">
                                            <div class="card-body">
                                                <h4 class="card-title mb-2">{{ $faq->question }}</h4>
                                                <div class="card-text">{!! $faq->answer !!}</div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </section>
            @endif

            


            @if ($courses->isEmpty() && $posts->isEmpty() && $pages->isEmpty() && $faqs->isEmpty())
                <div class="container">
                    <h1 class="text-white text-center">No Result Found!</h1>
                </div>
            @endif

        </div>
    </div>


    
@endsection