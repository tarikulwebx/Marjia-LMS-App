@extends('layouts.app')

@section('title', 'Reset password')


@section('content')
<section class="register mt-5 pt-lg-3">
    <div class="container">
        <div class="card border-0 shadow-lg">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block register__thumb">
                        <img src="{{ asset('images/register-art.svg') }}" alt="">
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-2"><i class="fa-solid fa-key text-primary me-2"></i> Forget Password?</h1>
                                <p class="mb-4 text-gray-700">To receive a new password, enter your email address below.</p>
                            </div>
                            @if (session('status'))
                                <div class="alert alert-success mb-4" role="alert">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <form class="user" method="POST" action="{{ route('password.email') }}">
                                @csrf
                                <div class="row g-3">
                                    <div class="col-12">
                                        <input type="email" name="email" class="form-control rounded-pill @error('email') is-invalid @enderror"
                                        id="email" placeholder="Email Address" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary w-100 rounded-pill">
                                            Send Password Reset Link
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <hr>
                            <div class="text-center">
                                <a class="small" href="{{ route('login') }}">Already have an account? Login</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="{{ route('register') }}">Don't have an account? Register!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
