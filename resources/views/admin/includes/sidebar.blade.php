<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="admin-dashboard.html">
        <div class="sidebar-brand-icon">
            <i class="fa-solid fa-user-shield"></i>
        </div>
        <div class="sidebar-brand-text ms-2"><img src="{{ asset('images/logo-white.png') }}" class="img-fluid w-100" alt=""></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
        <a class="nav-link" href="{{ route('admin-dashboard') }}">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Users
    </div>

    <!-- Nav Item - Administrators Collapse Menu -->
    <li class="nav-item {{ Request::is('admin/users*') ? 'active' : '' }}">
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseAdministrators"
            aria-expanded="true" aria-controls="collapseAdministrators">
            <i class="fa-solid fa-user"></i>
            <span>Users</span>
        </a>
        <div id="collapseAdministrators" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Users</h6>
                <a class="collapse-item {{ Request::is('admin/users*') ? 'active' : '' }}" href="{{ route('users.index') }}"><i class="fa-solid fa-users me-2"></i>All Users</a>
                <a class="collapse-item {{ Request::is('admin/users/create') ? 'active' : '' }}" href="{{ route('users.create') }}"><i class="fa-solid fa-user-plus me-2"></i>Create New</a>
            </div>
        </div>
    </li>


    <!-- Nav Item - Course Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCourses"
            aria-expanded="true" aria-controls="collapseCourses">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Courses</span>
        </a>
        <div id="collapseCourses" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Manage Courses</h6>
                <a class="collapse-item" href="#"><i class="fa-solid fa-graduation-cap me-2"></i>Courses</a>
                <a class="collapse-item {{ Request::is('admin/courses/categories*') ? 'active' : '' }}" href="{{ route('categories.index') }}"><i class="fa-solid fa-table-list me-2"></i>Categories</a>
                <a class="collapse-item {{ Request::is('admin/courses/create') ? 'active' : '' }}" href="{{ route('courses.create') }}"><i class="fa-solid fa-square-plus me-2"></i>New Course</a>
            </div>
        </div>
    </li>



    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Addons
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <a class="collapse-item" href="admin-login.html">Login</a>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <a class="collapse-item" href="admin-404.html">404 Page</a>
                <a class="collapse-item" href="admin-blank.html">Blank Page</a>
            </div>
        </div>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
        <a class="nav-link" href="admin-charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
        <a class="nav-link" href="admin-tables.html">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="{{ asset('images/rocket-art.png') }}" alt="...">
        <p class="text-center mb-2"><strong>Marjia LMS</strong> is a personal e-learning platform developed by a team of CSE 8th intake, BRUR</p>
    </div>

</ul>
<!-- End of Sidebar -->