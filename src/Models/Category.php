<?php 

Namespace Admin\Backend\Models;

use Admin\Backend\Cores\Model;
use Doctrine\DBAL\Connection;

class Category extends Model {
    // Từ cái model thì sang cái category mình chỉ cần sửa cái biến bảng 
    // -> danh mục bài viết
    protected string $tableName = 'categories';   
}