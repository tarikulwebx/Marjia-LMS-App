@extends('admin.layouts.app')

@section('title', 'User')

@section('content')
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User Details</h1>
        <a href="{{ route('users.index') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-user text-white-50 me-1"></i> All Users</a>
    </div>

    <!-- User details -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Profile: {{ $user->first_name }} {{ $user->last_name }}</h6>
        </div>
        <div class="card-body pb-5">
            <div class="row gy-3 gx-4">
                <div class="col-sm-4 col-lg-3">
                    <img src="
                    @if ($user->photo)
                        {{ url('/') . '/images/profile/'. $user->photo }}
                    @else
                        {{ asset('images/profile-placeholder-image.png') }}
                    @endif
                    " class="img-fluid w-100 rounded" alt="">
                    <div class="list-inline mt-3">
                        @if ($user->facebook)
                            <a href="{{ $user->facebook }}" class="list-inline-item mb-1"><i class="fab fa-facebook-f me-1"></i>Facebook</a>
                        @endif
                        @if ($user->twitter)
                            <a href="{{ $user->twitter }}" class="list-inline-item mb-1"><i class="fab fa-twitter me-1"></i>Twitter</a>
                        @endif
                        @if ($user->github)
                            <a href="{{ $user->github }}" class="list-inline-item mb-1"><i class="fab fa-github me-1"></i>Github</a>
                        @endif
                        @if ($user->linkedin)
                            <a href="{{ $user->linkedin }}" class="list-inline-item mb-1"><i class="fab fa-linkedin me-1"></i>Linkedin</a>
                        @endif
                        @if ($user->telegram)
                            <a href="{{ $user->telegram }}" class="list-inline-item mb-1"><i class="fab fa-telegram me-1"></i>Telegram</a>
                        @endif
                        
                    </div>
                </div>
                <div class="col-sm-8 col-lg-9">
                    <h4 class="mb-1 text-gray-700">{{ $user->first_name }} {{ $user->last_name }}</h4>
                    <ul class="list-inline">
                        @foreach ($user->roles as $role)
                            <li class="list-inline-item text-capitalize me-1">
                                {{ $role->name }}@if (!$loop->last),@endif
                            </li>
                        @endforeach
                    </ul>
                    <p>{{ $user->about }}</p>
                    <table>
                        <tr>
                            <td colspan="2"><h5 class="mb-1 mt-0">Contact Info</h5></td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{{ $user->email }}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{{ $user->phone }}</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>{{ $user->address }}</td>
                        </tr>
                        <tr>
                            <td colspan="2"><h5 class="mb-1 mt-3">Bachelor's Degree</h5></td>
                        </tr>
                        <tr>
                            <td>Department: </td>
                            <td>{{ $user->bachelor_degree_department }}</td>
                        </tr>
                        <tr>
                            <td>Session: </td>
                            <td>{{ $user->bachelor_degree_session }}</td>
                        </tr>
                        <tr>
                            <td >Year: </td>
                            <td>{{ $user->bachelor_degree_year }}</td>
                        </tr>
                        <tr>
                            <td>University: </td>
                            <td>{{ $user->bachelor_degree_university }}</td>
                        </tr>
                        <tr>
                            <td colspan="2"><h5 class="mb-1 mt-3">Master's Degree</h5></td>
                        </tr>
                        <tr>
                            <td class="pe-2">Department: </td>
                            <td>{{ $user->master_degree_department }}</td>
                        </tr>
                        <tr>
                            <td>Session: </td>
                            <td>{{ $user->master_degree_session }}</td>
                        </tr>
                        <tr>
                            <td>Year: </td>
                            <td>{{ $user->master_degree_year }}</td>
                        </tr>
                        <tr>
                            <td>University: </td>
                            <td>{{ $user->master_degree_university }}</td>
                        </tr>
                    </table>

                    <a href="{{ route('users.edit', $user->id) }}" class="btn btn-primary mt-4"><i class="fa-solid fa-pen-to-square  me-1"></i> Edit Profile</a>
                </div>
            </div>
        </div>
    </div>

    
@endsection