<?php 

namespace Admin\Backend\Controllers\Admin;

use Admin\Backend\Models\Category;
use Admin\Backend\Cores\Controller;
use Admin\Backend\Cores\Helper;
use Rakit\Validation\Validator as ValidationValidator;

class ApiCategoryController extends Controller
{
    private Category $category;

    public function __construct() {
        $this->category = new Category();
    }
    public function index() {
        header('Content-Type: application/json');

        $categories = $this->category->getAll();

        if ($categories) {
            http_response_code(200); // OK
            echo json_encode([
                'status' => 'success',
                'data' => $categories
            ]);
        } else {
            http_response_code(404); // Not Found
            echo json_encode([
                'status' => 'error',
                'message' => 'No categories found'
            ]);
        }
        exit;
    }


    public function create()
    {
        header('Content-Type: application/json');
    
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method not allowed. Only POST requests are allowed.'
            ]);
            exit;
        }
    
        $validator = new ValidationValidator();
        $validation = $validator->make($_POST, [
            'name' => 'required|min:3'
        ]);
        $validation->validate();
    
        if ($validation->fails()) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'errors' => $validation->errors()->firstOfAll()
            ]);
            exit;
        }
    
        $data = [
            'name' => $_POST['name'],
            'slug' => Helper::slugify($_POST['name']),
            'user_id' => 1 #$_SESSION['user']['id'] //TODO: Nhớ sửa cái chỗ này
        ];
    
        $this->category->insert($data);
    
        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Category created successfully'
        ]);
        exit;
    }
    
}
