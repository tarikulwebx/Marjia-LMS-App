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
                            <img src="images/instructor-thumbs/pp_instructor.jpg" class="img-fluid shadow" width="100" alt="">
                        </div>
                        <div class="col align-self-center">
                            <div class="user-info d-md-flex align-items-center">
                                <div>
                                    <h2 class="user-info__name mt-3 mt-sm-5">Marjia Sultana</h2>
                                    <ul class="user-info__list list-inline p-0 m-0">
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-solid fa-user-graduate text-danger"></i></span> 
                                            <span class="text text-gray-700">2K Enrolled Students</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-solid fa-graduation-cap text-primary"></i></span> 
                                            <span class="text text-gray-700">23 Courses</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" class="btn btn-primary view-btn mt-3 mt-md-5 ms-auto text-nowrap"><i class="fa fa-external-link fa-sm me-2" aria-hidden="true"></i> Admin Panel</a>
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
                                            <a class="list-group-item active" href="instructor-dashboard.html"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="instructor-profile-edit.html"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="instructor-profile-courses.html"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="instructor-profile-reviews.html"><i class="fa-solid fa-star me-2"></i>Reviews</a>
                                            <a class="list-group-item" href="#"><i class="fa fa-external-link me-2" aria-hidden="true"></i> Admin Site</a>
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
                                            <h4 class="mb-1">23</h4>
                                            <p class="mb-0">Total Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-users fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-1">12K+</h4>
                                            <p class="mb-0">Total Students</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-info bg-opacity-10 text-info p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-user-graduate fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-1">2K+</h4>
                                            <p class="mb-0">Enrolled Students</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <!-- COURSES -->
                        <div  class="card profile__content__statistics">
                            <h3 class="card-header py-3 bg-white fw-700">Student Statistics</h3>
                            <div class="card-body">
                                <canvas id="myChart" width="400" height="200"></canvas>
                                

                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->
@endsection