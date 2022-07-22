@extends('admin.layouts.app')

@section('title', 'Admin - Dashboard')
@section('content')
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>

    {{-- Content --}}
    <div class="row gy-4 mb-4 pb-2">
        <div class="col-md-6 col-xl-3">
            <div class="d-flex h-100 justify-content-center align-items-center bg-primary bg-opacity-10 text-primary p-4 rounded-3">
                <div class=""><i class="fa-solid fa-graduation-cap fa-3x"></i></div>
                <div class="ms-4 text-dark">
                    <h4 class="mb-1">{{ $total_courses }}</h4>
                    <p class="mb-0">Total Courses</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-3">
            <div class="d-flex h-100 justify-content-center align-items-center bg-secondary bg-opacity-10 text-secondary p-4 rounded-3">
                <div class=""><i class="fa-solid fa-users fa-3x"></i></div>
                <div class="ms-4 text-dark">
                    <h4 class="mb-1">{{ $total_users }}</h4>
                    <p class="mb-0">Total Users</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-3">
            <div class="d-flex h-100 justify-content-center align-items-center bg-info bg-opacity-10 text-info p-4 rounded-3">
                <div class=""><i class="fa-solid fa-user-graduate fa-3x"></i></div>
                <div class="ms-4 text-dark">
                    <h4 class="mb-1">{{ $total_enrolls }}</h4>
                    <p class="mb-0">Enrollments</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-3">
            <div class="d-flex h-100 justify-content-center align-items-center bg-warning bg-opacity-10 text-warning p-4 rounded-3">
                <div class=""><i class="fa-solid fa-envelope fa-3x"></i></div>
                <div class="ms-4 text-dark">
                    <h4 class="mb-1">{{ $unread_contact_count }}</h4>
                    <p class="mb-0">Unread Messages</p>
                </div>
            </div>
        </div>
        
    </div>


    <!-- Joined Stat -->
    <div  class="card profile__content__statistics mb-5">
        <h4 class="card-header py-3 bg-white fw-700">Students Joined Statistics</h4>
        <div class="card-body">
            <canvas id="myChart" width="400" height="180"></canvas>
        </div>
    </div>

    <!-- Enroll Stat -->
    <div  class="card profile__content__statistics mb-5">
        <h4 class="card-header py-3 bg-white fw-700">Enrollments Statistics</h4>
        <div class="card-body">
            <canvas id="enrollChart" width="400" height="180"></canvas>
        </div>
    </div>

@endsection


@section('scripts')
<script>
    var cData = JSON.parse('<?php echo $userJoinedData; ?>');
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cData.label,
            datasets: [
                    {
                    label: 'Students joined',
                    data: cData.data,
                    borderColor: 'rgba(214, 51, 132, 1)',
                    backgroundColor: 'rgba(214, 51, 132, 0.15)',
                    borderWidth: 2,
                    borderRadius: 4,
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    var cEnrollData = JSON.parse('<?php echo $enrollmentData; ?>');
    const ctxenroll = document.getElementById('enrollChart').getContext('2d');
    const enrollChart = new Chart(ctxenroll, {
        type: 'bar',
        data: {
            labels: cEnrollData.label,
            datasets: [
                    {
                    label: 'Student enrolled',
                    data: cEnrollData.data,
                    borderColor: 'rgba(110, 66, 193, 1)',
                    backgroundColor: 'rgba(110, 66, 193, 0.15)',
                    borderWidth: 2,
                    borderRadius: 4,
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    
</script>
@endsection
