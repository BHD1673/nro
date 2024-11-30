<?php

namespace Admin\Backend\Controllers\Client;

use Admin\Backend\Cores\Controller;
use Admin\Backend\Models\User;

class AuthController extends Controller
{
    private $User;

    public function __construct()
    {
        $this->User = new User();
    }

    public function showRegisterForm()
    {

        $this->renderViewClient('users.register');
    }

    public function showLoginForm()
    {
        $this->renderViewClient('users.login');
    }


    public function register() {
        // Retrieve and sanitize input
        $username = htmlspecialchars(trim($_POST['username'] ?? ''));
        $password = htmlspecialchars(trim($_POST['password'] ?? ''));
    
        // Initialize an array for error messages
        $errors = [];
    
        // Validate username
        if (empty($username)) {
            $errors[] = "Tên người dùng không được để trống.";
        } elseif (strlen($username) < 3) {
            $errors[] = "Tên người dùng phải có ít nhất 3 ký tự.";
        }
    
        // Validate password
        if (empty($password)) {
            $errors[] = "Mật khẩu không được để trống.";
        } elseif (strlen($password) < 6) {
            $errors[] = "Mật khẩu phải có ít nhất 6 ký tự.";
        }
    
        // If there are validation errors, return the errors to the view
        if (!empty($errors)) {
            $this->renderViewClient('users.register', ['errors' => $errors]);
            return;
        }
    
        // Proceed with registration logic (e.g., save to database)
        // Example success message (can be redirected to another page)
        $successMessage = "Đăng ký thành công!";
        $this->renderViewClient('users.register', ['success' => $successMessage]);
    }
    
    public function login() {
        // Retrieve and sanitize input
        $username = htmlspecialchars(trim($_POST['username'] ?? ''));
        $password = htmlspecialchars(trim($_POST['password'] ?? ''));
    
        // Initialize an array for error messages
        $errors = [];
    
        // Validate username and password
        if (empty($username)) {
            $errors[] = "Tên người dùng không được để trống.";
        }
    
        if (empty($password)) {
            $errors[] = "Mật khẩu không được để trống.";
        }
    
        // If there are validation errors, return the errors to the view
        if (!empty($errors)) {
            $this->renderViewClient('users.login', ['errors' => $errors]);
            return;
        }
    
        // Example credentials
        $exampleUsername = 'test';
        $examplePassword = '123123';
    
        // Check credentials
        if ($username === $exampleUsername && $password === $examplePassword) {
            // Generate a simple authentication token (could be something more secure like JWT in production)
            $authToken = base64_encode($username . ':' . $password);
    
            // Set a cookie with the auth token (15 min expiry)
            setcookie('auth_token', $authToken, time() + 60 * 15, '/'); // Cookie valid for 5 min
    
            // Redirect to a protected page or show success message
            $successMessage = "Đăng nhập thành công!";
            $this->renderViewClient('users.dashboard', ['success' => $successMessage]);
        } else {
            // Invalid credentials
            $errors[] = "Tên người dùng hoặc mật khẩu không đúng.";
            $this->renderViewClient('users.login', ['errors' => $errors]);
        }
    }
    
    public function isAuthenticated()
    {
        if (isset($_COOKIE['auth_token'])) {
            // Decode the token and check its validity
            $authToken = base64_decode($_COOKIE['auth_token']);
            list($username, $password) = explode(':', $authToken);

            // Example credentials to validate (replace with database check in production)
            if ($username === 'test' && $password === '123123') {
                return true; // Authentication success
            }
        }

        return false; // Authentication failed
    }

    
}
