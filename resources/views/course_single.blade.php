@extends('layouts.app')

@section('title', $course->name)

@section('content')
    <div class="page single-course-page">
        <!-- PAGE HEAD -->
        <div class="page-head">
            <div class="container">
                <a class="page-head__category pill badge bg-white bg-opacity-25 text-white text-decoration-none" href="#">{{ $course->category->name }}</a>
                <h1 class="page-head__title">{{ $course->name }}</h1>
                <p class="page-head__page-description lead m-0">{{ $course->short_description }}</p>
                <div class="page-head__meta mt-3">
                    <ul class="p-0 list-unstyled list-inline">
                        <li class="list-inline-item"><i class="fa-solid fa-star"></i> 4.5/5.0</li>
                        <li class="list-inline-item"><i class="fa-solid fa-users"></i> {{ $course->enrollments->count() }}+ enrolled</li>
                        <li class="list-inline-item"><i class="fa-solid fa-circle-info"></i> Last updated {{ $course->updated_at->format('m/Y') }}</li>
                    </ul>
                </div>
                <div class="page-head__author d-flex align-items-center">
                    <img src="{{ $course->user->photo ? url('/').'/images/profile/'.$course->user->photo : asset('images/profile-pic.jpg') }}" class="rounded-circle" width="40" alt="Thumb">
                    <div class="pl-3">
                        <h5><a class="text-decoration-none" href="#">{{ $course->user->first_name }} {{ $course->user->last_name }}</a></h5>
                        <p class="m-0 text-capitalize">{{ $course->user->role->name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- PAGE CONTENT -->
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <!-- Course Details -->
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="course-details card shadow rounded-3">
                            <div class="card-header bg-white">
                                <ul class="course-details__nav nav nav-pills p-2" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview"
                                            aria-selected="true">Overview</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-instructor-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-instructor" type="button" role="tab"
                                            aria-controls="pills-instructor" aria-selected="false">Instructor</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-reviews-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-reviews" type="button" role="tab"
                                            aria-controls="pills-reviews" aria-selected="false">Reviews</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body p-4">
                                <div class="tab-content" id="pills-tabContent">
                                    <!-- Course Overview Tab -->
                                    <div class="tab-pane fade show active" id="pills-overview" role="tabpanel"
                                        aria-labelledby="pills-overview-tab">
                                        <!-- Description -->
                                        <div class="course-details__description">
                                            <h3>Course Description</h3>
                                            {!! $course->description !!}
                                        </div>

                                        <!-- What you'll learn -->
                                        <div class="course-details__learnings">
                                            <h3>What you'll learn</h3>
                                            <ul class="list-group list-group-borderless">
                                                @php
                                                    $string = $course->learning; 
                                                    $arry = explode(';', $string); 
                                                @endphp
                                                @foreach ($arry as $item)
                                                    @if (! empty($item))
                                                        <li class="list-group-item"><i class="fa-solid fa-circle-check text-primary text-opacity-75 me-2"></i> {{ $item }}</li>
                                                    @endif
                                                @endforeach
                                            </ul>
                                        </div>


                                        <!-- Curriculums -->
                                        <div class="course-details__curriculums">
                                            <h3 class="mb-3">Curriculum</h3>
                                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                                <!-- Accordion Item 1 -->
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                        <button class="accordion-button rounded" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="panelsStayOpen-collapseOne">
                                                            Introduction of Web Development <span class="d-inline-block ms-2">(123 lecture)</span>
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne"
                                                        class="accordion-collapse collapse show"
                                                        aria-labelledby="panelsStayOpen-headingOne">
                                                        <div class="accordion-body bg-transparent">
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            Introduction
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Front-end Development</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>Back-end overview</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Full Stack JS</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Accordion Item 2 -->
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                        <button class="accordion-button rounded collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                            Let's Start development <span class="ms-2">(123 lectures)</span>
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseTwo"
                                                        class="accordion-collapse collapse"
                                                        aria-labelledby="panelsStayOpen-headingTwo">
                                                        <div class="accordion-body bg-transparent">
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            Introduction
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Front-end Development</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>Back-end overview</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Full Stack JS</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Accordion Item 3 -->
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                        <button class="accordion-button rounded collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseThree">
                                                            Basic Web Development <span class="ms-2">(123 lecture)</span>
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseThree"
                                                        class="accordion-collapse collapse"
                                                        aria-labelledby="panelsStayOpen-headingThree">
                                                        <div class="accordion-body bg-transparent">
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            Introduction
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Front-end Development</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>Back-end overview</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div class="ms-2 me-auto">
                                                                        <div>
                                                                            <i class="fa-brands fa-readme"></i>
                                                                            <span>What is Full Stack JS</span>
                                                                        </div>
                                                                    </div>
                                                                    <span class="read-time">37 min</span>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- Instructor Tab -->
                                    <div class="tab-pane fade" id="pills-instructor" role="tabpanel"
                                        aria-labelledby="pills-instructor-tab">
                                        <div class="instructor">
                                            <div class="row">
                                                <div class="col-md-4 col-lg-5 align-self-center">
                                                    <img src="{{ $course->user->photo ? url('/').'/images/profile/'.$course->user->photo : asset('images/profile-pic.jpg') }}" class="instructor__thumb img-fluid" alt="Instructor">
                                                </div>
                                                <div class="col-md-8 col-lg-7 align-self-center">
                                                    <div class="instructor__details">
                                                        <h3>{{ $course->user->first_name }} {{ $course->user->last_name }}</h3>
                                                        <h5>{{ $course->user->role->name }}</h5>
                                                        <div class="social-icons">
                                                            @if ($course->user->facebook)
                                                                <a href="{{ $course->user->facebook }}" class="facebook" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                                            @endif
                                                            @if ($course->user->twitter)
                                                                <a href="{{ $course->user->twitter }}" class="twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                                            @endif
                                                            @if ($course->user->telegram)
                                                                <a href="{{ $course->user->telegram }}" class="telegram" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                                                            @endif
                                                            @if ($course->user->github)
                                                                <a href="{{ $course->user->github }}" class="github" target="_blank"><i class="fa-brands fa-github"></i></a>
                                                            @endif
                                                            @if ($course->user->linkedin)
                                                                <a href="{{ $course->user->linkedin }}" class="linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                                            @endif
                                                            @if ($course->user->instagram)
                                                                <a href="{{ $course->user->instagram }}" class="instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                                            @endif
                                                            
                                                            
                                                        </div>
                                                        <div class="location">
                                                            <ul class="list-group list-group-borderless">
                                                                @if ($course->user->phone)
                                                                    <li class="list-group-item"><i class="fa-solid fa-phone me-2 text-primary"></i> <a href="{{ 'tel:'.$course->user->phone }}" class="text-decoration-none"></a></li>
                                                                @endif
                                                                <li class="list-group-item"><i class="fa-solid fa-envelope me-2 text-primary"></i> <a href="{{ 'mailto:'.$course->user->email }}" class="text-decoration-none">{{ $course->user->email }}</a></li>
                                                                @if ($course->user->address)
                                                                    <li class="list-group-item"><i class="fa-solid fa-location-dot me-2 text-primary"></i> <a href="{{ 'http://maps.google.com/?q='.$course->user->address }}" target="_blank" class="text-decoration-none">{{ $course->user->address }}</a></li>
                                                                @endif
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            @if ($course->user->about)
                                                <div class="instructor__about mt-4">
                                                    <h3 class="text-dark">About {{ $course->user->first_name }} {{ $course->user->last_name }}</h3>
                                                    <p>{{ $course->user->about }}</p>
                                                </div>
                                            @endif
                                            
                                        </div>
                                    </div>

                                    <!-- Reviews Tab -->
                                    <div class="tab-pane fade" id="pills-reviews" role="tabpanel"
                                        aria-labelledby="pills-reviews-tab">
                                        <!-- Review START -->
                                        <div class="reviews">
                                            <h4 class="reviews__title mb-4">Student Reviews</h4>
                                            <div class="reviews__raging-info mb-5">
                                                <div class="row">
                                                    <div class="col-md-4 mb-3 mb-md-0 text-center">
                                                        <h2 class="mb-0 text-dark">4.5</h2>
                                                        <ul class="list-inline text-warning mb-2">
                                                            <li class="list-inline-item me-0"><i class="fas fa-star"></i></li>
                                                            <li class="list-inline-item me-0"><i class="fas fa-star"></i></li>
                                                            <li class="list-inline-item me-0"><i class="fas fa-star"></i></li>
                                                            <li class="list-inline-item me-0"><i class="fas fa-star"></i></li>
                                                            <li class="list-inline-item me-0"><i class="fa-solid fa-star-half-stroke"></i></li>
                                                        </ul>
                                                        <p class="mb-0">(Based on average review)</p>
                                                    </div>
                                                    <div class="col-md-8 ">
                                                        <div class="row align-items-center">
                                                            <div class="col-6 col-sm-8">
                                                                <div class="progress w-100" style="height: 5px;">
                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-sm-4">
                                                                <ul class="list-inline mb-0 text-warning">
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="row align-items-center">
                                                            <div class="col-6 col-sm-8">
                                                                <div class="progress" style="height: 5px;">
                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-sm-4">
                                                                <ul class="list-inline mb-0 text-warning">
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="row align-items-center">
                                                            <div class="col-6 col-sm-8">
                                                                <div class="progress" style="height: 5px;">
                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-sm-4">
                                                                <ul class="list-inline mb-0 text-warning">
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="row align-items-center">
                                                            <div class="col-6 col-sm-8">
                                                                <div class="progress" style="height: 5px;">
                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-sm-4">
                                                                <ul class="list-inline mb-0 text-warning">
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="row align-items-center">
                                                            <div class="col-6 col-sm-8">
                                                                <div class="progress" style="height: 5px;">
                                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-sm-4">
                                                                <ul class="list-inline mb-0 text-warning">
                                                                    <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                    <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Review Item -->
                                            <div class="reviews__review d-md-flex">
                                                <img src="images/avatar-female.png" class="reviews__review__thumb rounded-circle mb-2 mb-md-0" width="100" alt="thumb">
                                                <div>
                                                    <h5 class="reviews__review__name">John Mann</h5>
                                                    <ul class="reviews__review__rating list-inline text-warning mt-0">
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></i></li>
                                                    </ul>
                                                    <p class="reviews__review__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate ad animi? Rerum similique nostrum illo? Dicta, dolore aut porro cumque aperiam error animi eaque quibusdam voluptatem libero consequuntur facere totam id veniam praesentium fugiat aliquam adipisci nemo recusandae aliquid.</p>
                                                    <span class="reviews__review__date">- 3 days ago</span>
                                                </div>
                                            </div>

                                            <!-- Review Item -->
                                            <div class="reviews__review d-md-flex">
                                                <img src="images/avatar.png" class="reviews__review__thumb rounded-circle  mb-2 mb-md-0" width="100" alt="thumb">
                                                <div>
                                                    <h5 class="reviews__review__name">Federico Lewis</h5>
                                                    <ul class="reviews__review__rating list-inline text-warning mt-0">
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></i></li>
                                                    </ul>
                                                    <p class="reviews__review__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate ad animi? Rerum similique nostrum illo? Dicta, dolore aut porro cumque aperiam error animi eaque quibusdam voluptatem libero consequuntur facere totam id veniam praesentium fugiat aliquam adipisci nemo recusandae aliquid.</p>
                                                    <span class="reviews__review__date">- 3 days ago</span>
                                                </div>
                                            </div>
                                            <!-- Review Item -->
                                            <div class="reviews__review d-md-flex">
                                                <img src="images/avatar-female.png" class="reviews__review__thumb rounded-circle  mb-2 mb-md-0" width="100" alt="thumb">
                                                <div>
                                                    <h5 class="reviews__review__name">Victor Miller</h5>
                                                    <ul class="reviews__review__rating list-inline text-warning mt-0">
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                        <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></i></li>
                                                    </ul>
                                                    <p class="reviews__review__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate ad animi? Rerum similique nostrum illo? Dicta, dolore aut porro cumque aperiam error animi eaque quibusdam voluptatem libero consequuntur facere totam id veniam praesentium fugiat aliquam adipisci nemo recusandae aliquid.</p>
                                                    <span class="reviews__review__date">- 3 days ago</span>
                                                </div>
                                            </div>


                                            <!-- Review Form -->
                                            <div class="reviews__review-form">
                                                <h4 class="mb-4">Leave a Review</h4>
                                                <form action="#">
                                                    <div class="row g-3">
                                                        <div class="col-md-6">
                                                            <input class="form-control" type="text" placeholder="Name" >
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input class="form-control" type="text" placeholder="Email" >
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form-control">
                                                                <div class="d-flex">
                                                                    <div id="reviewRating"></div>
                                                                    <input id="reviewRatingInput" type="hidden" name="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <textarea class="form-control" name="review_text" rows="4" placeholder="Your review"></textarea>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Post Review</button>
                                                        </div>
                                                        
                                                    </div>
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <!-- Course Sidebar -->
                    <div class="col-lg-4">
                        <div class="single-course-page__sidebar">
                            <!-- Enroll widget -->
                            <div class="enroll-widget bg-white shadow rounded-3 mb-5">
                                <img src="{{ $course->thumbnail }}" class="img-fluid w-100 rounded" alt="Thumb">
                                <div class="enroll-widget__content d-flex align-items-center justify-content-between">
                                    <div>
                                        <h5>Share on</h5>
                                        <ul class="social-icons list-inline p-0 m-0">
                                            <li class="list-inline-item"><a href='https://www.facebook.com/sharer/sharer.php?u={{ route('single-course', $course->slug) }}' class="facebook " target='_blank'  rel='noopener'><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li class="list-inline-item"><a href="https://twitter.com/intent/tweet?url={{ route('single-course', $course->slug) }}" target="_blank" class="twitter" target='_blank'  rel='noopener'><i class="fa-brands fa-twitter"></i></a></li>
                                            <li class="list-inline-item"><a href="https://www.linkedin.com/sharing/share-offsite/?url={{ route('single-course', $course->slug) }}" class="linkedin" target='_blank'  rel='noopener'><i class="fa-brands fa-linkedin"></i></a></li>
                                            <li class="list-inline-item">
                                                <a href='{{ route('single-course', $course->slug) }}' class='copyClipBoardBtn copy'><i class='fa-solid fa-copy'></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    @if (Auth::user() && !Auth::user()->role->name == 'administrator')
                                        @php
                                            $is_enrolled = 0;
                                        @endphp
                                        @if (Auth::user()->enrollments)
                                            
                                            @foreach (Auth::user()->enrollments as $enrollment)
                                                @if ($enrollment->course_id == $course->id)
                                                    <a href="#" class="enroll-btn btn btn-lg btn-primary rounded-2"><i class="fa-solid fa-user-graduate me-2"></i>Continue</a>
                                                    
                                                    @php
                                                        $is_enrolled = 1;
                                                    @endphp

                                                    @break
                                                @endif
                                            @endforeach
                                            
                                        @endif

                                        @if ($is_enrolled == 0)
                                            <a href="#" class="enroll-btn btn btn-lg btn-primary rounded-2"><i class="fa-solid fa-user-graduate me-2"></i>Enroll</a>
                                        @endif
                                    @elseif (Auth::user() && Auth::user()->role->name == 'administrator')
                                        <a href="#" class="enroll-btn btn btn-lg btn-primary rounded-2"><i class="fa-solid fa-angles-right fa-sm me-2"></i>Lessons</a>
                                    @else
                                        <a href="#" class="enroll-btn btn btn-lg btn-primary rounded-2"><i class="fa-solid fa-user-graduate me-2"></i>Enroll</a>
                                    @endif
                                   
                                </div>
                            </div>

                            <!-- Course Inclusion -->
                            <div class="inclusion-widget bg-white shadow rounded-3">
                                <h3 class="h4 mb-3 text-capitalize">This course included</h3>
                                <ul class="list-group list-group-borderless">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <h6><i class="fa-solid fa-book-open-reader me-2 text-primary"></i>Lessions</h6>
                                        </div>
                                        <span>123</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <h6><i class="fa-regular fa-clock me-2 text-primary"></i>Duration</h6>
                                        </div>
                                        <span>{{ $course->duration }}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <h6><i class="fa-solid fa-signal me-2 text-primary"></i>Level</h6>
                                        </div>
                                        <span>{{ $course->level }}</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <h6><i class="fa-solid fa-earth-asia me-2 text-primary"></i>Language</h6>
                                        </div>
                                        <span>{{ $course->language }}</span>
                                    </li>
                                    

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- POPULAR COURSE SECTION: START -->
    <section id="popular-course-section" class="course-section bg-light-blue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        <!-- Section head -->
        <div class="container pt-4">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Trending courses</h1>
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
                <p class="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <!-- Courses -->
        <div class="container">
            <div class="courses">                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_html.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="#" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="#">Learn HTML</a>
                        </h3>
                        <div class="course__rating mb-2 d-flex align-items-center">
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star-half-stroke"></i></small>
                            <span>4.5/5</span>
                        </div>
                        <p class="card-text course__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!</p>
                        <div class="card-footer bg-transparent mt-auto px-0">
                            <div class="course__meta align-items-center d-flex justify-content-between ">
                                <span class="h6 course__meta__readtime m-0">
                                    <i class="fa-regular fa-clock text-danger"></i>
                                    17h 30m
                                </span>
                                <span class="h6 course__meta__lectures m-0">
                                    <i class="fa-solid fa-circle-play text-success"></i>
                                    72 lectures
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_java_programming.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="#" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Programming</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="#">Learn Java Programming</a>
                        </h3>
                        <div class="course__rating mb-2 d-flex align-items-center">
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star-half-stroke"></i></small>
                            <span>4.5/5</span>
                        </div>
                        <p class="card-text course__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!</p>
                        <div class="card-footer bg-transparent mt-auto px-0">
                            <div class="course__meta align-items-center d-flex justify-content-between ">
                                <span class="h6 course__meta__readtime m-0">
                                    <i class="fa-regular fa-clock text-danger"></i>
                                    17h 30m
                                </span>
                                <span class="h6 course__meta__lectures m-0">
                                    <i class="fa-solid fa-circle-play text-success"></i>
                                    72 lectures
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_javascript.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="#" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="#">Learn Basic Javascript</a>
                        </h3>
                        <div class="course__rating mb-2 d-flex align-items-center">
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star-half-stroke"></i></small>
                            <span>4.5/5</span>
                        </div>
                        <p class="card-text course__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!</p>
                        <div class="card-footer bg-transparent mt-auto px-0">
                            <div class="course__meta align-items-center d-flex justify-content-between ">
                                <span class="h6 course__meta__readtime m-0">
                                    <i class="fa-regular fa-clock text-danger"></i>
                                    17h 30m
                                </span>
                                <span class="h6 course__meta__lectures m-0">
                                    <i class="fa-solid fa-circle-play text-success"></i>
                                    72 lectures
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100 d-lg-none d-xl-block">
                    <img src="images/course-thumbs/ct_jquery.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="#" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="#">Learn JQuery Framework</a>
                        </h3>
                        <div class="course__rating mb-2 d-flex align-items-center">
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star"></i></small>
                            <small><i class="fa-solid fa-star-half-stroke"></i></small>
                            <span>4.5/5</span>
                        </div>
                        <p class="card-text course__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos illo voluptate aperiam dolorem molestiae maiores repudiandae non, iusto quibusdam!</p>
                        <div class="card-footer bg-transparent mt-auto px-0">
                            <div class="course__meta align-items-center d-flex justify-content-between ">
                                <span class="h6 course__meta__readtime m-0">
                                    <i class="fa-regular fa-clock text-danger"></i>
                                    17h 30m
                                </span>
                                <span class="h6 course__meta__lectures m-0">
                                    <i class="fa-solid fa-circle-play text-success"></i>
                                    72 lectures
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </section>
    <!-- POPULAR COURSE SECTION: END -->



    <!--  CATEGORIES SECTION: START -->
    <section class="category-section mt-5">
        <!-- Category section heading -->
        <div class="container">
            <div class="d-block text-center position-relative mb-4">
                <img class="title-bg position-absolute" src="images/rainbow-art.png" alt="">
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
                                <a href="course-category.html" class="category__overlay card-img-overlay">
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


@section('scripts')
    <script src="https://platform.twitter.com/widgets.js"></script>
@endsection