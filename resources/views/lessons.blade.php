@extends('layouts.app')

@section('title', 'Lessons of ' . $course->name)

@section('content')

    
    <!-- COURSE LESSON: START -->
    <div class="lesson">
        <div class="container">
            <div class="row g-3">
                <div class="col-xl-3">
                    <nav class="lesson__sidenav navbar navbar-expand-xl m-0 p-0">
                        <div class="offcanvas offcanvas-start border-0" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                              <h5 class="offcanvas-title text-white" id="offcanvasScrollingLabel">{{ $course->name }}</h5>
                              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav sidenav flex-column">

                                    <!-- Sidebar - Brand -->
                                    <h4 class="sidenav__brand d-none d-xl-block border-bottom text-center">
                                        <img src="{{ $course->thumbnail }}" class="img-fluid rounded" alt="">
                                        <a href="{{ route('single-course', $course->slug) }}" class=" d-inline-block my-2">{{ $course->name }}</a>
                                    </h4>

                                    @if ($course->lessons)
                                        @if ($groups)
                                            @foreach ($groups as $group)
                                                <!-- Heading -->
                                                <h5 class="sidenav__heading">
                                                    {{ $group->name }}
                                                </h5>
                                                <!-- Lesson item -->
                                                @if ($group->lessons)
                                                    @foreach ($group->lessons as $lesson)
                                                        <li class="nav-item{{ Request::is('courses/'.$course->slug.'/lessons/'.$lesson->slug) ? ' active' : '' }} {{ Auth::user()->isRead($lesson->id) ? ' read' : '' }}">
                                                            <a href="{{ route('lesson-single', [$course->slug, $lesson->slug]) }}" class="nav-link"><span>@if(Auth::user()->isRead($lesson->id)) <i class="fa-solid fa-circle-check"></i> @else <i class="fa-solid fa-book-open"></i> @endif</span> <span>{{ $lesson->title }}</span></a>
                                                        </li>
                                                    @endforeach
                                                @endif
                                            @endforeach
                                        @endif
                                    @endif
            
            
                                    <!-- Sidebar Toggler (Sidebar) -->
                                    <div class="text-center border-top mt-4 pt-4 pb-2">
                                        <a href="{{ route('single-course', $course->slug) }}" class="h6 text-decoration-none fw-bold fs-5" style="font-size: 1.125rem !important;"><i class="fa-solid fa-circle-left fa-sm me-2"></i>Course Details</a>
                                    </div>
            
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-xl-9">
                    <div class="col-sm-12 lesson__content">
                        @if (session('course_action_msg'))
                            <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
                                <div class="me-2 pe-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </div>
                                <div>
                                    {{ session('course_action_msg') }}
                                </div>
                                <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif
                        
                        <div class="lesson__content__head">
                            <div class="d-flex d-xl-block justify-content-between">
                                <button type="button" id="showSidebarBtn" class="btn btn-sm rounded btn-light bg-primary bg-opacity-10 text-primary d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-sliders"></i> Lessons</button>
                                <div class="navigation d-flex justify-content-between align-items-center">
                                    <a href="{{ route('single-course', $course->slug) }}" class="btn btn-sm btn-primary rounded bg-secondary bg-opacity-10 text-secondary border-0 me-3"><i class="fas fa-chevron-left"></i> <span>Course info</span></a>
                                    <a href="{{ route('lesson-single', [$course->slug, $course->firstLessonOrContinueSlug(Auth::user()->id)]) }}" class="btn btn-sm btn-primary rounded bg-secondary bg-opacity-10 text-secondary border-0"><span>Continue</span> <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <hr class="my-4 bg-primary">
                        </div>
    
                        <div class="lesson__content__body">

                            <div class="row mb-4">
                                <div class="col-sm-6 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-book-open fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">{{ $course->lessons->count() }}</h4>
                                            <p class="mb-0">Total Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-success bg-opacity-10 text-success p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-book-open-reader text-success fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">{{ $course->completedLecturesCount(Auth::user()->id) }}</h4>
                                            <p class="mb-0">Completed Lessons</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="progress" style="height: 0.6rem">
                                <div class="progress-bar" role="progressbar" style="width: {{ $course->lessons->count() > 0 ? round($course->completedLecturesCount(Auth::user()->id)/$course->lessons->count() *100, 0) : '0' }}%;" aria-valuenow="{{ $course->lessons->count() > 0 ? round($course->completedLecturesCount(Auth::user()->id)/$course->lessons->count() *100, 0) : '0' }}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5 class="text-end mt-2">{{ $course->lessons->count() > 0 ? round($course->completedLecturesCount(Auth::user()->id)/$course->lessons->count() *100, 0) : '0' }}%</h5>

                            <h2>Hi, Tarikul</h2>
                            <p class="lead">You're learning <a href="{{ route('single-course', $course->slug) }}"><strong>{{ $course->name }}</strong></a>. I think you're enjoying this course. For your acknowledgement this course contains <strong>{{ $course->lessons->count() }}</strong> lessons and required files are provided with every lessons.</p>
                            <div class="text-end">
                                <a href="{{ route('lesson-single', [$course->slug, $course->firstLessonOrContinueSlug(Auth::user()->id)]) }}" class="btn btn-primary text-white">Continue Reading</a>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- COURSE LESSON: END -->


@endsection