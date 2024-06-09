<?php 

use Bramus\Router\Router;

$router = new Router();

require_once __DIR__ . './Admin.php';
require_once __DIR__ . './Client.php';

$router->run();