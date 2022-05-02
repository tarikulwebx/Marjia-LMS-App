@extends('layouts.app')

@section('title', 'Courses')

@section('styles')
    <style>
        .page-head,
        .page-content {
            z-index: unset !important;
        }
    </style>
@endsection

@section('content')
    <div class="page courses-page">
        <!-- PAGE HEAD -->
        <div class="page-head text-white">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <h1 class="page-head__title">All Courses</h1>
                    <div>
                        
                    </div>
                </div>
                <p class="page-head__page-description lead m-0">Check out all live courses available for you. You can enroll any course that available bellow.</p>
            </div>
            <!-- Filter -->
            <div class="course-filter mt-4 pt-2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="dropdown category-filter-dropdown">
                                <a class="btn btn-light text-gray-700 dropdown-toggle fw-500" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid text-primary fa-rectangle-list me-2"></i>Courses by Category
                                </a>
                              
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    @if ($categories)
                                        @foreach ($categories as $category)
                                            <li>
                                                <a class="dropdown-item" href="{{ route('category.courses', $category->slug) }}">
                                                    <div class="d-flex align-items-center">
                                                        <img class="rounded category-thumb me-2" src="{{ $category->thumbnail ? $category->thumbnail : asset('images/placeholder_category.jpg') }}" alt="">
                                                        <div class="w-100">
                                                            <div class="d-flex align-items-center justify-content-between">
                                                                <div class="me-3">{{ $category->name }}</div>
                                                                <div class="ms-auto"><span class="badge rounded-pill bg-secondary bg-opacity-25 text-secondary">{{ $category->courses->count() }}</span></div>
                                                            </div>
                                                             
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                            </li>
                                        @endforeach
                                    @endif
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 align-self-end d-none d-sm-block">
                            <div class="d-flex flex-nowrap align-items-center ms-auto justify-content-end mt-3 mt-sm-0">
                                <button id="btn-course-grid-view" class="btn text-white">
                                    <i class="fa-solid fa-grip"></i>
                                </button>
                                <button id="btn-course-list-view" class="btn btn-list text-white">
                                    <i class="fa-solid fa-list"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- PAGE CONTENT -->
        <div class="page-content">

            <!-- COURSES SECTION: START -->
            <section id="course-section" class="course-section">
                <!-- Courses -->
                <div class="container">

                    @if ($courses)
                    <div class="courses">
                        @foreach ($courses as $course)
                        <!-- Course Item -->
                        <div class="card course shadow border-0 h-100">
                            <img src="{{ $course->thumbnail }}" class="card-img-top course__thumbnail" alt="Thumb">
                            <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <a href="{{ route('category.courses', $course->category->slug) }}" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">{{ $course->category->name }}</a> 
                                    <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://www.facebook.com/sharer/sharer.php?u={{ route('single-course', $course->slug) }}' class='social facebook' target='_blank'  rel='noopener'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com/intent/tweet?url={{ route('single-course', $course->slug) }}' class='social twitter' target='_blank'  rel='noopener'><i class='fa-brands fa-twitter'></i></a><a href='{{ route('single-course', $course->slug) }}' data-href='{{ route('single-course', $course->slug) }}' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                        <i class="fa fa-share-alt" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <h3 class="card-title course__title">
                                    <a href="{{ route('single-course', $course->slug) }}">{{ $course->name }}</a>
                                </h3>
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
                    </div>
                    @else 
                        <h5>No Course Available!</h5>
                    @endif

                    
                </div>

                <!-- Pagination -->
                <div class="container mt-5">
                    {{ $courses->links() }}
                </div>


            </section>
            <!-- COURSES SECTION: END -->

            
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>


    <!-- POPULAR COURSE SECTION: START -->
    <section id="popular-course-section">
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
            <div class="courses horizontal-list">
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

                    @else
                        <em>No course found!!</em>
                @endif
                




            </div>
        </div>
    </section>
    <!-- POPULAR COURSE SECTION: END -->


@endsection


