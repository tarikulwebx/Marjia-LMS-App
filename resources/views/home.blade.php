@extends('layouts.app')

@section('title', 'Home')

@section('content')

    <!-- INTRO SECTION: START -->
    <section id="intro-section" class="intro-section">
        <div class="container">
            <div class="row align-items-center text-white">
                <div class="col-lg-6 intro">
                    <h1 class="h1 intro__title">A revolutionary way to <span>educate</span></h1>
                    <p class="lead intro__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates dolor quibusdam sit sequi illo.</p>
                    <a href="courses.html" class="rounded-pill btn btn-rounded intro__btn"> Start course now
                        <span><i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="register.html" class="rounded-pill btn btn-rounded intro__btn">Signup
                        <span><i class="fa fa-sign-in" aria-hidden="true"></i></span>
                    </a>
                </div>
                <div class="col-lg-6">
                    <div class="video-box">
                        <img src="{{ asset('images/intro-art.png') }}" alt="" class="img-fluid w-100">
                        <a href="#" class="glightbox">
                            <span><i class="fa-solid fa-circle-play"></i></span>
                            <span class="border-animation border-animation--border-1"></span>
                            <span class="border-animation border-animation--border-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFFFFF" fill-opacity="1"
                d="M0,256L48,240C96,224,192,192,288,154.7C384,117,480,75,576,96C672,117,768,203,864,197.3C960,192,1056,96,1152,69.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>
    <!-- INTRO SECTION: END -->


    <!-- POPULAR COURSE SECTION: START -->
    <section id="popular-course-section" class="course-section">
        <!-- Section head -->
        <div class="container">
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
                    <img src="images/course-thumbs/ct_algorithm.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Algorithm</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn Algorithm A to Z</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    72 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_bootstrap.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn Bootstrap 5</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_c_programming.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Programming</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">C Programming Basic</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_css.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Advanced CSS</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_html.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn HTML</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
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
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Programming</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn Java Programming</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
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
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn Basic Javascript</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Course Item -->
                <div class="card course shadow border-0 h-100">
                    <img src="images/course-thumbs/ct_jquery.jpg" class="card-img-top course__thumbnail" alt="Thumb">
                    <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <a href="course-category.html" class="course__category badge text-secondary bg-secondary bg-opacity-10 text-decoration-none">Web Front-end</a> 
                            <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </button>
                        </div>
                        <h3 class="card-title course__title">
                            <a href="course-single.html">Learn JQuery Framework</a>
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
                                <span class="h6 course__meta__lessons m-0">
                                    <i class="fa-brands fa-readme"></i>
                                    74 lessons
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
    <!-- POPULAR COURSE SECTION: END -->


    <!-- Recent COURSE SECTION: START -->
    <section id="recent-course-section" class="course-section--recent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        <!-- Section head -->
        <div class="container">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Recent courses</h1>
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
            <div class="courses horizontal-list">
                @if ($latest_public_courses)
                    @foreach ($latest_public_courses as $course)
                        <!-- Course Item -->
                        <div class="card course shadow border-0 h-100">
                            <img src="{{ $course->thumbnail }}" class="card-img-top course__thumbnail" alt="Thumb">
                            <div class="card-body pb-0 h-100 d-flex flex-column align-content-between">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <a href="course-category.html" class="course__category badge text-success bg-success bg-opacity-10 text-decoration-none">{{ $course->category ? $course->category->name : ' ' }}</a>
                                    <button type="button" class="course__share btn text-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-html="true" data-bs-content="<a href='https://facebookcom' class='social facebook'><i class='fa-brands fa-facebook-f'></i></a><a href='https://twitter.com' class='social twitter'><i class='fa-brands fa-twitter'></i></a><a href='https://google.com' data-href='https://google.com' class='copyClipBoardBtn social copy'><i class='fa-solid fa-copy'></i></a>">
                                        <i class="fa fa-share-alt" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <h3 class="card-title course__title"><a href="course-single.html">{{ $course->name }}</a></h3>
                                <div class="course__rating mb-2 d-flex align-items-center">
                                    <small><i class="fa-solid fa-star"></i></small>
                                    <small><i class="fa-solid fa-star"></i></small>
                                    <small><i class="fa-solid fa-star"></i></small>
                                    <small><i class="fa-solid fa-star"></i></small>
                                    <small><i class="fa-solid fa-star-half-stroke"></i></small>
                                    <span>4.5/5</span>
                                </div>
                                <p class="card-text course__description">{{ Str::limit($course->short_description, 150, '...') }}</p>
                                <div class="card-footer bg-transparent mt-auto px-0">
                                    <div class="course__meta align-items-center d-flex justify-content-between ">
                                        <span class="h6 course__meta__readtime m-0">
                                            <i class="fa-solid fa-users"></i>
                                            {{ $course->enrollments->count() }} enrolled
                                        </span>
                                        <span class="h6 course__meta__lessons m-0">
                                            <i class="fa-brands fa-readme"></i>
                                            74 lessons
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,250.7C420,288,480,288,540,250.7C600,213,660,139,720,128C780,117,840,171,900,192C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </section>
    <!-- RECENT COURSE SECTION: END -->


    <!-- REVIEWS SECTION: START -->
    <section class="review-section">
        <!-- Section head -->
        <div class="container">
            <div class="section-head">
                <div class="d-flex align-items-center justify-content-between">
                    <h1>Learner Reviews</h1>
                    <div>
                        <div class="d-flex flex-nowrap align-items-center">
                            <div class="owl-dots">
                                <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot active"><span><i class="fa-solid fa-circle"></i></span></button>
                                <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot"><span><i class="fa-solid fa-circle"></i></span></button>
                                <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot"><span><i class="fa-solid fa-circle"></i></span></button>
                                <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot"><span><i class="fa-solid fa-circle"></i></span></button>
                                <button role="button" class="bg-transparent p-0 border-0 text-muted owl-dot"><span><i class="fa-solid fa-circle"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div class="container">

            <div class="reviews owl-carousel owl-theme">
                <div>
                    <!-- Review Item -->
                    <div class="review card active">
                        <div class="review__body card-body">
                            <p class="review__text card-text lead">
                                <i class="fa-solid fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut ratione alias deserunt atque vel commodi autem nulla recusandae non rerum, nihil quasi error aliquam minus officia itaque dicta tenetur.
                                <i class="fa-solid fa-quote-right"></i>
                            </p>
                            <div class="review__ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <span>3.5/5</span>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user-thumbs/pp_khalid.jpg" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                <div>
                                    <h4 class="review__title card-title">AB Khalid</h4>
                                    <h5 class="review__subtitle card-subtitle text-muted">Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- Review Item -->
                    <div class="review card">
                        <div class="review__body card-body">
                            <p class="review__text card-text lead">
                                <i class="fa-solid fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut ratione alias deserunt atque vel commodi autem nulla recusandae non rerum, nihil quasi error aliquam minus officia itaque dicta tenetur.
                                <i class="fa-solid fa-quote-right"></i>
                            </p>
                            <div class="review__ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <span>3.5/5</span>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user-thumbs/pp_tarikul.jpg" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                <div>
                                    <h4 class="review__title card-title">Tarikul Islam</h4>
                                    <h5 class="review__subtitle card-subtitle text-muted">Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- Review Item -->
                    <div class="review card">
                        <div class="review__body card-body">
                            <p class="review__text card-text lead">
                                <i class="fa-solid fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut ratione alias deserunt atque vel commodi autem nulla recusandae non rerum, nihil quasi error aliquam minus officia itaque dicta tenetur.
                                <i class="fa-solid fa-quote-right"></i>
                            </p>
                            <div class="review__ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <span>3.5/5</span>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user-thumbs/pp_samit.jpg" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                <div>
                                    <h4 class="review__title card-title">Saddam Hossen</h4>
                                    <h5 class="review__subtitle card-subtitle text-muted">Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- Review Item -->
                    <div class="review card">
                        <div class="review__body card-body">
                            <p class="review__text card-text lead">
                                <i class="fa-solid fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut ratione alias deserunt atque vel commodi autem nulla recusandae non rerum, nihil quasi error aliquam minus officia itaque dicta tenetur.
                                <i class="fa-solid fa-quote-right"></i>
                            </p>
                            <div class="review__ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <span>3.5/5</span>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user-thumbs/pp_ritu.jpg" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                <div>
                                    <h4 class="review__title card-title">Sabnaj Meherin</h4>
                                    <h5 class="review__subtitle card-subtitle text-muted">Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- Review Item -->
                    <div class="review card">
                        <div class="review__body card-body">
                            <p class="review__text card-text lead">
                                <i class="fa-solid fa-quote-left"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut ratione alias deserunt atque vel commodi autem nulla recusandae non rerum, nihil quasi error aliquam minus officia itaque dicta tenetur.
                                <i class="fa-solid fa-quote-right"></i>
                            </p>
                            <div class="review__ratings">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <span>3.5/5</span>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="images/user-thumbs/pp_rumu.jpg" class="review__thumb img-fluid rounded-circle" alt="Avatar">
                                <div>
                                    <h4 class="review__title card-title">Selina Aktar</h4>
                                    <h5 class="review__subtitle card-subtitle text-muted">Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

            
        </div>
    </section>
    <!-- REVIEWS SECTION: END -->


    <!-- COURSE EXPLORE: START -->
    <section class="course-explore">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,170.7C384,192,480,256,576,266.7C672,277,768,235,864,202.7C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> -->
        <div class="container text-center">
            <p class="lead fw-bold course-explore__text">{{ $latest_public_courses->count(); }}+ more courses you can explore</p>
            <a href="courses.html" class="btn course-explore__btn">Explore All Courses</a>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="course-category.htmlffffff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,170.7C384,192,480,256,576,266.7C672,277,768,235,864,202.7C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> -->
    </section>
    <!-- COURSE EXPLORE: END -->


    <!--  CATEGORIES SECTION: START -->
    <section class="category-section">
        <!-- Category section heading -->
        <div class="container">
            <div class="d-block text-center position-relative mb-3">
                <img class="title-bg position-absolute" src="{{ asset('images/rainbow-art.png') }}" alt="...">
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