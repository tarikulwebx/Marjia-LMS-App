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
                                            <a class="list-group-item" href="{{ route('instructor.profile.courses') }}"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item active" href="{{ route('instructor.profile.reviews') }}"><i class="fa-solid fa-star me-2"></i>Reviews</a>
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

                        <div class="card profile__content__reviews">
                            <h3 class="card-header py-3 bg-white fw-700">Course Reviews</h3>
                            <div class="card-body">
                                <!-- Review START -->
                                <div class="reviews">

                                    @if ($reviews)
                                        @foreach ($reviews as $review)
                                            <!-- Review Item -->
                                            <div id="review-item-{{ $review->id }}" class="reviews__review d-sm-flex">
                                                <img src="{{ $review->user->photo ? url('/').'/images/profile/'.$review->user->photo : asset('images/profile-pic.jpg') }}" class="reviews__review__thumb rounded-circle float-start mb-2 mb-sm-0 me-3" width="100" height="100" alt="thumb">
                                                <div class="w-100">
                                                    <div class="d-sm-flex justify-content-sm-between align-items-center">
                                                        <div>
                                                            <h5 class="reviews__review__name m-0">{{  $review->user->first_name }} {{ $review->user->last_name }}</h5>
                                                            <small class="reviews__review__time text-gray-600">{{ $review->created_at->format('F d, Y') . ' at ' . $review->created_at->format('h:m a') }}</small>
                                                        </div>
                                                        <ul class="reviews__review__rating list-inline text-warning m-0 p-0">
                                                            @for ($i=0; $i<$review->rating; $i++)
                                                            <li class="list-inline-item small me-0"><i class="fas fa-star"></i></li>
                                                            @endfor
                                                            @for ($i=0; $i<5-$review->rating; $i++)
                                                                <li class="list-inline-item small me-0"><i class="fa-regular fa-star"></i></i></li>
                                                            @endfor
                                                        </ul>
                                                    </div>
                                                    <h6 class="reviews__review__course"><span class="text-gray-600 fw-400">Review on:</span> <a href="{{ route('single-course', $review->course->slug) }}">{{ $review->course->name }}</a></h6>
                                                    <p class="reviews__review__text text-gray-600">{{ $review->body }}</p>
                                                    <div class="d-flex justify-content-end">
                                                        <button type="button" class="review-delete-btn btn btn-sm py-2 px-3 bg-danger text-danger bg-opacity-10 fw-500 rounded-4" data-id="{{ $review->id }}">Delete</button>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                    
                                    
                                    
                                </div>
                            </div>
                            <div class="card-footer pt-4">
                                {{ $reviews->links() }}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->


    <!-- Delete Review modal -->
    <div id="reviewDeleteModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger"><i class="fas fa-trash-alt me-1" aria-hidden="true"></i> Delete Review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 id="reviewId" class="d-none"></h1>
                    <p>Are you sure you want to delete this review?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button id="reviewDeleteConfirm" type="button" class="btn btn-danger">Yes, Delete</button>
                </div>
            </div>
        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('.review-delete-btn').on('click', function(){
                $('#reviewId').html($(this).data('id'));
                $('#reviewDeleteModal').modal('show');
            });

            $('#reviewDeleteConfirm').on('click', function() {
                let reviewId = $('#reviewId').html();
                axios.post('/instructor-profile/delete_review', {
                    review_id: reviewId,
                })
                .then(res => {
                    if (res.status == 200) {
                        if (res.data == 1) {
                            $('#review-item-'+reviewId).addClass('d-none-important')
                            toastr.success('Review deleted', 'Success');
                            $('#reviewDeleteModal').modal('hide');
                        } else {
                            toastr.error('Review delete failed', 'Failed');
                        }
                    } else {
                            toastr.error('Review delete failed', 'Failed');
                        }
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
            });
        })
    </script>
@endsection

