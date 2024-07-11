<?php

namespace Admin\Backend\Cores;

class Request
{
    protected array $query;

    public function __construct()
    {
        $this->query = $_GET; // You could also handle POST data here
    }

    public function query(string $key, $default = null)
    {
        return $this->query[$key] ?? $default;
    }
}
