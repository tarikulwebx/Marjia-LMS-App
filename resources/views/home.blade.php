@extends('layouts.app')

@section('title', 'Home')

@section('content')

    <!-- INTRO SECTION: START -->
    <section id="intro-section" class="intro-section">
        <div class="container">
            <div class="row align-items-center text-white">
                <div class="col-lg-6 intro">
                    <h1 class="h1 intro__title">A revolutionary way to <span>educate</span></h1>
                    <p class="lead intro__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates dolor quibusdam sit sequi illo.</p>
                    <a href="{{ route('courses') }}" class="rounded-pill btn btn-rounded intro__btn"> Enroll courses
                        <span><i class="fas fa-arrow-right"></i></span>
                    </a>
                    @if (Auth::user())
                        <a href="{{ route('profile.show') }}" class="rounded-pill btn btn-rounded intro__btn">
                            <span><i class="fas fa-user fa-sm me-1"></i></span>
                            My Profile
                        </a>
                        @else
                        <a href="{{ route('register') }}" class="rounded-pill btn btn-rounded intro__btn">Signup
                            <span><i class="fa fa-sign-in" aria-hidden="true"></i></span>
                        </a>
                    @endif
                    
                </div>
                <div class="col-lg-6">
                    <div class="video-box">
                        <img src="{{ asset('images/intro-art.png') }}" alt="" class="img-fluid w-100">
                        <a href="#" class="glightbox">
                            <span><i class="fa-solid fa-circle-play"></i></span>
                            <span class="border-animation border-animation--border-1"></span>
                            <span class="border-animation border-animation--border-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFFFFF" fill-opacity="1"
                d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,96C672,117,768,203,864,197.3C960,192,1056,96,1152,69.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>
    <!-- INTRO SECTION: END -->


    <!-- POPULAR COURSE SECTION: START -->
    <section id="popular-course-section" class="course-section">
        <!-- Section head -->
        <div class="container">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Popular courses</h1>
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
                <p class="lead text-muted">Top courses can help you to choose which is the best</p>
            </div>
        </div>
        <!-- Courses -->
        <div class="container">
            <div class="courses">

                @if ($popular_public_courses)
                    @foreach ($popular_public_courses as $course)
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
    <!-- POPULAR COURSE SECTION: END -->


    <!-- Recent COURSE SECTION: START -->
    <section id="recent-course-section" class="course-section--recent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        <!-- Section head -->
        <div class="container">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Recent courses</h1>
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
                <p class="lead text-muted">Latest courses depending on their upload date</p>
            </div>
        </div>
        <!-- Courses -->
        <div class="container">
            <div class="courses horizontal-list">
                @if ($latest_public_courses)
                    @foreach ($latest_public_courses as $course)
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

                    @else
                        <em>No course found!!</em>
                @endif
                




            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </section>
    <!-- RECENT COURSE SECTION: END -->


    <!-- REVIEWS SECTION: START -->
    <section class="review-section">
        <!-- Section head -->
        <div class="container">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Learner Reviews</h1>
                    <div>
                        <div class="d-flex flex-nowrap align-items-center">
                            <div class="owl-dots">
                                @if ($reviews)
                                    @foreach ($reviews as $review)
                                        <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot @if($loop->first) active @endif"><span><i class="fa-solid fa-circle"></i></span></button>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <p class="lead text-muted">Here are some reviews of our happy learners</p>
            </div>
        </div>
        <div class="container">

            <div class="reviews owl-carousel owl-theme">
                
                    @if ($reviews)
                        @foreach ($reviews as $review)
                        <div>
                            <!-- Review Item -->
                            <div class="review card @if($loop->first) active @endif">
                                <div class="review__body card-body">
                                    <p class="review__text card-text lead">
                                        <i class="fa-solid fa-quote-left"></i>
                                        {{ $review->body }}
                                        <i class="fa-solid fa-quote-right"></i>
                                    </p>
                                    <div class="review__ratings">
                                        @for ($i=0; $i<$review->rating; $i++)
                                            <i class="fa-solid fa-star"></i>
                                        @endfor
                                        @for ($i=0; $i<5-$review->rating; $i++)
                                            <i class="fa-regular fa-star"></i>
                                        @endfor
                                        <span>{{ $review->rating }}/5</span>
                                    </div>

                                    <div class="d-flex align-items-center">
                                        <img src="{{ $review->user->photo ? url('/').'/images/profile/'.$review->user->photo : asset('images/profile-pic.jpg') }}" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                        <div>
                                            <h4 class="review__title card-title">{{ $review->user->first_name }} {{ $review->user->last_name }}</h4>
                                            <h6 class="review__subtitle card-subtitle text-muted text-capitalize">{{ $review->user->role->name }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    @endif
                    
                

            </div>

            
        </div>
    </section>
    <!-- REVIEWS SECTION: END -->


    <!-- COURSE EXPLORE: START -->
    <section class="course-explore">
        <div class="container text-center">
            <p class="lead fw-bold course-explore__text">{{ $latest_public_courses->count(); }}+ more courses you can explore</p>
            <a href="{{ route('courses') }}" class="btn course-explore__btn">Explore All Courses</a>
        </div>
    </section>
    <!-- COURSE EXPLORE: END -->


    <!--  CATEGORIES SECTION: START -->
    <section class="category-section">
        <!-- Category section heading -->
        <div class="container">
            <div class="d-block text-center position-relative mb-3">
                <img class="title-bg position-absolute" src="{{ asset('images/rainbow-art.png') }}" alt="...">
            <h2 class="category-section__title text-dark text-center d-inline-block">Categories you can enroll now</h2>
            </div>
        </div>
        <div class="container">
            <div class="categories row g-4">
                @if ($categories)
                    @foreach ($categories as $category)
                        <!-- Category Item -->
                        <div class="category col-sm-12 col-md-6 col-lg-4">
                            <div class="card bg-dark text-white">
                                <img src="@if ($category->thumbnail)
                                    {{ $category->thumbnail }}
                                    @else
                                    {{ asset('images/placeholder_category.jpg') }}
                                @endif" class="card-img" alt="...">
                                <a href="{{ route('category.courses', $category->slug) }}" class="category__overlay card-img-overlay">
                                    <div class="d-flex flex-row align-items-end h-100">
                                        <h5 class="category__title card-title">{{ $category->name }}</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>
    <!--  CATEGORIES SECTION: END -->
    
@endsection