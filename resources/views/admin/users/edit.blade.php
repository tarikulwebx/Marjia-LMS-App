@extends('admin.layouts.app')

@section('title', 'New User')

@section('styles')
    <style>
        #previewImg {
            width: 100px;
            height: 100px;
            -o-object-fit: cover;
            object-fit: cover;
        }
    </style>
@endsection


@section('content')

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

    
    @if ($errors->all())
        <div class="alert alert-danger  mb-3 alert-dismissible fade show" role="alert">
            <strong>Fix following errors: </strong>
            <ul class="m-0">
                @foreach ($errors->all() as $message)
                    <li>{{ $message }}</li>
                @endforeach
            </ul>
            <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit User</h1>
        <a href="{{ route('users.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-arrow-left text-white-50 me-1"></i> All Users</a>
    </div>

    <!-- ALL USERS TABLE -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Update User</h6>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-xxl-10">
                    {!! Form::model($user, ['method' => 'PATCH', 'route' => ['users.update', $user->slug], 'files'=>true]) !!}
                        <div class="row g-3">
                            <!-- Photo -->
                            <div class="col-12">
                                <div class="form-group">
                                    {!! Form::label('photo', 'Photo') !!}
                                    <div>
                                        @if ($user->photo)
                                            <img id="previewImg" class="rounded-circle mb-2" src="{{ url('/') . '/images/profile/' .$user->photo }}" alt="thumb">
                                            @else
                                            <img id="previewImg" class="rounded-circle mb-2" src="{{ asset('images/profile-pic.jpg') }}" alt="thumb">
                                        @endif 
                                        
                                    </div>
                                    {!! Form::file('photo', ['id'=> 'photo', 'class' => $errors->has('photo') ? 'form-control is-invalid' : 'form-control', 'oninput'=>"previewImg.src=window.URL.createObjectURL(this.files[0])", 'placeholder' => 'Photo']) !!}
                                    <small class="text-danger">{{ $errors->first('photo') }}</small>
                                </div>
                            </div>
                            <!-- First name -->
                            <div class="col-lg-6">
                                <div class="form-group">
                                    {!! Form::label('first_name', 'First name') !!}
                                    {!! Form::text('first_name', null, ['class' => $errors->has('first_name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'First name', 'required' => 'required']) !!}
                                    <small class="text-danger">{{ $errors->first('first_name') }}</small>
                                </div>
                            </div>
                            <!-- Last name -->
                            <div class="col-lg-6">
                                <div class="form-group">
                                    {!! Form::label('last_name', 'Last name') !!}
                                    {!! Form::text('last_name', null, ['class' => $errors->has('last_name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Last name', 'required' => 'required']) !!}
                                    <small class="text-danger">{{ $errors->first('last_name') }}</small>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="col-12">
                                <div class="form-group">
                                    {!! Form::label('email', 'Email') !!}
                                    {!! Form::email('email', null, ['class' => $errors->has('email') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Email', 'disabled']) !!}
                                    <small class="text-danger">{{ $errors->first('email') }}</small>
                                </div>
                            </div>


                            <!-- Roles -->
                            <div class="col-lg-6">
                                <div class="form-group">
                                    {!! Form::label('role_id', 'User role') !!}
                                    {!! Form::select('role_id', $roles, null, ['id' => 'multiselectRole', 'class' => $errors->has('role_id') ? 'form-control d-none is-invalid' : 'form-control d-none', 'required' => 'required']) !!}
                                    <small class="text-danger">{{ $errors->first('role_id') }}</small>
                                </div>
                            </div>

                            <!-- Active/disabled -->
                            <div class="col-lg-6">
                                <div class="form-group">
                                    {!! Form::label('is_active', 'Is Active?') !!}
                                    {!! Form::select('is_active', [0=>'disabled', 1=>'active'], null, ['id' => 'multiselectIsActive', 'class' => $errors->has('is_active') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
                                    <small class="text-danger">{{ $errors->first('is_active') }}</small>
                                </div>
                            </div>

                            


                            <!-- Collapse Fields -->
                            <div class="col-12">
                                <div class="d-flex align-items-center mt-4 mb-3">
                                    <h4 class="text-gray-700 mb-0"> Other Fields</h4>
                                    <strong><a class="ms-3" data-bs-toggle="collapse" href="#collapseFormFields" role="button" aria-expanded="false" aria-controls="collapseFormFields">Show/Hide<i class="fa-solid fa-caret-down ms-1"></i></a></strong>
                                </div>
                                <div class="collapse" id="collapseFormFields">
                                    <div class="row g-3">
                                        <!-- More details -->
                                        <div class="col-12 mt-4 pt-2">
                                            <h5 class="m-0">More Details</h5>
                                        </div>
                                        
                                        <!-- Phone -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('phone', 'Phone') !!}
                                                {!! Form::text('phone', null, ['class' => $errors->has('phone') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Phone']) !!}
                                                <small class="text-danger">{{ $errors->first('phone') }}</small>
                                            </div>
                                        </div>
                                        <!-- Address -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('address', 'Address') !!}
                                                {!! Form::text('address', null, ['class' => $errors->has('address') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Address']) !!}
                                                <small class="text-danger">{{ $errors->first('address') }}</small>
                                            </div>
                                        </div>
                                        <!-- About -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                {!! Form::label('about', 'About') !!}
                                                {!! Form::textarea('about', null, ['class' => $errors->has('about') ? 'form-control is-invalid' : 'form-control', 'rows' => '3', 'placeholder' => 'About info']) !!}
                                                <small class="text-danger">{{ $errors->first('about') }}</small>
                                            </div>
                                        </div>


                                        <!-- Bachelor Degree -->
                                        <div class="col-12 mt-4 pt-2">
                                            <h5 class="m-0">Bachelor Degree</h5>
                                        </div>

                                        <!-- Bachelor Department -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                {!! Form::label('bachelor_degree_department', 'Department') !!}
                                                {!! Form::text('bachelor_degree_department', null, ['class' => $errors->has('bachelor_degree_department') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Department']) !!}
                                                <small class="text-danger">{{ $errors->first('bachelor_degree_department') }}</small>
                                            </div>
                                        </div>
                                        <!-- Bachelor Session -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('bachelor_degree_session', 'Session') !!}
                                                {!! Form::text('bachelor_degree_session', null, ['class' => $errors->has('bachelor_degree_session') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Session']) !!}
                                                <small class="text-danger">{{ $errors->first('bachelor_degree_session') }}</small>
                                            </div>
                                        </div>
                                        <!-- Bachelor Passing Year -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('bachelor_degree_year', 'Passing Year') !!}
                                                {!! Form::text('bachelor_degree_year', null, ['class' => $errors->has('bachelor_degree_year') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Passing year']) !!}
                                                <small class="text-danger">{{ $errors->first('bachelor_degree_year') }}</small>
                                            </div>
                                        </div>
                                        <!-- Bachelor University -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                {!! Form::label('bachelor_degree_university', 'University') !!}
                                                {!! Form::text('bachelor_degree_university', null, ['class' => $errors->has('bachelor_degree_university') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'University']) !!}
                                                <small class="text-danger">{{ $errors->first('bachelor_degree_university') }}</small>
                                            </div>
                                        </div>


                                        <div class="col-12 mt-4 pt-2 ">
                                            <h5 class="m-0">Masters Degree</h5>
                                        </div>

                                        <!-- Masters Department -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                {!! Form::label('master_degree_department', 'Department') !!}
                                                {!! Form::text('master_degree_department', null, ['class' => $errors->has('master_degree_department') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Department']) !!}
                                                <small class="text-danger">{{ $errors->first('master_degree_department') }}</small>
                                            </div>
                                        </div>
                                        <!-- Masters Session -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('master_degree_session', 'Session') !!}
                                                {!! Form::text('master_degree_session', null, ['class' => $errors->has('master_degree_session') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Session']) !!}
                                                <small class="text-danger">{{ $errors->first('master_degree_session') }}</small>
                                            </div>
                                        </div>
                                        <!-- Masters Passing Year -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('master_degree_year', 'Passing Year') !!}
                                                {!! Form::text('master_degree_year', null, ['class' => $errors->has('master_degree_year') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Passing year']) !!}
                                                <small class="text-danger">{{ $errors->first('master_degree_year') }}</small>
                                            </div>
                                        </div>
                                        <!-- Masters University -->
                                        <div class="col-12">
                                            <div class="form-group">
                                                {!! Form::label('master_degree_university', 'University') !!}
                                                {!! Form::text('master_degree_university', null, ['class' => $errors->has('master_degree_university') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'University']) !!}
                                                <small class="text-danger">{{ $errors->first('master_degree_university') }}</small>
                                            </div>
                                        </div>



                                        <!-- Social profiles -->
                                        <div class="col-12 mt-4 pt-2">
                                            <h5 class="m-0">Social Profiles</h5>
                                        </div>
                                        <!-- Facebook -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('facebook', 'Facebook') !!}
                                                {!! Form::url('facebook', null, ['class' => $errors->has('facebook') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Facebook link']) !!}
                                                <small class="text-danger">{{ $errors->first('facebook') }}</small>
                                            </div>
                                        </div>
                                        <!-- Twitter -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('twitter', 'Twitter') !!}
                                                {!! Form::url('twitter', null, ['class' => $errors->has('twitter') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Twitter link']) !!}
                                                <small class="text-danger">{{ $errors->first('twitter') }}</small>
                                            </div>
                                        </div>
                                        <!-- Telegram -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('telegram', 'Telegram') !!}
                                                {!! Form::url('telegram', null, ['class' => $errors->has('telegram') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Telegram link']) !!}
                                                <small class="text-danger">{{ $errors->first('telegram') }}</small>
                                            </div>
                                        </div>
                                        <!-- Github -->
                                        <div class="col-lg-6">
                                            <div class="form-group ">
                                                {!! Form::label('github', 'Github') !!}
                                                {!! Form::url('github', null, ['class' => $errors->has('github') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Github link']) !!}
                                                <small class="text-danger">{{ $errors->first('github') }}</small>
                                            </div>
                                        </div>
                                        <!-- Linkedin -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('linkedin', 'Linkedin') !!}
                                                {!! Form::url('linkedin', null, ['class' => $errors->has('linkedin') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Linkedin link']) !!}
                                                <small class="text-danger">{{ $errors->first('linkedin') }}</small>
                                            </div>
                                        </div>
                                        <!-- Instagram -->
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                {!! Form::label('instagram', 'Instagram') !!}
                                                {!! Form::url('instagram', null, ['class' => $errors->has('instagram') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Instagram link']) !!}
                                                <small class="text-danger">{{ $errors->first('instagram') }}</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>

                            
                            <!-- Submit Form -->
                            <div class="col-12 text-end">
                                {!! Form::button('<i class="fa-regular fa-circle-check me-2"></i>Save Changes', ['type' => 'submit', 'class' => 'btn btn-primary rounded-pill px-3']) !!}
                            </div>
                        </div>
                        
                    {!! Form::close() !!}
                </div>
            </div>


            
            <div class="row mt-4">
                <div class="col-lg-8 col-xxl-7">
                    <!-- Update Password Form -->
                    {!! Form::model($user, ['method' => 'PATCH', 'route' => ['users.updatePassword', $user->slug]]) !!}
                        <div class="row g-3">
                            <div class="col-12">
                                <h4 class="mb-0">Change Password</h4>
                            </div>
                            <!-- Password -->
                            <div class="col-12">
                                <div class="form-group">
                                    {!! Form::label('password', 'Password') !!}
                                    {!! Form::password('password', ['class' => $errors->has('password') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Password']) !!}
                                    <small class="text-danger">{{ $errors->first('password') }}</small>
                                </div>
                            </div>
                            <!-- Confirm Password -->
                            <div class="col-12">
                                <div class="form-group {{ $errors->has('passowrd-confirm') ? ' has-error' : '' }}">
                                    {!! Form::label('passowrd-confirm', 'Password Confirm') !!}
                                    {!! Form::password('password_confirmation', ['id' => 'password-confirm', 'class' => $errors->has('password_confirmation') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Password confirm']) !!}
                                    <small class="text-danger">{{ $errors->first('passowrd-confirm') }}</small>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                {!! Form::button('<i class="fa-solid fa-key fa-sm me-2"></i>Update Password', ['type'=>'submit', 'class' => 'btn btn-primary rounded-pill px-3']) !!}
                            </div>
                        </div>
                    {!! Form::close() !!}


                    <!-- Update Email Form -->
                    {!! Form::model($user, ['method' => 'PATCH', 'route' => ['users.updateEmail', $user->slug]]) !!}
                        <div class="row g-3 mt-4">
                            <div class="col-12">
                                <h4 class="mb-0">Change Account Email</h4>
                            </div>
                            <!-- Email -->
                            <div class="col-12">
                                <div class="form-group">
                                    {!! Form::label('email', 'Email') !!}
                                    {!! Form::email('email', $user->email, ['class' => $errors->has('email') ? 'form-control is-invalid' : 'form-control',  'placeholder' => 'Email']) !!}
                                    <small class="text-danger">{{ $errors->first('email') }}</small>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                {!! Form::button('<i class="fa-solid fa-envelope-circle-check me-2"></i>Update email', ['type'=>'submit', 'class' => 'btn btn-primary rounded-pill px-3']) !!}
                            </div>
                        </div>
                    {!! Form::close() !!}

                    <!-- Delete Account Form -->
                    <div class="row mt-4 mb-4">
                        <div class="col-12">
                            <h4 class="text-danger mb-1">Delete Account</h4>
                            <p class="text-dark">After deleting, every data related to this account will be erased. Think again, what you're going to do!</p>
                        </div>
                        {!! Form::open(['method' => 'DELETE', 'route' => ['users.destroy', $user->slug], 'class' => 'form-horizontal']) !!}
                        <div class="col-12 text-end">
                            {!! Form::button('<i class="fa-regular fa-trash-can me-2" ></i>Delete Account', ['type'=>'submit','class' => 'btn btn-danger rounded-pill px-3']) !!}
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>


        </div>
    </div>

    
@endsection



@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#multiselectRole').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });
            $('#multiselectIsActive').multiselect({
                buttonWidth:'100%',
                buttonClass: 'form-control text-left',
                selectedClass: 'selected'
            });
            
        });

        
    </script>
@endsection