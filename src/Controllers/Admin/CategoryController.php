<?php 

namespace Admin\Backend\Controllers\Admin;

use Admin\Backend\Cores\Controller;
use Admin\Backend\Cores\Helper;
use Admin\Backend\Cores\Request;
use Admin\Backend\Models\Category;
use Rakit\Validation\Validator as ValidationValidator;

Class CategoryController extends Controller {

    private Category $category;

    public function __construct()
    {
        $this->category = new Category();
    }

    /* Handling Pagination for categories
        @param $id
        The param $id are get from the Route
        The Route can be look like this
        http://localhost/admin/category/{id}
    */
    public function index($id) {
        
        // Paginate categories
        [$categories, $totalPage] = $this->category->paginate(
            $id, 10);

        
        // Render view with categories
        $this->renderViewAdmin('category.index', [
            'categories' => $categories,
            'currentPage' => $id,
            'totalPage' => $totalPage,
        ]);
    }

    public function create() {
        $validator = new ValidationValidator();
        $validation = $validator ->make($_POST, [
            'name' => 'required|min:3'
        ]);
        $validation->validate();
        if($validation->fails()) {
            $_SESSION['error'] = $validation->errors()->firstOfAll();

            header('Location: ' . url('admin/category/create'));
            exit;
        } else {
            $data = [
                'name' => $_POST['name'],
                'slug' => Helper::slugify($_POST['name']),
                'user_id' => $_SESSION['user']['id'] //TODO: Get a login
                
            ];
            $this->category->insert($data);

            $_SESSION['status'] = 'Thêm danh mục thành công';

            header('Location: ' . url('admin/danh-muc/trang/1'));
            exit;
        }
    }

    public function quickCreate() {
        // Set the content type to JSON
        header('Content-Type: application/json');
    
        // Only allow POST requests
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405); // Method Not Allowed
            echo json_encode([
                'status' => 'error',
                'message' => 'Method not allowed. Only POST requests are allowed.'
            ]);
            exit;
        }
    
        // Initialize the validation
        $validator = new ValidationValidator();
        $validation = $validator->make($_POST, [
            'name' => 'required|min:3'
        ]);
        $validation->validate();
    
        // Check for validation errors
        if ($validation->fails()) {
            http_response_code(400); // Bad Request
            echo json_encode([
                'status' => 'error',
                'errors' => $validation->errors()->firstOfAll()
            ]);
            exit;
        }
    
        // Prepare the data for insertion
        $data = [
            'name' => $_POST['name'],
            'slug' => Helper::slugify($_POST['name']),
            'user_id' => $_SESSION['user']['id'] // Get the logged-in user ID
        ];
    
        // Insert the data into the database
        $this->category->insert($data);
    
        // Return a success response
        http_response_code(201); // Created
        echo json_encode([
            'status' => 'success',
            'message' => 'Thêm danh mục thành công'
        ]);
        exit;
    }
    
    
    
    

    public function editFetch($id) {

        $category = $this->category->findByID($id);

        // Helper::debug($category);

        if (!$category) {
            $_SESSION['error'] = 'Danh mục không tồn tại';
            header('Location: ' . url('admin/danh-muc/trang/1'));
            exit;
        } else {
            $this->renderViewAdmin('category.edit', [
                'category' => $category
            ]);
        }

    }

    public function editPost($id) {
        // Initialize the validator
        $validator = new ValidationValidator();
    
        // Define validation rules
        $validation = $validator->make($_POST, [
            'name' => 'required|min:3'
        ]);
    
        // Validate the input data
        $validation->validate();
    
        // Check if validation fails
        if ($validation->fails()) {
            // Store error messages in session and redirect back to the edit page
            $_SESSION['error'] = $validation->errors()->firstOfAll();
            header('Location: ' . url('admin/category/edit/' . $id));
            exit;
        }
    
        // Prepare data for updating the category
        $data = [
            'name' => $_POST['name'],
            'slug' => Helper::slugify($_POST['name']),
            'user_id' => $_SESSION['user']['id']
        ];
    
        // Update the category in the database
        $this->category->update($id, $data);
    
        // Set a success message and redirect to the category list page
        $_SESSION['status'] = 'Cập nhật danh mục thành công';
        header('Location: ' . url('admin/danh-muc/trang/1'));
        exit;
    }
    

    public function delete($id) {
        if (!$id) {
            $_SESSION['error'] = 'Danh mục không tồn tại';
            header('Location: ' . url('admin/danh-muc/trang/1'));
            exit;
        } else {
            
        $this->category->delete($id);

        $_SESSION['status'] = 'Xóa danh mục thành công';
        header('Location: ' . url('admin/danh-muc/trang/1'));
        exit;
        }
    }

}