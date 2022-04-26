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
                            <img src="{{ $user->photo ? $user->photo : asset('images/profile-pic.jpg') }}" class="img-fluid shadow" width="100" alt="pp">
                        </div>
                        <div class="col align-self-center">
                            <div class="user-info d-md-flex align-items-center">
                                <div>
                                    <h2 class="user-info__name mt-3 mt-sm-5">{{ $user->first_name }} {{ $user->last_name }}</h2>
                                    <ul class="user-info__list list-inline p-0 m-0">
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fas fa-graduation-cap text-primary me-1"></i>{{ $user->enrollments->count() }}</span> 
                                            <span class="text">Enrolled Courses</span>
                                        </li>
                                        <li class="list-inline-item">
                                            <span class="h6"><i class="fa-brands fa-readme text-secondary me-1"></i>{{ $user->reads->count() }}</span> 
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
                                            <a class="list-group-item active" href="{{ route('profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="{{ route('profile.show') }}?#courses"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
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
                        <!-- Edit profile -->
                        <div class="card profile__content__editprofile rounded-3">
                            <h3 class="card-header py-3 bg-white fw-700">Edit Profile</h3>
                            <div class="card-body">
                                {!! Form::model($user, ['route' => 'profile.update', 'method' => 'PATCH', 'class' => 'editform']) !!}
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <label for="">Profile picture</label>
                                            <div class="d-flex align-items-center">
                                                <div class="editform__picture position-relative">
                                                    <img src="{{ $user->photo ? $user->photo : asset('images/profile-pic.jpg') }}" class="rounded-circle shadow-lg" width="60" alt="">
                                                    <button type="button" class="position-absolute translate-middle bg-danger border-0 rounded-circle">
                                                        <i class="fa-solid fa-xmark"></i>
                                                    </button>
                                                </div>
                                                <div class="editform__upload-btn ms-3">
                                                    <label for="changePicture" class="btn bg-primary bg-opacity-10 text-primary px-3 m-0 fw-500">Change</label>
                                                    <input type="file" id="changePicture" class="form-control d-none">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            {!! Form::label('first_name', 'First name') !!}
                                            {!! Form::text('first_name', null, ['class' => $errors->has('first_name') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'First name']) !!}
                                            <small class="text-danger">{{ $errors->first('first_name') }}</small>
                                        </div>

                                        <div class="col-md-6">
                                            {!! Form::label('last_name', 'Last name') !!}
                                            {!! Form::text('last_name', null, ['class' => $errors->has('last_name') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Last name']) !!}
                                            <small class="text-danger">{{ $errors->first('last_name') }}</small>
                                        </div>

                                        <div class="col-md-6">
                                            {!! Form::label('email', 'Email') !!}
                                            {!! Form::email('email', null, ['class' => $errors->has('email') ? 'form-control disabled is-invalid' : 'form-control disabled', 'placeholder'=>'Email', 'disabled']) !!}
                                            <small class="text-danger">{{ $errors->first('email') }}</small>
                                        </div>

                                        <div class="col-md-6">
                                            {!! Form::label('phone', 'Phone') !!}
                                            {!! Form::text('phone', null, ['class' => $errors->has('phone') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Phone']) !!}
                                            <small class="text-danger">{{ $errors->first('phone') }}</small>
                                        </div>

                                        <div class="col-12">
                                            {!! Form::label('address', 'Address') !!}
                                            {!! Form::text('address', null, ['class' => $errors->has('address') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Address']) !!}
                                            <small class="text-danger">{{ $errors->first('address') }}</small>
                                        </div>

                                        <div class="col-12">
                                            {!! Form::label('about', 'About me') !!}
                                            {!! Form::textarea('about', null, ['class' => 'form-control', 'placeholder' => 'About me', 'rows' => '3']) !!}
                                            <small class="text-danger">{{ $errors->first('about') }}</small>
                                        </div>

                                        <div class="col-12">
                                            <h5 class="mt-3 text-gray-700">Bachelor's degree</h5>
                                            <div class="row g-4">
                                                <div class="col-sm-6">
                                                    {!! Form::label('bachelor_degree_department', 'Department') !!}
                                                    {!! Form::text('bachelor_degree_department', null, ['class' => $errors->has('bachelor_degree_department') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Department']) !!}
                                                    <small class="text-danger">{{ $errors->first('bachelor_degree_department') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('bachelor_degree_university', 'University') !!}
                                                    {!! Form::text('bachelor_degree_university', null, ['class' => $errors->has('bachelor_degree_university') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'University']) !!}
                                                    <small class="text-danger">{{ $errors->first('bachelor_degree_university') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('bachelor_degree_session', 'Session') !!}
                                                    {!! Form::text('bachelor_degree_session', null, ['class' => $errors->has('bachelor_degree_session') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Session']) !!}
                                                    <small class="text-danger">{{ $errors->first('bachelor_degree_session') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('bachelor_degree_year', 'Passing year') !!}
                                                    {!! Form::text('bachelor_degree_year', null, ['class' => $errors->has('bachelor_degree_year') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Passing year']) !!}
                                                    <small class="text-danger">{{ $errors->first('bachelor_degree_year') }}</small>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <h5 class="mt-3 text-gray-700">Master's degree</h5>
                                            <div class="row g-4">
                                                <div class="col-sm-6">
                                                    {!! Form::label('master_degree_department', 'Department') !!}
                                                    {!! Form::text('master_degree_department', null, ['class' => $errors->has('master_degree_department') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Department']) !!}
                                                    <small class="text-danger">{{ $errors->first('master_degree_department') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('master_degree_university', 'University') !!}
                                                    {!! Form::text('master_degree_university', null, ['class' => $errors->has('master_degree_university') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'University']) !!}
                                                    <small class="text-danger">{{ $errors->first('master_degree_university') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('master_degree_session', 'Session') !!}
                                                    {!! Form::text('master_degree_session', null, ['class' => $errors->has('master_degree_session') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Session']) !!}
                                                    <small class="text-danger">{{ $errors->first('master_degree_session') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('master_degree_year', 'Passing year') !!}
                                                    {!! Form::text('master_degree_year', null, ['class' => $errors->has('master_degree_year') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Passing year']) !!}
                                                    <small class="text-danger">{{ $errors->first('master_degree_year') }}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <h5 class="mt-3 text-gray-700">Social Profiles</h5>
                                            <div class="row g-4">
                                                <div class="col-sm-6">
                                                    {!! Form::label('facebook', 'Facebook') !!}
                                                    {!! Form::url('facebook', null, ['class' => $errors->has('facebook') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Facebook link']) !!}
                                                    <small class="text-danger">{{ $errors->first('facebook') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('twitter', 'Twitter') !!}
                                                    {!! Form::url('twitter', null, ['class' => $errors->has('twitter') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Twitter link']) !!}
                                                    <small class="text-danger">{{ $errors->first('twitter') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('telegram', 'Telegram') !!}
                                                    {!! Form::url('telegram', null, ['class' => $errors->has('telegram') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Telegram link']) !!}
                                                    <small class="text-danger">{{ $errors->first('telegram') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('github', 'Github') !!}
                                                    {!! Form::url('github', null, ['class' => $errors->has('github') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Github link']) !!}
                                                    <small class="text-danger">{{ $errors->first('github') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('linkedin', 'Linkedin') !!}
                                                    {!! Form::url('linkedin', null, ['class' => $errors->has('linkedin') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Linkedin link']) !!}
                                                    <small class="text-danger">{{ $errors->first('linkedin') }}</small>
                                                </div>
                                                <div class="col-sm-6">
                                                    {!! Form::label('instagram', 'Instagram') !!}
                                                    {!! Form::url('instagram', null, ['class' => $errors->has('instagram') ? 'form-control is-invalid' : 'form-control', 'placeholder'=>'Instagram link']) !!}
                                                    <small class="text-danger">{{ $errors->first('instagram') }}</small>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="col-12 text-end">
                                            <input type="submit" class="btn btn-primary" value="Save changes">
                                        </div>

                                    </div>
                                {!! Form::close() !!}
                            </div>
                        </div>

                        <!-- Edit password -->
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="card profile__content__editprofile rounded-3 mt-5">
                                    <h5 class="card-header py-3 bg-white fw-700 text-gray-800">Update Password</h5>
                                    <div class="card-body">
                                        <form action="#" class="editform">
                                            <div class="row g-4">
                                                <div class="col-12">
                                                    <label for="current_password">Current password</label>
                                                    <input type="password" class="form-control" name="current_password" placeholder="Current password">
                                                </div>
                                                <div class="col-12">
                                                    <label for="new_password">Enter new password</label>
                                                    <input type="password" class="form-control" name="new_password" placeholder="Enter new password">
                                                </div>
                                                <div class="col-12">
                                                    <label for="confirm_password">Confirm new password</label>
                                                    <input type="password" class="form-control" name="confirm_password" placeholder="Enter new password">
                                                </div>
                                                <div class="col-12 text-end">
                                                    <input type="submit" class="btn btn-primary" value="Change password">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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


@section('scripts')
    <script type="text/javascript">
        jQuery(function(){

            if (localStorage.getItem('resetResponseStatus')) {
                toastr.success('Course progress restarted', 'Success');
                localStorage.removeItem('resetResponseStatus');
            }
            
            $('.reset-course-read-btn').on('click', function(e){
                e.preventDefault();
                let courseId = $(this).data('course_id');
                
                axios.post('/profile/reset-read/'+courseId, {

                })
                .then(res => {
                    if (res.status == 200) {
                        if (res.data == 1) {
                            localStorage.setItem("resetResponseStatus", 'success');
                            location.reload();
                        } else {
                            toastr.error('Reset failed', 'Failed');
                        }
                    } else {
                        toastr.error('Reset failed', 'Failed');
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