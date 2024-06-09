<?php 

// Client Routes
$router->get('/', 'ClientController@home');
$router->get('/dang-ky', 'ClientController@registerForm');
$router->post('/dang-ky', 'ClientController@register');
$router->get('/dang-nhap', 'ClientController@loginForm');
$router->post('/dang-nhap', 'ClientController@login');
$router->get('/tai-khoan', 'ClientController@accountDetails');
$router->get('/nap-the/card', 'ClientController@topUpCardForm');
$router->post('/nap-the/card', 'ClientController@topUpCard');
$router->get('/nap-the/bank', 'ClientController@topUpBankForm');
$router->post('/nap-the/bank', 'ClientController@topUpBank');
$router->get('/lich-su-giao-dich', 'ClientController@transactionHistory');
$router->get('/danh-muc/{id}', 'ClientController@listCategories');
$router->get('/bai-viet/{id}', 'ClientController@viewPost');