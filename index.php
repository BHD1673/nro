<?php 

session_start();
// PSR-4 autoloading configured. Use "namespace Admin\Backend;" in src/
// Include the Composer autoloader with: require 'vendor/autoload.php';

use Dotenv\Dotenv;

require 'vendor/autoload.php';

Dotenv::createImmutable(__DIR__)->load();

require "helper.php";
// This aint nothing much to see in this file. It just interact with the routes.
require "routes/index.php";