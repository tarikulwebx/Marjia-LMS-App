@extends('layouts.app')

@section('title', 'Profile')

@section('content')

    <!-- PROFILE SECTION: START -->
    <section class="profile">
        <!-- Background -->
        <div class="profile__cover"></div>
        
        <!-- Head -->
        <div class="profile__head">
            <div class="container">
                <div class="card border-0 p-0">
                    <div class="row d-block d-sm-flex">
                        <div class="col-auto">
                            <img src="{{ $user->photo ? url('/').'/images/profile/'.$user->photo : asset('images/profile-pic.jpg') }}" class="img-fluid shadow" width="100" alt="pp">
                        </div>
                        <div class="col align-self-center">
                            <div class="user-info d-md-flex align-items-center">
                                <div>
                                    <h2 class="user-info__name mt-3 mt-sm-5">{{ $user->first_name }} {{ $user->last_name }}</h2>
                                    <ul class="user-info__list list-inline p-0 m-0">
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-solid fa-user-graduate text-danger"></i></span> 
                                            <span class="text text-gray-700">{{ $enrollmentsCount }} Enrolled Students</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-solid fa-graduation-cap text-primary"></i></span> 
                                            <span class="text text-gray-700">{{ $user->courses->count() }} Courses</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ route('admin-dashboard') }}" target="_blank" class="btn btn-primary view-btn mt-3 mt-md-5 ms-auto text-nowrap"><i class="fa fa-external-link fa-sm me-2" aria-hidden="true"></i> Admin Panel</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center align-content-between d-xl-none">
                    <h4 class="mb-0 text-gray-700 fw-500">Navigation</h4>
                    <button class="ms-auto btn btn-primary offcanvas-toggler-btn d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Menu <i class="fa-solid fa-sliders ms-2"></i></button>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="profile__content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">

                        <!-- SIDEBAR -->
                        <nav class="navbar navbar-light navbar-expand-xl mx-0 py-0">
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="visibility: hidden;" aria-hidden="true">
                                <!-- Offcanvas header -->
                                <div class="offcanvas-header bg-light">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <!-- Offcanvas body -->
                                <div class="offcanvas-body p-3 p-xl-0">
                                    <div class="nav-menu border pb-0 p-3 w-100">
                                        <!-- Dashboard menu -->
                                        <div class="list-group list-group-dark list-group-borderless">
                                            <a class="list-group-item" href="{{ route('instructor.profile.show') }}"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item active" href="{{ route('instructor.profile.courses') }}"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.reviews') }}"><i class="fa-solid fa-star me-2"></i>Reviews</a>
                                            <a class="list-group-item" href="{{ route('admin-dashboard') }}" target="_blank"><i class="fa fa-external-link me-2" aria-hidden="true"></i> Admin Site</a>
                                            <a class="list-group-item text-danger bg-danger-soft-hover" href="{{ route("logout") }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa-solid fa-right-from-bracket me-2"></i>Sign Out</a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                                @csrf
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-xl-9">

                        <!-- COURSES -->
                        <div id="courses" class="card profile__content__courses">
                            <h3 class="card-header py-3 bg-white fw-700">My Courses</h3>
                            <div class="card-body pb-0">
                                <div class="table-responsive">
                                    <table class="table align-middle table-borderless table-hover">
                                        <thead class="bg-dark text-white rounded">
                                            <tr>
                                                <th class="fw-500">Course Title</th>
                                                <th class="fw-500">Enrolled</th>
                                                <th class="fw-500">Completed</th>
                                                <th class="fw-500">Status</th>
                                                <th class="fw-500">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($courses)
                                                @foreach ($courses as $course)
                                                    <tr class="course">
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <img src="{{ $course->thumbnail }}" class="course__thumb rounded" width="100" height="70" alt="">
                                                                <div class="ms-2">
                                                                    <h6 class="course__title mb-2"><a href="{{ route('single-course', $course->slug) }}" class="text-decoration-none">{{ $course->name }}</a></h6>
                                                                    <div class="small text-gray-700"><i class="fa-solid fa-table text-secondary me-2"></i>{{ $course->lessons->count() }} lectures</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{{ $course->enrollments->count() }}</td>
                                                        <td>
                                                            @php
                                                                $count = 0;
                                                                foreach ($course->enrollments as $enrollment) {
                                                                    $compeletedLessonsCount = $course->completedLecturesCount($enrollment['user_id']);
                                                                    if ($compeletedLessonsCount == $course->lessons->count()) {
                                                                        $count++;
                                                                    }
                                                                }
                                                            @endphp
                                                            {{ $count }}
                                                        </td>
                                                        <td>
                                                            @if ($course->visibility == 'public')
                                                                <span class="bg-success text-success bg-opacity-10 small rounded px-2 py-1">Live</span>
                                                                @elseif ($course->visibility == 'defined')
                                                                    <span class="bg-warning text-warning bg-opacity-10 small rounded px-2 py-1">Defined</span>
                                                                @else
                                                                    <span class="bg-dark text-gray-600 bg-opacity-10 small rounded px-2 py-1">Private</span>
                                                            @endif
                                                        </td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <a href="{{ route('courses.edit', $course->slug) }}" target="_blank" class="course__btn bg-primary bg-opacity-10 text-decoration-none rounded-3"><i class="fas fa-edit me-1"></i> Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer pt-4">
                                {{ $courses->links() }}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->

@endsection

