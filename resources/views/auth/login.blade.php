@extends('layouts.app')

@section('title', 'Login')

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
                                <h1 class="h4 text-gray-900 mb-4">Login Account</h1>
                            </div>
                            <form class="user" method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="row g-3">
                                    <div class="col-12">
                                        <input type="email" class="form-control rounded-pill @error('email') is-invalid @enderror" name="email" placeholder="Email Address" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-12">
                                        <input type="password" class="form-control rounded-pill @error('password') is-invalid @enderror" name="password" placeholder="Password" required autocomplete="current-password">
                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                            <label class="form-check-label" style="font-size: 0.9rem;" for="remember">Remember me</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary w-100 rounded-pill">
                                            Login Account
                                        </button>
                                    </div>
                                </div>
                                <hr>
                                {{-- <a href="index.html" class="btn btn-google w-100 rounded-pill">
                                    <i class="fab fa-google me-2"></i> Login with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook w-100 rounded-pill">
                                    <i class="fab fa-facebook-f me-2"></i> Login with Facebook
                                </a> --}}
                            </form>
                            {{-- <hr> --}}
                            <div class="text-center">
                                <a class="small" href="{{ route('password.request') }}">Forgot Password?</a>
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