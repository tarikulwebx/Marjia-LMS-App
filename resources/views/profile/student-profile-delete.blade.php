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
                                <a href="{{ route('profile.show') }}" class="btn btn-primary view-btn mt-3 mt-md-5 ms-auto text-nowrap"><i class="fa-solid fa-edit me-2 fa-sm"></i>Dashboard</a>
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
                                            <a class="list-group-item" href="{{ route('profile.show') }}"><i class="fa-solid fa-gauge-high me-2"></i>Dashboard</a>
                                            <a class="list-group-item" href="{{ route('profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="{{ route('profile.show') }}?#courses"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="{{ route('profile.reviews') }}"><i class="fa-solid fa-star me-2"></i>Reviews</a>
                                            <a class="list-group-item active" href="{{ route('profile.delete') }}"><i class="fa-solid fa-trash-can me-2"></i>Delete Profile</a>
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
                        <!-- Delete profile -->
                        <div class="card profile__content__deleteprofile rounded-3">
                            <h3 class="card-header py-3 bg-white fw-700 text-danger">Delete My Account</h3>
                            <div class="card-body">
                               <p class="mb-2"><strong>Before you go...</strong></p>
                               <ul class="mb-4">
                                   <li>Take a look your valuable data</li>
                                   <li>If you delete your account, you will lose your all data.</li>
                               </ul>
                               <form action="" class="delete-form">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="deleteAgrementCheckbox" checked>
                                        <label class="form-check-label" for="deleteAgrementCheckbox">
                                            Yes, I'd like to delete my account
                                        </label>
                                    </div>
                                    <small id="deleteAgrementCheckboxError" class="text-danger"></small>
                                    <div class="d-flex align-items-center mt-3">
                                        <a href="{{ route('profile.show') }}" class="btn bg-success text-white me-2 mb-2">Keep my account</a>
                                        <a id="deleteProfileBtn" href="#" class="btn bg-danger text-white mb-2">Delete my account</a>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->



    <!-- Profile Detele Confirm Modal -->
    <div class="modal fade" id="deleteProfileModal" tabindex="-1" aria-labelledby="deleteProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="deleteProfileModalLabel">Confirm Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="m-0">Are you sure you want to delete your account?</p>
                </div>
                <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" id="deleteProfileConfirm" class="btn btn-danger">Yes, Delete</button>
                </div>
            </div>
        </div>
    </div>


@endsection


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#deleteProfileBtn').on('click', function(e){
                e.preventDefault();
                $('#deleteAgrementCheckboxError').html('');
                if (! $('#deleteAgrementCheckbox').is(':checked')) {
                    $('#deleteAgrementCheckboxError').html('Agreement field is empty');
                } else {
                    $('#deleteProfileModal').modal('show');
                }
                
            });


            $('#deleteProfileConfirm').on('click', function(){
                axios.post('/profile/delete-confirm', {

                })
                .then(res => {
                    if (res.status == 200) {
                        if(res.data == 1) {
                            toastr.success('Your account deleted', 'Success');
                            setTimeout(() => {
                                location.reload();
                            }, 1500);
                            
                        } else {
                            toastr.error('Deletion failed. Try again...', 'Failed');
                        }
                    } else {
                        toastr.error('Deletion failed. Try again...', 'Failed');
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
