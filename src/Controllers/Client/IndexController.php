<?php 

Namespace Admin\Backend\Controllers\Client;

use Admin\Backend\Cores\Controller;

Class IndexController extends Controller {

    public function index() {
        $this->renderViewClient(__FUNCTION__);
    }
}