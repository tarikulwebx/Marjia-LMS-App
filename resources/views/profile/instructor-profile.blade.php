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
                                            <a class="list-group-item active" href="{{ route('instructor.profile.show') }}"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.courses') }}"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
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

                        <!-- COUNTERS -->
                        <div class="profile__content__counters mb-5">
                            <div class="row mb-4">
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-primary bg-opacity-10 text-primary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-graduation-cap fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-1">{{ $user->courses->count() }}</h4>
                                            <p class="mb-0">Total Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-users fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-1">{{ $studentsCount }}</h4>
                                            <p class="mb-0">Total Students</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-info bg-opacity-10 text-info p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-user-graduate fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-1">{{ $enrollmentsCount }}</h4>
                                            <p class="mb-0">Enrolled Students</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- Joined Stat -->
                        <div  class="card profile__content__statistics mb-5">
                            <h3 class="card-header py-3 bg-white fw-700">Students Joined Statistics</h3>
                            <div class="card-body">
                                <canvas id="myChart" width="400" height="180"></canvas>
                            </div>
                        </div>

                        <!-- Enroll Stat -->
                        <div  class="card profile__content__statistics">
                            <h3 class="card-header py-3 bg-white fw-700">Enrollments Statistics</h3>
                            <div class="card-body">
                                <canvas id="enrollChart" width="400" height="180"></canvas>
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
<script>
    var cData = JSON.parse('<?php echo $userJoinedData; ?>');
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cData.label,
            datasets: [
                    {
                    label: 'Students joined',
                    data: cData.data,
                    borderColor: 'rgba(214, 51, 132, 1)',
                    backgroundColor: 'rgba(214, 51, 132, 0.15)',
                    borderWidth: 2,
                    borderRadius: 4,
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    var cEnrollData = JSON.parse('<?php echo $enrollmentData; ?>');
    const ctxenroll = document.getElementById('enrollChart').getContext('2d');
    const enrollChart = new Chart(ctxenroll, {
        type: 'bar',
        data: {
            labels: cEnrollData.label,
            datasets: [
                    {
                    label: 'Student enrolled',
                    data: cEnrollData.data,
                    borderColor: 'rgba(110, 66, 193, 1)',
                    backgroundColor: 'rgba(110, 66, 193, 0.15)',
                    borderWidth: 2,
                    borderRadius: 4,
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    
</script>
@endsection