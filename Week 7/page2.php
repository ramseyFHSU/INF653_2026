<?php 
session_start();

$name = $_SESSION['name'];
$email = $_SESSION['email'];

if(isset($_SESSION['counter'])){
    $_SESSION['counter']++;

}else {
    $_SESSION['counter'] = 1;
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
    <h1>Hello my name is <?= $name ?> and my email is <?= $email ?></h1>
    <h1>You have visited this page <?= $_SESSION['counter'] ?></h1>
</body>
</html>