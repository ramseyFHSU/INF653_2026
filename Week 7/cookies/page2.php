<?php 
setcookie('username', 'jane doe', time() + (86400 *30));
setcookie('username', 'jane doe', time() - 3600);
if(isset($_COOKIE['username'])){
    echo 'username ' . $_COOKIE['username']. ' is set';
}else{
    echo 'username is not set';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="page1.php">Page 1</a>
</body>
</html>