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
                    @if (Auth::user())
                        <img src="@if (Auth::user()->photo)
                            {{ url('/') . '/images/profile/' . Auth::user()->photo }}
                            @else
                            {{ asset('images/profile.svg') }}
                        @endif" class="img-fluid" alt="User picture">
                    @else
                        <img src="{{ asset('images/profile.svg') }}" class="img-fluid" alt="User picture">
                    @endif
                    
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
                            @if (Auth::user()->isInstructor() && Auth::user()->isStudent())
                                <li><a class="dropdown-item" href="#">Student Profile <i class="fa-solid fa-user"></i></a></li>
                                <li><a class="dropdown-item" href="#">Instructor Profile <i class="fa-solid fa-user"></i></a></li>
                                @elseif (Auth::user()->isInstructor())
                                    <li><a class="dropdown-item" href="#">My Profile <i class="fa-solid fa-user"></i></a></li>
                                @elseif (Auth::user()->isStudent())
                                    <li><a class="dropdown-item" href="#">My Profile <i class="fa-solid fa-user"></i></a></li>
                            @endif
                            
                            @if (Auth::user()->isAdmin())
                                <li><a class="dropdown-item" href="{{ url('/admin') }}" target="_blank">Admin Dashboard <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                            @endif
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