<?php

namespace Admin\Backend\Cores;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\Query\QueryBuilder;

class Model
{
    protected Connection|null $conn;
    protected QueryBuilder $queryBuilder;
    protected string $tableName;

    public function __construct()
    {
        $connectionParams = [
            'dbname'    => $_ENV['DB_NAME'],
            'user'      => $_ENV['DB_USERNAME'],
            'password'  => $_ENV['DB_PASSWORD'],
            'host'      => $_ENV['DB_HOST'],
            'port'      => $_ENV['DB_PORT'],
            'driver'    => $_ENV['DB_DRIVER'],
        ];

        $this->conn = DriverManager::getConnection($connectionParams);

        $this->queryBuilder = $this->conn->createQueryBuilder();
    }

    public function getConnection()
    {
        return $this->conn;
    }


    public function testConnect()
    {
        echo "<pre>";
        print_r($this->conn);
    }

    public function __destruct()
    {
        $this->conn = null;
    }
}