@extends('layouts.app')

@section('title', 'Contact Us')

@section('content')
    <!-- CONTACT-US SECTION: START -->
    <section class="page contact-us">
        <!-- Heading -->
        <div class="page-head text-white">
            <div class="container">
                <h1 class="page-head__title m-0">Contact Us</h1>
                @if (session('contact_submit_msg'))
                    <div class="alert alert-success d-flex align-items-center mt-3 mb-0 alert-dismissible fade show" role="alert">
                        <div class="me-2 pe-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </div>
                        <div>
                            {{ session('contact_submit_msg') }}
                        </div>
                        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif

                
                @if ($errors->all())
                    <div class="alert alert-danger  mt-3 mb-0 alert-dismissible fade show" role="alert">
                        <strong>Fix following errors: </strong>
                        <ul class="m-0">
                            @foreach ($errors->all() as $message)
                                <li>{{ $message }}</li>
                            @endforeach
                        </ul>
                        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif
            </div>
        </div>

        <!-- Content -->
        <div class="page-content">
            <div class="container">
                <div class="page-content__body">
                    <div class="row g-5">
                        <div class="col-xl-7 ">
                            <div class="contact-us__message">
                                <h3 class="mb-4 border-bottom pb-3"><i class="fas fa-paper-plane text-primary me-3"></i>Send a Message</h3>
                                {!! Form::open(['method' => 'POST', 'route' => 'store_contact_message']) !!}
                                    <div class="row g-4">
                                        <div class="col-md-6">
                                            {!! Form::label('first_name', 'First name') !!}
                                            {!! Form::text('first_name', null, ['class' => $errors->has('first_name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'First name', 'required' => 'required']) !!}
                                            <small class="text-danger">{{ $errors->first('first_name') }}</small>
                                        </div>
                                        <div class="col-md-6">
                                            {!! Form::label('last_name', 'Last name') !!}
                                            {!! Form::text('last_name', null, ['class' => $errors->has('last_name') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Last name', 'required' => 'required']) !!}
                                            <small class="text-danger">{{ $errors->first('last_name') }}</small>
                                        </div>
                                        <div class="col-12">
                                            {!! Form::label('email', 'Email') !!}
                                            {!! Form::email('email', null, ['class' => $errors->has('email') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Email', 'required' => 'required']) !!}
                                            <small class="text-danger">{{ $errors->first('email') }}</small>
                                        </div>
                                        <div class="col-12">
                                            {!! Form::label('message', 'Your message') !!}
                                            {!! Form::textarea('message', null, ['class' => $errors->has('message') ? 'form-control is-invalid' : 'form-control', 'placeholder' => 'Write message here', 'rows' => '4', 'required' => 'required']) !!}
                                            <small class="text-danger">{{ $errors->first('message') }}</small>
                                        </div>
                                        <div class="col-12 text-end">
                                            {!! Form::submit('Sent message', ['class' => 'btn btn-primary py-2']) !!}
                                        </div>
                                        
                                    </div>
                                    
                                {!! Form::close() !!}
                            </div>
                        </div>
                        <div class="col-xl-5">
                            <div class="contact-us__info">
                                <h3 class="mb-4 border-bottom pb-3"><i class="fas fa-map-marker-alt text-secondary me-3"></i>Contact Info</h3>
                                <ul class="list-group list-group-borderless">
                                    <li class="list-group-item d-flex">
                                        <span><i class="fas fa-phone" aria-hidden="true"></i></span>
                                        <div>
                                            <h5>Phone</h5>
                                            <p class="mb-0"><a href="#">+880123456789</a></p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex">
                                        <span><i class="fas fa-envelope" aria-hidden="true"></i></span>
                                        <div>
                                            <h5>Email</h5>
                                            <p class="mb-0"><a href="#">info@example.com</a></p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex">
                                        <span><i class="fas fa-map-location" aria-hidden="true"></i></span>
                                        <div>
                                            <h5>Location</h5>
                                            <p class="mb-0"><a href="#">BRUR, Rangpur, Bangladesh</a></p>
                                        </div>
                                    </li>
                                    </ul>

                                    <h5 class="mt-5 mb-3 text-gray-700 fw-600">Follow on: </h5>
                                    <ul class="list-inline social-links">
                                    <li class="list-inline-item"><a href="#" class=""><i class="fab fa-facebook color-facebook fa-lg me-2"></i>Facebook</a></li>
                                    <li class="list-inline-item"><a href="#" class=""><i class="fab fa-twitter color-twitter fa-lg me-2"></i>Twitter</a></li>
                                    <li class="list-inline-item"><a href="#" class=""><i class="fab fa-linkedin-in color-linkedin fa-lg me-2"></i>Linkedin</a></li>
                                    <li class="list-inline-item"><a href="#" class=""><i class="fab fa-github color-github fa-lg me-2"></i>Github</a></li>
                                    <li class="list-inline-item"><a href="#" class=""><i class="fab fa-telegram color-telegram fa-lg me-2"></i>Telegram</a></li>
                                    <li class="list-inline-item"><a href="#" class=""><i class="fas fa-envelope color-google fa-lg me-2"></i>Mail</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- CONTACT-US SECTION: END -->
@endsection