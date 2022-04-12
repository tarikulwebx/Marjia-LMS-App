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
                            <img src="images/user-thumbs/pp_khalid.jpg" class="img-fluid shadow" width="100" alt="">
                        </div>
                        <div class="col align-self-center">
                            <div class="user-info d-md-flex align-items-center">
                                <div>
                                    <h2 class="user-info__name mt-3 mt-sm-5">Abdullah Khalid</h2>
                                    <ul class="user-info__list list-inline p-0 m-0">
                                        <li class="list-inline-item">
                                            <span class="h6">12</span> 
                                            <span class="text">Enrolled courses</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6">35</span> 
                                            <span class="text">Completed courses</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6">1234</span> 
                                            <span class="text">Completed lessons</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="student-dashboard.html?#courses" class="btn btn-primary view-btn mt-3 mt-md-5 ms-auto text-nowrap"><i class="fa-solid fa-eye me-2 fa-sm"></i> Enrolled Courses</a>
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
                                            <a class="list-group-item active" href="student-dashboard.html"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="student-profile-edit.html"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="student-dashboard.html?#courses"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="student-profile-reviews.html"><i class="fa-solid fa-star me-2"></i>Reviews</a>
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
                                            <h4 class="mb-0">9</h4>
                                            <p class="mb-0">Total Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-clipboard-check fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">5</h4>
                                            <p class="mb-0">Completed Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div class="d-flex h-100 justify-content-center align-items-center bg-success bg-opacity-10 text-success p-4 rounded-3">
                                        <div class=""><i class="fa-solid fa-medal fa-3x"></i></div>
                                        <div class="ms-4 text-dark">
                                            <h4 class="mb-0">4</h4>
                                            <p class="mb-0">Achieved Certificates</p>
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
                                                <th class="fw-500">Total Lectures</th>
                                                <th class="fw-500">Completed Lectures</th>
                                                <th class="fw-500">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="course">
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="https://loremflickr.com/640/360" class="course__thumb rounded" width="100" height="80"  alt="">
                                                        <div class="ms-2">
                                                            <h6 class="course__title"><a href="#" class="text-decoration-none">Lorem ipsum dolor sit amet</a></h6>
                                                            <div class="course__progress overflow-hidden">
                                                                <h6 class="text-end mb-0 small">75%</h6>
                                                                <div class="progress" style="height: 0.4rem;">
                                                                    <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>85</td>
                                                <td>60</td>
                                                <td>
                                                    <a href="#" class="course__btn course__btn--continue btn">Continue</a>
                                                </td>
                                            </tr>
                                            <tr class="course">
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="https://loremflickr.com/640/360" class="course__thumb rounded" width="100" height="80" alt="">
                                                        <div class="ms-2">
                                                            <h6 class="course__title"><a href="#" class="text-decoration-none">Lorem ipsum dolor sit amet</a></h6>
                                                            <div class="course__progress overflow-hidden">
                                                                <h6 class="text-end mb-0 small">100%</h6>
                                                                <div class="progress" style="height: 0.4rem;">
                                                                    <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>35</td>
                                                <td>35</td>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <button class="course__btn course__btn--complete btn text-nowrap me-2" disabled><i class="fa-solid fa-check fa-sm me-2"></i>Complete</button>
                                                        <a href="#" class="course__btn course__btn--restart btn text-nowrap"><i class="fa-solid fa-rotate fa-sm me-2"></i>Restart</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="course">
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="https://loremflickr.com/640/360" class="course__thumb rounded" width="100" height="80"  alt="">
                                                        <div class="ms-2">
                                                            <h6 class="course__title"><a href="#" class="text-decoration-none">Lorem ipsum dolor sit amet</a></h6>
                                                            <div class="course__progress overflow-hidden">
                                                                <h6 class="text-end mb-0 small">75%</h6>
                                                                <div class="progress" style="height: 0.4rem;">
                                                                    <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>85</td>
                                                <td>60</td>
                                                <td>
                                                    <a href="#" class="course__btn course__btn--continue btn">Continue</a>
                                                </td>
                                            </tr>
                                            
                                            
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