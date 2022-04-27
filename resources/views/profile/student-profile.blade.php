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
                                            <span class="h6"><i class="fas fa-graduation-cap text-primary me-1"></i> {{ $user->enrollments->count() }}</span> 
                                            <span class="text">Enrolled Courses</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-solid fa-book-open-reader text-secondary me-1"></i> {{ $user->reads->count() }}</span> 
                                            <span class="text">Completed Lessons</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ route('profile.edit') }}" class="btn btn-primary view-btn mt-3 mt-md-5 ms-auto text-nowrap"><i class="fa-solid fa-edit me-2 fa-sm"></i>Edit Profile</a>
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
                        <nav class="navbar navbar-light navbar-expand-xl mx-0 py-0">
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="visibility: hidden;" aria-hidden="true">
                                <!-- Offcanvas header -->
                                <div class="offcanvas-header bg-light">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <!-- Offcanvas body -->
                                <div class="offcanvas-body p-3 p-xl-0">
                                    <div class="nav-menu bg-dark border pb-0 p-3 w-100">
                                        <!-- Dashboard menu -->
                                        <div class="list-group list-group-dark list-group-borderless">
                                            <a class="list-group-item {{ Request::is('profile') ? 'active' : '' }}" href="{{ route('profile.show') }}"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="{{ route('profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="{{ route('profile.show') }}?#courses"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="{{ route('profile.reviews') }}"><i class="fa-solid fa-star me-2"></i>Reviews</a>
                                            <a class="list-group-item" href="student-profile-delete.html"><i class="fa-solid fa-trash-can me-2"></i>Delete Profile</a>
                                            <a class="list-group-item text-danger bg-danger-soft-hover" href="#"><i class="fa-solid fa-right-from-bracket me-2"></i>Sign Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-xl-9">

                        <!-- COUNTERS -->
                        <div class="profile__content__counters mb-5">
                            <div class="row mb-4">
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-primary bg-opacity-10 text-primary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-graduation-cap fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">{{ $user->enrollments->count() }}</h4>
                                            <p class="mb-0">Total Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-clipboard-check fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">{{ $user->completedCourseCount() }}</h4>
                                            <p class="mb-0">Completed Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-success bg-opacity-10 text-success p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-book-open-reader text-success fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">{{ $user->reads->count() }}</h4>
                                            <p class="mb-0">Completed Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- COURSES -->
                        <div id="courses" class="card profile__content__courses">
                            <h3 class="card-header py-3 bg-white fw-700">My Courses List</h3>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table align-middle table-borderless table-hover">
                                        <thead class="bg-dark text-white rounded">
                                            <tr>
                                                <th class="fw-500">Course Title</th>
                                                <th class="fw-500">Total Lessons</th>
                                                <th class="fw-500">Completed Lessons</th>
                                                <th class="fw-500">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($user->enrollments->count() > 0)
                                                @foreach ($user->enrollments as $enrollment)
                                                    <tr class="course">
                                                        <td>
                                                            <div class="d-flex align-items-center w-100">
                                                                <img src="{{ $enrollment->course->thumbnail }}" class="course__thumb rounded" width="100" height="80"  alt="thumb">
                                                                <div class="ms-2 w-100">
                                                                    <h6 class="course__title"><a href="{{ route('single-course', $enrollment->course->slug ) }}" class="text-decoration-none">{{ $enrollment->course->name }}</a></h6>
                                                                    <div class="course__progress overflow-hidden">
                                                                        <h6 class="text-end mb-0 small text-primary fw-500 me-2">{{ round($enrollment->course->completedLecturesCount($user->id)/$enrollment->course->lessons->count() *100, 0) }}%</h6>
                                                                        <div class="progress" style="height: 0.35rem;">
                                                                            <div class="progress-bar" role="progressbar" style="width: {{ round($enrollment->course->completedLecturesCount($user->id)/$enrollment->course->lessons->count() *100, 0) }}%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{{ $enrollment->course->lessons->count() }}</td>
                                                        <td>{{ $enrollment->course->completedLecturesCount($user->id) }}</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <a href="{{ route('course-lessons', $enrollment->course->slug) }}" class="course__btn course__btn--continue btn">Continue</a>
                                                                @if (round($enrollment->course->completedLecturesCount($user->id)/$enrollment->course->lessons->count() *100, 0) == 100)
                                                                    <a href="{{ route('profile.reset-course-read', $enrollment->course->id) }}" class="reset-course-read-btn course__btn course__btn--restart btn text-nowrap ms-2" data-course_id="{{ $enrollment->course->id }}"><i class="fa-solid fa-rotate fa-sm me-2"></i>Restart</a>
                                                                @endif
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                @endforeach  
                                            @endif
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->

@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){

            if (localStorage.getItem('resetResponseStatus')) {
                toastr.success('Course progress restarted', 'Success');
                localStorage.removeItem('resetResponseStatus');
            }
            
            $('.reset-course-read-btn').on('click', function(e){
                e.preventDefault();
                let courseId = $(this).data('course_id');
                
                axios.post('/profile/reset-read/'+courseId, {

                })
                .then(res => {
                    if (res.status == 200) {
                        if (res.data == 1) {
                            localStorage.setItem("resetResponseStatus", 'success');
                            location.reload();
                        } else {
                            toastr.error('Reset failed', 'Failed');
                        }
                    } else {
                        toastr.error('Reset failed', 'Failed');
                    }
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
            });
        });
    </script>
@endsection