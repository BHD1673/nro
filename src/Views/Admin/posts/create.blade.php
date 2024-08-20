@extends('layouts.master')

@section('title')
    Tạo bài viết mới
@endsection

@section('main-content')
    <h2>Thêm một bài viết mới</h2>
    <a href="{{ url('admin/bai-viet/trang/1') }}" class="btn btn-primary" style="text-weight">Quay về danh sách bài viết</a>

    <div id="notification" class="alert alert-success" style="display: none; position: fixed; top: 20px; right: 20px;">
        Form submitted successfully!
    </div>

    <div class="col-lg-12">
        <div class="card">
            <div class="card-header align-items-center d-flex">
                <h4 class="card-title mb-0 flex-grow-1">Thông tin bài viết</h4>
            </div><!-- end card header -->

            <!-- Modal -->
            {{-- <div class="modal fade" id="newCategoryModal" tabindex="-1" aria-labelledby="newCategoryModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="newCategoryModalLabel">Thêm mới danh mục</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="newCategoryForm">
                                <div class="mb-3">
                                    <label for="categoryName" class="form-label">Tên danh mục</label>
                                    <input type="text" class="form-control" id="categoryName" name="name">
                                </div>
                                <div class="mb-3">
                                    <label for="categorySlug" class="form-label">Đường dẫn danh mục - Slug (Có thể bỏ trống)
                                    </label>
                                    <input type="text" class="form-control" id="categorySlug" name="slug"
                                        rows="3"></input>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                                    <button type="submit" class="btn btn-primary">Thêm mới</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const newCategoryForm = document.getElementById('newCategoryForm');
                    const categoryName = document.getElementById('categoryName');
                    const categorySlug = document.getElementById('categorySlug');
                    const successToast = document.getElementById('successToast');
                    const toast = new bootstrap.Toast(successToast, {
                        delay: 5000
                    });
                    const modalElement = document.getElementById('newCategoryModal');
                    const modal = new bootstrap.Modal(modalElement);

                    newCategoryForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent the form from submitting normally
                        console.log('Form submitted');
                        let isValid = true;

                        // Clear any existing error messages
                        clearErrors();

                        if (!categoryName.value.trim()) {
                            isValid = false;
                            showError(categoryName, 'Tên danh mục is required.');
                        } else if (categoryName.value.trim().length < 3) {
                            isValid = false;
                            showError(categoryName, 'Tên danh mục must be at least 3 characters.');
                        }

                        // No validation required for categorySlug as it's optional

                        if (isValid) {
                            // Create an object with the form data
                            const formData = new FormData();
                            formData.append('name', categoryName.value.trim());
                            formData.append('slug', categorySlug.value.trim());

                            console.log('Form data prepared:', {
                                name: categoryName.value.trim(),
                                slug: categorySlug.value.trim()
                            });

                            // Send the form data to the server
                            fetch('http://nro.testing/api/categories/them-moi-nhanh', {
                                    method: 'POST',
                                    body: formData
                                })
                                .then(response => {
                                    console.log('Response received:', response);
                                    // Check if the response is in JSON format
                                    const contentType = response.headers.get('content-type');
                                    if (contentType && contentType.includes('application/json')) {
                                        return response.json();
                                    } else {
                                        return response.text().then(text => {
                                            console.error('Unexpected response format:', text);
                                            throw new Error('Unexpected response format');
                                        });
                                    }
                                })
                                .then(data => {
                                    console.log('Response JSON:', data);
                                    if (data.status === 'success') {
                                        // Close the modal
                                        modal.hide();
                                        console.log('Modal closed');

                                        // Show the success toast
                                        toast.show();
                                        console.log('Success toast shown');
                                    } else {
                                        // Handle error response from server
                                        handleServerErrors(data.errors);
                                    }
                                })
                                .catch(error => {
                                    console.error('Fetch error:', error);
                                    // Optionally, display a general error message to the user
                                    alert('An error occurred. Please try again.');
                                });
                        }
                    });

                    function showError(input, message) {
                        console.log('Showing error for', input.name, ':', message);
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'invalid-feedback';
                        errorDiv.innerText = message;
                        input.classList.add('is-invalid');
                        input.parentNode.appendChild(errorDiv);
                    }

                    function clearErrors() {
                        console.log('Clearing errors');
                        const invalidInputs = document.querySelectorAll('.is-invalid');
                        invalidInputs.forEach(function(input) {
                            input.classList.remove('is-invalid');
                        });

                        const errorMessages = document.querySelectorAll('.invalid-feedback');
                        errorMessages.forEach(function(error) {
                            error.parentNode.removeChild(error);
                        });
                    }

                    function handleServerErrors(errors) {
                        console.log('Handling server errors:', errors);
                        // Assuming errors is an object with field names as keys and error messages as values
                        for (const [field, message] of Object.entries(errors)) {
                            const input = document.querySelector(`[name=${field}]`);
                            if (input) {
                                showError(input, message);
                            }
                        }
                    }

                    // Clean up the backdrop on modal hide
                    modalElement.addEventListener('hidden.bs.modal', function() {
                        const backdrop = document.querySelector('.modal-backdrop');
                        if (backdrop) {
                            backdrop.remove();
                        }
                    });
                });
            </script> --}}



            <div class="card-body">
                <p class="text-muted">Những nội dung cần thiết cho bài viết ở đây</p>
                <div class="live-preview">
                    <form id="postForm" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row g-3">

                            <div class="col-sm-5">
                                <input type="text" class="form-control" placeholder="Tiêu đề bài viết" name="post_title"
                                    aria-label="Tiêu đề bài viết" required>
                            </div>
                            <div class="col-sm-4">
                                <select class="form-select rounded-pill mb-3" name="post_status"
                                    aria-label="Default select example" required>
                                    <option selected="" disabled>Lựa chọn danh mục bài viết</option>
                                    @foreach ($categories as $item)
                                        <option value="{{ $item['id'] }}">{{ $item['name'] }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-sm-3">
                                {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#newCategoryModal">
                                    Thêm mới danh mục
                                </button> --}}

                                <input type="text" name="post_category" id="post_category" class="form-control" placeholder="Nhập tên danh mục mới" aria-label="Danh mục bài viết">
                            </div>

                            <div class="col-sm-12">
                                <input type="text" class="form-control"
                                    placeholder="URL bài viết - Từ khoá bài viết (Có thể bỏ qua)" name="post_slug"
                                    aria-label="Slug">
                            </div>
                            <!--end col-->
                            <div class="col-sm-7">
                                <input type="text" class="form-control"
                                    placeholder="Các từ khoá cho bài viết (Cách nhau bằng dấu phẩy)" name="post_keywords"
                                    aria-label="Các từ khoá bài viết (Cách nhau bằng dấu phẩy)">
                            </div>
                            <div class="col-sm-5">
                                <select class="form-select rounded-pill mb-3" name="post_status"
                                    aria-label="Default select example" required>
                                    <option selected="" disabled>Lựa chọn đăng bài</option>
                                    <option value="publish_now">Đăng bài ngay</option>
                                    <option value="publish_later">Đăng bài sau</option>
                                    <option value="draft">Lưu nháp</option>
                                </select>
                            </div>
                            <!--end col-->
                            <div class="col-sm-12">
                                <div class="input-group">
                                    <label class="input-group-text" for="post_image">Ảnh</label>
                                    <input type="file" class="form-control" id="post_image" name="post_image"
                                        required>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                </div>
            </div>
        </div>
    </div>


    <div class="col-lg-12">
        <div class="card">
            <div class="card-header align-items-center d-flex">
                <h4 class="card-title mb-0">Nội dung bài viết</h4>
            </div><!-- end card header -->
    
            <div class="card-body">
                <!-- Snow Editor container -->
                <div id="editor-container" style="height: 600px;"></div>
                <input type="hidden" name="post_content" id="post_content">
            </div><!-- end card-body -->
        </div><!-- end card -->
    </div>
    

    <div class="mb-3 d-flex justify-content-center">
        <button type="reset" class="btn btn-outline-secondary me-3"
            onclick="return confirm('Bạn có chắc không? Những gì bạn vừa nhập vào sẽ bị xoá')">Nhập lại</button>
        <button type="submit" class="btn btn-success">Thêm mới</button>
    </div>
    </form>


<!-- Quill.js -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

<!-- Custom CSS for placeholder text color -->
<style>
    .ql-snow .ql-editor.ql-blank::before {
        color: #aaa; /* Change this to the desired placeholder color */
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var quill = new Quill('#editor-container', {
            theme: 'snow',
            placeholder: 'Hãy tạo ra những bài viết hay...',
            modules: {
                toolbar: [
                    [{'font': []}],
                    [{'size': ['small', false, 'large', 'huge']}],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{'header': 1}, {'header': 2}],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{'script': 'sub'}, {'script': 'super'}],
                    [{'indent': '-1'}, {'indent': '+1'}],
                    [{'direction': 'rtl'}],
                    [{'color': []}, {'background': []}],
                    [{'align': []}],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            }
        });

        // Form submission event listener
        document.getElementById('postForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get Quill content
            var quillContent = quill.root.innerHTML;
            document.getElementById('post_content').value = quillContent;

            // Debug form with fake dd()
            console.log(quillContent);
            console.log('Form submitted');


            if (!quillContent) {
                alert('Vui lý nhập bài về');
                return false;
            }


            // Submit the form

        });
    });
</script>
@endsection
