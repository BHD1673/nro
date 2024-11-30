<?php 

// Client Routes

use Admin\Backend\Controllers\Client\AuthController;
use Admin\Backend\Controllers\Client\IndexController;

$router->get('/',                       IndexController::class . '@index');
$router->get('/dang-ky',                AuthController::class . '@showRegisterForm');
$router->post('/register',              AuthController::class . '@register');
$router->get('/dang-nhap',              AuthController::class . '@showLoginForm');
$router->post('/login',                 AuthController::class . '@login');
// $router->get('/tai-khoan',              IndexController::class . '@accountDetails'); //TODO: Important.
// $router->get('/nap-the/card',           IndexController::class . '@topUpCardForm');
// $router->post('/nap-the/card',          IndexController::class . '@topUpCard');
// $router->get('/nap-the/bank',           IndexController::class . '@topUpBankForm');
// $router->post('/nap-the/bank',          IndexController::class . '@topUpBank');
// $router->get('/lich-su-giao-dich',      IndexController::class . '@transactionHistory');
// $router->get('/danh-muc',               IndexController::class . '@listCategories');
// $router->get('/bai-viet/{id}',          IndexController::class . '@viewPost');
// $router->get('/bai-viet/{id}/{slug}',   IndexController::class . '@viewPost');
// $router->get('/danh-sach-bai-viet',     IndexController::class . '@listPosts');

// $router->get('/',                                                   function() {
//     echo "Chưa ghép giao diện, không có gì ở đây đâu";
// });

if (isset($_SESSION['user'])) {
    $router->get('/dang-xuat',              IndexController::class . '@logout');
}