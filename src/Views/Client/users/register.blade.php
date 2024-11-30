<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
    <h2>Register</h2>

    <!-- Show success or error message -->

    <?php if (!empty($errors)): ?>
        <div class="alert alert-danger">
            <ul>
                <?php foreach ($errors as $error): ?>
                    <li><?= $error ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <?php if (!empty($success)): ?>
        <div class="alert alert-success">
            <?= $success ?>
            <script>
                setTimeout(function() {
                    window.location.href = "{{ url('dang-nhap') }}";
                }, 2000);
            </script>
        </div>
    <?php endif; ?>



    <form action="{{ url('register') }}" method="POST">
        <div class="mb-3">
            <label for="username" class="form-label">Name</label>
            <input type="text" name="username" id="username" class="form-control" >
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" id="password" class="form-control" >
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>
</body>
</html>
