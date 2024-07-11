<?php 

Namespace Admin\Backend\Controllers\Admin;

use Admin\Backend\Cores\Controller;
use Admin\Backend\Models\Posts;

class DashboardController extends Controller
{
    private Posts $posts;

    public function __construct()
    {
        $this->posts = new Posts();
    }

    // public function dashboard() {
    //     $products = $this->posts->all();

    //     $analysisProduct = array_map(function ($item) {
    //         return [
    //       erViewAdmin(__FUNCTION__, [
    //    //         'analysisProduct' => $analysisProduct
    //    //     ]);      $item['name'],
    //             $item['views']
    //         ];
    //     }, $products);

    //     array_unshift($analysisProduct, ['Tên sản phẩm', 'Lượt views']);

    //     $this->rend
    // }

    public function dashboard() {
        $this->renderViewAdmin(__FUNCTION__);
    }
}