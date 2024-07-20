<?php 

namespace Admin\Backend\Controllers\Admin;

use Admin\Backend\Cores\Controller;
use Admin\Backend\Models\Posts;

Class PostController extends Controller {

    private Posts $posts;

    public function __construct() {

        $this->posts = new Posts();
    }

    public function index() {
        
        $this->renderViewAdmin('posts.index');
    }

    public function create() {
        
        $categories = $this->posts->getAllCategories();
        $this->renderViewAdmin('posts.create', ['categories' => $categories]);
    }

    public function store() {

    }
}