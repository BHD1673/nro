<?php

use Admin\Backend\Controllers\Admin\DashboardController;
use Admin\Backend\Controllers\Admin\CategoryController;
// Admin Routes
// $router->mount('/admin', function() use ($router) {



//     // CRUD: Bài viết
//     $router->get('/bai-viet',                                           'AdminController@listPosts');
//     $router->get('/bai-viet/them-moi',                                  'AdminController@createPostForm');
//     $router->post('/bai-viet/them-moi',                                 'AdminController@createPost');
//     $router->get('/bai-viet/sua/{id}',                                  'AdminController@editPostForm');
//     $router->post('/bai-viet/sua/{id}',                                 'AdminController@updatePost');
//     $router->post('/bai-viet/xoa/{id}',                                 'AdminController@deletePost');

//     // Single Pages
//     $router->get('/trang-chinh',                                        'AdminController@dashboard');
//     $router->get('/stats/the-cao',                                      'AdminController@cardStats');
//     $router->get('/stats/bank',                                         'AdminController@bankStats');
//     $router->get('/config',                                             'AdminController@editConfig');
//     $router->post('/config',                                            'AdminController@updateConfig');
//     $router->get('/seo',                                                'AdminController@editSEO');
//     $router->post('/seo',                                               'AdminController@updateSEO');
// });

// $router->before('GET|POST', '/admin/*.*', function() {
//     if (! isset($_SESSION['user'])) {
//         header('location: ' . url('login') );
//         exit();
//     }
// });

$router->mount('/admin', function () use ($router) {

    $router->get('/',                                                   DashboardController::class . '@dashboard');

    // // CRUD USER
    // $router->mount('/users', function () use ($router) {
    //     $router->get('/',                                            UserController::class . '@index');
    //     $router->get('/create',                                      UserController::class . '@create');
    //     $router->post('/store',                                      UserController::class . '@store');
    //     $router->get('/{id}/show',                                   UserController::class . '@show');
    //     $router->get('/{id}/edit',                                   UserController::class . '@edit');
    //     $router->post('/{id}/update',                                UserController::class . '@update');
    //     $router->get('/{id}/delete',                                 UserController::class . '@delete');
    // });

    // CRUD: Danh mục bài viết
    $router->mount('/danh-muc', function() use ($router) {
        $router->get('/trang/{id}',                                             CategoryController::class . '@index');             // Hiển thị danh sách danh mục
        $router->post('/them-moi',                                              CategoryController::class . '@create');            // Xử lý dữ liệu vào database
        $router->get('/chi-tiet/{id}',                                          CategoryController::class . '@editFetch');         // Hiển thị form để sửa dữ liệu
        $router->post('/cap-nhat/{id}',                                         CategoryController::class . '@editPost');          // Gửi dữ liệu sửa
        $router->get('/xoa/{id}',                                               CategoryController::class . '@delete');            // Xoá dữ liệu
    });
    

});
