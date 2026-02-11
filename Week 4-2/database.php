<?php 
//Data source network 
$dsn = "mysql:host=localhost; dbname=world";
$username = "root";
$password ='1qaz';

//PDO - php Document objects - Represents the connection between PHP and the database server 
try{
    $db = new PDO($dsn, $username, $password);

    
} catch (PDOException $error){
    $error_message = 'Database Error!';
    $error_message .= $error->getMessage();
    echo $error_message;
    exit();
}
?>