@extends('layouts.app')

@section('title', 'Profile')

@section('styles')
    <style>
        .profile-picture-change-badge {
            width: 1.3rem;
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
            font-size: 0.65rem !important;
            top: 0.55rem;
            left: 80%;
            cursor: pointer;
        }
    </style> 
@endsection

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
                                            <a class="list-group-item active" href="{{ route('instructor.profile.edit') }}"><i class="fa-solid fa-pen-to-square me-2"></i>Edit Profile</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.courses') }}"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                                            <a class="list-group-item" href="{{ route('instructor.profile.reviews') }}"><i class="fa-solid fa-star me-2"></i>Reviews</a>
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
                        @if (session('user_action_msg'))
                            <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
                                <div class="me-2 pe-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </div>
                                <div>
                                    {{ session('user_action_msg') }}
                                </div>
                                <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif

                        <!-- Edit profile -->
                        <div class="card profile__content__editprofile rounded-3">
                            <h3 class="card-header py-3 bg-white fw-700">Edit Profile</h3>
                            <div class="card-body">
                                {!! Form::model($user, ['route' => 'instructor.profile.update', 'method' => 'PATCH', 'class' => 'editform', 'files'=>true]) !!}
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <label for="">Profile picture</label>
                                            <div class="d-flex align-items-center">
                                                <div class="editform__picture position-relative">
                                                    <img id="previewImg" src="{{ $user->photo ? url('/').'/images/profile/'.$user->photo : asset('images/profile-pic.jpg') }}" class="rounded-circle shadow-lg" width="60" alt="">
                                                    <label for="changePicture" class="position-absolute translate-middle bg-danger text-white border-0 rounded-circle profile-picture-change-badge">
                                                        <i class="fa-solid fa-xmark"></i>
                                                    </label>
                                                </div>
                                                <div class="editform__upload-btn ms-3">
                                                    <label for="changePicture" class="btn bg-primary bg-opacity-10 text-primary px-3 m-0 fw-500">Change</label>
                                                    <input type="file" id="changePicture" name="photo" class="form-control d-none" accept="image/x-png,image/gif,image/jpeg" oninput="previewImg.src=window.URL.createObjectURL(this.files[0])">
                                                </div>
                                            </div>
                                            <small class="text-danger">{{ $errors->first('photo') }}</small>
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
                                            {!! Form::button('<i class="far fa-check-circle me-2"></i>Save changes', ['type'=>'submit', 'class' => 'btn btn-primary']) !!}
                                            
                                        </div>

                                    </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- PROFILE SECTION: END -->


@endsection

