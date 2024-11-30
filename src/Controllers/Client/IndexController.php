<?php 

namespace Admin\Backend\Controllers\Client;


use Admin\Backend\Cores\Controller;

Class IndexController extends Controller {
    public function index() {

        $this->renderViewClient('index');
    }

    public function topUpCardForm() {

        $this->renderViewClient('top-up-card');
    }

    public function topUpCard() {

    }

    public function topUpBankForm() {
        $this->renderViewClient('top-up-bank');
    }

    public function topUpBank() {

    }

    public function transactionHistory() {
        
    }

    public function listCategories() {

    }

    public function viewPost() {

    }

    public function listPosts() {

    }

    public function logout() {

    }
}

