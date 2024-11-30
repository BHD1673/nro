<?php

namespace Admin\Backend\Models;

use Admin\Backend\Cores\Model;

class User extends Model
{
    protected string $tableName = 'users';

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllUsers()
    {
        return $this->queryBuilder->select('*')->from($this->tableName)->fetchAllAssociative();
        // do not use this, for test purpose only
    }

    public function getUserByID($id)
    {
        return $this->queryBuilder->select('*')->from($this->tableName)->where('id = ?')->setParameter(0, $id)->fetchAssociative();
    }

    public function getUserByName($username)
    {
        return $this->queryBuilder->select('*')->from($this->tableName)->where('username = ?')->setParameter(0, $username)->fetchAssociative();
    }

    public function createUser(string $userName, string $password): bool
    {
        try {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $query = $this->queryBuilder->insert($this->tableName)
                ->values([
                    'username' => ':username',
                    'password' => ':password'
                ])
                ->setParameter(':username', $userName)
                ->setParameter(':password', $hashedPassword);

            return $query->executeQuery() > 0;
        } catch (\Exception $e) {
            // Log the exception or handle it as needed
            error_log($e->getMessage());
            return false;
        }
    }


    // public function getUserHashedPassword($name)
    // {
    //     return $this->queryBuilder->select('password')->from($this->tableName)->where('name = ?')->setParameter(0, $name)->fetchOne();
    // }

    // public function verifyPassword($name, $enteredPassword)
    // {
    //     // Get the hashed password from the database
    //     $hashedPassword = $this->getUserHashedPassword($name);

    //     if (!$hashedPassword) {
    //         return false; // User not found
    //     }

    //     // Verify the entered password against the hashed password
    //     return password_verify($enteredPassword, $hashedPassword);
    // }
}
