<?php 

namespace Admin\Backend\Models;

use Admin\Backend\Cores\Model;

Class Posts extends Model {
    protected string $tableName = 'posts';


    public function getAllCategories() {

        return $this->queryBuilder
        ->select('*')
        ->from('categories')
        ->orderBy('id', 'desc')
        ->fetchAllAssociative();
    }
}