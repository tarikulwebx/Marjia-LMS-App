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
                                                        <li class="nav-item">
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
                            <h1 class="my-3">What is HTML</h1>
                            <div class="d-flex d-xl-block justify-content-between">
                                <button type="button" id="showSidebarBtn" class="btn btn-light d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-sliders"></i> Lessons</button>
                                <div class="navigation d-flex justify-content-between align-items-center">
                                    <a href="#" class="btn btn-primary rounded gradient-bg border-0 me-3"><i class="fas fa-chevron-left"></i> <span>Previous</span></a>
                                    <a href="#" class="btn btn-primary rounded gradient-bg border-0"><span>Next</span> <i class="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                            <hr class="my-4 bg-primary">
                            <p class="mb-0">Short description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sint eligendi quaerat suscipit alias ipsa ad, esse dolorem totam velit porro dolores nesciunt similique facilis, sapiente labore possimus magnam cumque?</p>
                            <hr class="my-4 bg-primary">
                        </div>
    
                        <div class="lesson__content__body">
                            <h2>Typography Example</h2>
                            <p>Lorem ipsum dolor sit amet <a href="#">link</a> adipisicing elit. Cum quo quam in? Corporis odio cumque, necessitatibus dolore laudantium rem earum? Mollitia dicta, qui quas repellendus dignissimos laboriosam quia id temporibus consectetur <strong>bold text</strong> officiis corporis, sunt porro laborum <strong><a href="#">bold link</a></strong> nesciunt blanditiis pariatur illo impedit,  quam unde sequi autem. Cum, accusantium?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur <u>underline</u> elit. Eaque ipsa eligendi <mark>marked text</mark> ducimus! Amet soluta nam quisquam quibusdam <em>italic text</em> nihil cupiditate doloribus aliquid, mollitia dolorum nostrum. Provident Base, in nihil. Commodi explicabo ab laboriosam quidem <abbr title="Begum Rokeya University, Rangpur">BRUR</abbr> dolor placeat enim quis quaerat fuga ducimus aperiam beatae sit iusto vel officia aspernatur, dolores, optio numquam aliquid in consectetur eos ipsa soluta quasi. Animi provident beatae facilis quasi natus veniam culpa sapiente ut mollitia laboriosam, voluptate quis dolorum iure, sit, recusandae assumenda fuga error totam quo?</p>
                            
                            

                            <h2 class="mt-5">Blockquote Example</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias alias tempora asperiores facilis. Quidem ex illo, unde nisi amet expedita ut harum voluptatibus laboriosam eos deserunt corporis nemo qui!</p>
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum officiis consequuntur amet voluptatibus aliquid nostrum neque explicabo unde exercitationem. Sapiente iste dolores repellat necessitatibus mollitia nobis tenetur veritatis doloremque?</p>
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
    
    
                            <h2 class="mt-5">Self Hosted Media?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt fugiat aspernatur voluptatem dicta suscipit fugit labore. Impedit magni, reprehenderit vero labore laborum nulla consequuntur sit perspiciatis ex modi vel?</p>
                            <video id="player" controls data-poster="/uploads/video-poster.jpg" style="--plyr-color-main: #d63384">
                                <source src="/uploads/demo-video.mp4" type="video/mp4"/>
                                <source src="/uploads/demo-video.webm" type="video/webm"/>
                              
                                <!-- Captions are optional -->
                                <track kind="captions" label="English captions" src="/uploads/demo-caption.vtt" srclang="en" default />
                            </video>



                            <h4 class="mt-5">Audio</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aspernatur id dolor natus quod earum consequuntur unde, deleniti sed neque.</p>
                            <audio id="player" controls>
                                <source src="/uploads/audio.mp3" type="audio/mp3" />
                                <source src="/path/to/audio.ogg" type="audio/ogg" />
                            </audio>
    
    
    
                            <!-- Codepen Embed: START -->
                            <h2 class="mt-5">Codepen Embed</h2>
                            <p>Lorem dolor elitr kasd sea magna tempor lorem dolore eirmod ut, sanctus labore sanctus et rebum et et sanctus labore eirmod, et amet et duo sed takimata. Labore invidunt nonumy.</p>
                            <div class="mb-3">
                                <p class="codepen" data-height="326" data-theme-id="dark" data-default-tab="html,result" data-user="tarikul-code" data-slug-hash="dypKXgw" style="height: 326px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="First code">
                                    <span>See the Pen <a href="https://codepen.io/tarikul-code/pen/dypKXgw">
                                    First code</a> by Tarikul (<a href="https://codepen.io/tarikul-code">@tarikul-code</a>)
                                    on <a href="https://codepen.io">CodePen</a>.</span>
                                </p>
                                <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
                            </div>
                            <p>Sed et erat takimata lorem dolor eos dolores eirmod ipsum. Sit elitr et dolor labore rebum erat stet. Vero elitr.</p>
                            <!-- Codepen Embed: END -->
    
                            
    
                            
                            <h2 class="mt-3">Youtube video embed</h2>
                            <p>Vero eirmod labore ut clita amet rebum vero clita erat lorem, et amet sed tempor takimata. Sanctus gubergren dolore est aliquyam dolore et sanctus.</p>
                            <div class="ratio ratio-16x9 mb-4">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/rokGy0huYEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <h2 class="mb-3 mt-4">List Examples</h2>
                            <h4>Default list</h4>
                            <ul class="list">
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                            </ul>
    
                            <h4>Check list</h4>
                            <ul class="list-check">
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                            </ul>
    
                            <h4>Forbidden list</h4>
                            <ul class="list-forbidden">
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                            </ul>
    
                            
    
                            <h4>Ordered list</h4>
                            <ol class="list list-ordered">
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
                            </ol>
    
                            <h2>Conclusion</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem doloremque suscipit quos atque reiciendis repellat iste id sunt quis soluta, quidem aliquam, architecto ad deleniti dignissimos. Aut, quod provident?</p>
                        </div>

                        <div class="lesson__content__files downloadable-files border-top border-bottom py-5">
                            <h4 class="mb-4"><i class="fa-solid fa-download me-2"></i> Files Included</h4>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-image me-2 fa-2x"></i> Image file.jpg</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-pdf me-2 fa-2x"></i> PDf file.pdf</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-word me-2 fa-2x"></i> Word file.doc</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-excel me-2 fa-2x"></i> Excel file.xlsx</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-powerpoint me-2 fa-2x"></i> Powerpoint file.ppt</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-video me-2 fa-2x"></i> Video file.mp4</a>
                            <a href="images/dummy-pdf_2.pdf" class="btn btn-light" download="Download pdf"><i class="fa-solid fa-file-zipper me-2 fa-2x"></i> Zip file.zip</a>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- COURSE LESSON: END -->


@endsection