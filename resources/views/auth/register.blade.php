@extends('layouts.app')

@section('title', 'Register')

@section('content')
<section class="register mt-5 pt-lg-3">
    <div class="container">
        <div class="card border-0 shadow-lg">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block register__thumb">
                        <img src="{{ asset('images/register-art.png') }}" alt="">
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user" method="POST" action="{{ route('register') }}">
                                @csrf

                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control rounded-pill @error('first_name') is-invalid @enderror"
                                            id="first_name" name="first_name" placeholder="First Name" value="{{ old('first_name') }}" required autocomplete="first_name" autofocus>
                                        @error('first_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control rounded-pill @error('last_name') is-invalid @enderror"
                                            id="last_name" name="last_name" placeholder="Last Name" value="{{ old('last_name') }}" required autocomplete="last_name">
                                        @error('last_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-12">
                                        <input type="email" class="form-control rounded-pill @error('email') is-invalid @enderror"
                                        id="email" name="email"  placeholder="Email Address" value="{{ old('email') }}" required autocomplete="email">
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control rounded-pill @error('password') is-invalid @enderror"
                                            id="password" name="password" placeholder="Password" required autocomplete="new-password">
                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control rounded-pill"
                                            id="password-confirm" name="password_confirmation" placeholder="Repeat Password"  required autocomplete="new-password">
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary w-100 rounded-pill">
                                            Register Account
                                        </button>
                                    </div>
                                </div>
                                <hr>
                            </form>
                            <div class="text-center">
                                <a class="small" href="{{ route('password.request') }}">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="{{ route("login") }}">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

    