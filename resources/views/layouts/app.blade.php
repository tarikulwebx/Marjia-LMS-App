<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') - {{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/libs.css') }}">
</head>

<body>

    <!-- NAVBAR SECTION: START -->
    <nav class="navbar top-navbar navbar-expand-xl navbar-light shadow sticky-top flex-nowrap">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img src="{{ asset('images/site-logo-white.svg') }}" alt="Logo" class="img-fluid logo">
            </a>
            <button class="navbar-toggler collapsed ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse w-100 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-xl-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="courses.html">Courses</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="blog.html">Blog</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="contact-us.html">Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Others
                        </a>
                        <ul class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                            <li><a href="instructor-dashboard.html" class="dropdown-item">Instructor Dashboard</a></li>
                            <li><a href="student-dashboard.html" class="dropdown-item">Student Dashboard</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a href="register.html" class="dropdown-item">Register</a></li>
                            <li><a href="login.html" class="dropdown-item">Login</a></li>
                            <li><a href="forget-password.html" class="dropdown-item">Forget Password</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a href="about-us.html" class="dropdown-item">About us</a></li>
                            <li><a href="404.html" class="dropdown-item">404 not found</a></li>
                            <li><a href="faq-page.html" class="dropdown-item">FAQ page</a></li>
                        </ul>
                    </li>
                </ul>
                <!-- NAVBAR SEARCH FORM CONTENT -->
                <form class="d-flex search-form">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <!-- USER DROPDOWN CONTENT -->
            <div class="dropdown user-dropdown ml-1">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="{{ asset('images/profile.svg') }}" class="img-fluid" alt="User picture">
                </a>

                <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuLink">
                    @guest
                        @if (Route::has('login'))
                            <li><a class="dropdown-item" href="{{ route('login') }}">Login <i class="fa fa-sign-in"></i></a></li>
                        @endif

                        @if (Route::has('register'))
                            <li><a class="dropdown-item" href="{{ route('register') }}">Register <i class="fa-solid fa-user-plus"></i></a></li>
                        @endif

                        @else
                            <li>
                                <h4 class="dropdown-header">{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</h4>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="student-dashboard.html">My Profile <i class="fa-solid fa-user"></i></a></li>
                            <li><a class="dropdown-item" href="#">Admin Dashboard <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route("logout") }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
    <!-- NAVBAR SECTION: END -->


    @yield('content')

    
    <!-- FOOTER SECTION: START -->
    <section class="footer shadow">
        <!-- Footer content -->
        <div class="footer__content">
            <div class="container">
                <div class="row">
                    <!-- Location Widget -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="widget">
                            <img class="footer__logo" src="{{ asset('images/site-logo-white.svg') }}" alt="Logo">
                            <ul class="footer__content__location footer__ul">
                                <li>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:01717678426" class="text-decoration-none">+880123456789</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto:info@example.com" class="text-decoration-none">info@example.com</a>
                                </li>
                                <li>
                                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                    <a href="#" class="text-decoration-none">BRUR, Rangpur, Bangladesh</a>
                                </li>
                            </ul>
                            <div class="footer__social-icons">
                                <a href="#" class="facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" class="twitter" title="Twitter"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" class="github" title="Github"><i class="fa-brands fa-github"></i></a>
                                <a href="#" class="linkedin" title="Linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget__head">Useful links</h4>
                            <ul class="footer__ul">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget__head">Support</h4>
                            <ul class="footer__ul">
                                <li><a href="page.html">DOC</a></li>
                                <li><a href="page.html">Support</a></li>
                                <li><a href="faq-page.html">FAQ</a></li>
                                <li><a href="page.html">Download</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget__head">Terms</h4>
                            <ul class="footer__ul">
                                <li><a href="page.html">Term & Condition</a></li>
                                <li><a href="page.html">Privacy & Policy</a></li>
                                <li><a href="page.html">Partners</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="container">
                <p class="m-0 text-center">&copy; Copyright 2022 <a href="index.html">marjia-lms</a> All rights reserved</p>
            </div>
        </div>
    </section>
    <!-- FOOTER SECTION: END -->


    <!-- BACK TO TOP -->
    <a href="#" id="back-to-top" class="back-to-top shadow-lg"><i class="fas fa-chevron-up"></i></a>



    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/libs.js') }}"></script>
</body>

</html>