@extends('admin.layouts.app')

@section('title', 'Blogs')

@section('content')

    @if (session('blog_action_msg'))
    <div class="alert alert-success d-flex align-items-center mb-3 alert-dismissible fade show" role="alert">
        <div class="me-2 pe-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
        </div>
        <div>
            {{ session('blog_action_msg') }}
        </div>
        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    @endif

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">All Posts</h1>
        <a href="{{ route('blogs.create') }}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fa-solid fa-plus text-white-50 me-1"></i> New post</a>
    </div>

    <!-- Card -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">All Blog Posts</h6>
        </div>
        <div class="card-body pb-4">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <th>Title</th>
                            <th>Visibility</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Id</td>
                            <th>Title</th>
                            <th>Visibility</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @if ($blogs)
                            @foreach ($blogs as $blog)
                                <tr>
                                    <td class="align-middle">{{ $blog->id }}</td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <img src="{{ $blog->thumbnail }}" class="me-2 rounded" width="100" height="auto" alt="thumbnail">
                                            <div class="ps-1">
                                                <h6 class="mb-1"><a href="{{ route('blogs.edit', $blog->slug) }}">{{ $blog->title }}</a></h6>
                                                <div class="d-flex flex-nowrap">
                                                    <small class="me-2 text-nowrap" style="font-size: 0.825rem;"><i class="fa-solid fa-user-tie fa-sm text-gray-400 me-1"></i>{{ $blog->user->first_name }}</small>
                                                    <small class="me-2 text-nowrap text-capitalize" style="font-size: 0.825rem;"><i class="fa-regular fa-eye fa-sm text-gray-400 me-1"></i>{{ $blog->views }} views</small>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        @if ($blog->visibility == 'public')
                                            <span class="bg-success text-success bg-opacity-10 py-1 px-3 rounded-pill text-capitalize small">{{ $blog->visibility }}</span>
                                            @else
                                            <span class="bg-dark text-gray-600 bg-opacity-10 py-1 px-3 rounded-pill text-capitalize small">{{ $blog->visibility }}</span>
                                        @endif
                                    </td>
                                    <td class="align-middle text-nowrap">{{ $blog->created_at->format('M d, Y') }} <small>at {{ $blog->created_at->format('h:m a') }}</small></td>
                                    <td class="align-middle">
                                        <div class="d-flex align-items-center">
                                            <a href="{{ route('blogs.edit', $blog->slug) }}" class="btn btn-sm btn-primary text-nowrap me-2"><i class="fa-solid fa-pen-to-square fa-sm"></i> Edit</a>
                                            <a href="{{ route('blogs.destroy', $blog->slug) }}" class="blog-delete-btn btn btn-sm btn-danger text-nowrap me-2" data-id="{{ $blog->id }}"><i class="fa-solid fa-trash-alt fa-sm"></i> Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Blog Detele Modal -->
    <div class="modal fade" id="deleteBlogModal" tabindex="-1" aria-labelledby="deleteBlogModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="deleteBlogModalLabel"><i class="fas fa-trash-alt me-1"></i> Confirm Deletion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h1 id="blogId" class="d-none"></h1>
                    <p class="m-0">Are you sure you want to delete this post?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" id="deleteBlogConfirm" class="btn btn-danger">Yes, Delete</button>
                </div>
            </div>
        </div>
    </div>

@endsection



@section('scripts')
    <script type="text/javascript">
        jQuery(function(){
            $('#dataTable').DataTable();
        });


        // Blog Delete
        $('.blog-delete-btn').on('click', function(e) {
            e.preventDefault();
            $('#blogId').html($(this).data('id'));
            $('#deleteBlogModal').modal('show');
        });


        $('#deleteBlogConfirm').on('click', function(){
            let blogId =  $('#blogId').html();
            axios.delete('/admin/blogs/'+blogId, {
                
            })
            .then(res => {
                if (res.status == 200) {
                    if (res.data == 1) {
                        location.reload();
                    } else {
                        toastr.error('Delete failed', 'Failed');
                    }
                }else {
                        toastr.error('Delete failed', 'Failed');
                    }
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        });

    </script>
@endsection
