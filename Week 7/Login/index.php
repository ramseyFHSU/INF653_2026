<?php 
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = trim($_POST['username']);
    if(!empty($username)){
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
        exit();
    }else {
        $error = "Please enter a username";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>
    <h2>Login</h2>
    <form action="POST">
        <input type="text" name="username" placeholder="Enter your username">
        <button type="submit">Login</button>
    </form>
</body>
</html>