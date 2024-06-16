<?php 

namespace Admin\Backend\Controllers\Admin;

use Admin\Backend\Cores\Controller;
use Admin\Backend\Cores\Helper;
use Admin\Backend\Models\Category;

Class CategoryController extends Controller {


    public function index() {
        
        $category = new Category();

        // Helper::debug($category->all());

        // This will help us to printing thing out
        $this->renderViewAdmin('category', ['categories' => $category->all()]);

    }
    
}