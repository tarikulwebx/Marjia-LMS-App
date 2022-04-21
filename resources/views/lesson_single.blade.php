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
                                                        <li class="nav-item{{ Request::is('courses/'.$course->slug.'/lessons/'.$lesson->slug) ? ' active' : '' }}">
                                                            <a href="{{ route('lesson-single', [$course->slug, $lesson->slug]) }}" class="nav-link"><span><i class="fa-brands fa-readme"></i></span> <span>{{ $lesson->title }}</span></a>
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
                        <div class="lesson__content__head">
                            <h1 class="mt-2 mb-3 pb-2 border-bottom text-primary">{{ $current_lesson->title }}</h2>
                        </div>
    
                        <div class="lesson__content__body">
                            {!! $current_lesson->body !!}
                        </div>

                        <div class="lesson__content__files downloadable-files border-top py-4">
                            <h4 class="mb-4"><i class="fa-solid fa-download me-2"></i> Files Included</h4>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-image me-2 fa-2x"></i> Image file.jpg</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-pdf me-2 fa-2x"></i> PDf file.pdf</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-word me-2 fa-2x"></i> Word file.doc</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-excel me-2 fa-2x"></i> Excel file.xlsx</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-powerpoint me-2 fa-2x"></i> Powerpoint file.ppt</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-video me-2 fa-2x"></i> Video file.mp4</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-zipper me-2 fa-2x"></i> Zip file.zip</a>
                        </div>

                        <div class="d-flex d-xl-block justify-content-between border-top border-bottom py-4">
                            <button type="button" id="showSidebarBtn" class="btn btn-light d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-sliders"></i> Lessons</button>
                            <div class="navigation d-flex justify-content-between align-items-center">
                                <a href="#" class="btn btn-primary rounded gradient-bg border-0 me-3"><i class="fas fa-chevron-left"></i> <span>Previous</span></a>
                                <a href="#" class="btn btn-primary rounded gradient-bg border-0"><span>Next</span> <i class="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- COURSE LESSON: END -->


@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $("p iframe:first-of-type").parent().addClass("ratio ratio-16x9 rounded overflow-hidden");
        });
    </script>
@endsection