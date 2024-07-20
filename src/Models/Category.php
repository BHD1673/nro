<?php 

Namespace Admin\Backend\Models;

use Admin\Backend\Cores\Model;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Query\QueryBuilder;

class Category extends Model {
    // Từ cái model thì sang cái category mình chỉ cần sửa cái biến bảng 
    // -> danh mục bài viết    
    protected string $tableName = 'categories'; // Specify the table name for categories

    public function getAll() {
        $queryBuilder = clone $this->queryBuilder;

        $queryBuilder
            ->select('categories.*', 'users.username AS created_by_name', 'users.id AS created_by_id')
            ->from($this->tableName)
            ->leftJoin('categories', 'users', 'users', 'categories.user_id = users.id')
            ->orderBy('categories.id', 'DESC');

        return $queryBuilder->fetchAllAssociative();
    }

    public function count()
    {
        $queryBuilder = clone($this->queryBuilder);
        return $queryBuilder
            ->select("COUNT(*) as total")
            ->from($this->tableName)
            ->fetchOne();
    }

    public function findByID($id) {
        $queryBuilder = clone($this->queryBuilder);

        return $queryBuilder
        ->select('categories.id', 'categories.name', 'categories.slug', 'categories.created_at', 'categories.updated_at', 'users.username AS created_by')
        ->from($this->tableName)
        ->leftJoin('categories', 'users', 'users', 'categories.user_id = users.id')
        ->where('categories.id = :categoryId')
        ->setParameter('categoryId', $id)
        ->fetchAssociative();
    }
    

    public function paginate($page = 1, $perPage = 10) {
        if ($perPage <= 0) {
            throw new \InvalidArgumentException('The perPage parameter have to be greater than zero.');
        }
        
        $queryBuilder = clone $this->queryBuilder;

        $totalPage = ceil($this->count() / $perPage);
    
        $offset = $perPage * ($page - 1);
    
        //     ->select('categories.*', 'u.username AS created_by_name', 'u.id AS created_by_id')
        //     ->from($this->tableName, 'c')  
        //     ->leftJoin('c', 'users', 'u', 'c.user_id = u.id')
        //     ->orderBy('c.id', 'DESC')
        //     ->setFirstResult($offset)
        //     ->setMaxResults($perPage)
        //     ->fetchAllAssociative();

        $data = $this->queryBuilder
        ->select('c.*', 'u.username AS created_by_name', 'u.id AS created_by_id')
        ->from($this->tableName, 'c')  
        ->leftJoin('c', 'users', 'u', 'c.user_id = u.id')
        ->orderBy('c.id', 'DESC')
        ->setFirstResult($offset)
        ->setMaxResults($perPage)
        ->fetchAllAssociative();
    
    
        return [$data, $totalPage];
    }
}