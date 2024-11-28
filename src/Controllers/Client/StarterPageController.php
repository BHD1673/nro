<?php 

namespace Admin\Backend\Controllers\Client;

use Admin\Backend\Cores\Controller;

class StarterPageController extends Controller  {
    public function index() {

        $this->renderViewClient('client.index');
    }
}