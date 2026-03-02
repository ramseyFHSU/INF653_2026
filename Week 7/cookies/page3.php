<?php 
$user = ['name' => 'jane doe', 'email' => 'jane@gmail.com', 'age' => '25'];

$user = serialize($user);
setcookie('user', $user, time() +3600);
echo $user;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cookies</title>
</head>
<body>
    <a href="page2.php">Page 2</a>
</body>
</html>