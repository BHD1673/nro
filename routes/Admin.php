<?php
// Admin Routes
$router->mount('/admin', function() use ($router) {

    // CRUD: Danh mục bài viết
    $router->get('/danh-muc',                                           'AdminController@listCategories');
    $router->get('/danh-muc/them-moi',                                  'AdminController@createCategoryForm');
    $router->post('/danh-muc/them-moi',                                 'AdminController@createCategory');
    $router->get('/danh-muc/sua/{id}',                                  'AdminController@editCategoryForm');
    $router->post('/danh-muc/sua/{id}',                                 'AdminController@updateCategory');
    $router->post('/danh-muc/xoa/{id}',                                 'AdminController@deleteCategory');

    // CRUD: Bài viết
    $router->get('/bai-viet',                                           'AdminController@listPosts');
    $router->get('/bai-viet/them-moi',                                  'AdminController@createPostForm');
    $router->post('/bai-viet/them-moi',                                 'AdminController@createPost');
    $router->get('/bai-viet/sua/{id}',                                  'AdminController@editPostForm');
    $router->post('/bai-viet/sua/{id}',                                 'AdminController@updatePost');
    $router->post('/bai-viet/xoa/{id}',                                 'AdminController@deletePost');

    // Single Pages
    $router->get('/trang-chinh',                                        'AdminController@dashboard');
    $router->get('/stats/the-cao',                                      'AdminController@cardStats');
    $router->get('/stats/bank',                                         'AdminController@bankStats');
    $router->get('/config',                                             'AdminController@editConfig');
    $router->post('/config',                                            'AdminController@updateConfig');
    $router->get('/seo',                                                'AdminController@editSEO');
    $router->post('/seo',                                               'AdminController@updateSEO');
});