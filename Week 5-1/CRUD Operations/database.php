<?php 
//Data source Network 
$dsn = "mysql:host=localhost; dbname=world"; 
$username = 'root';
// $password = '1qaz';

// PDO 
try{
$db = new PDO($dsn, $username);
} catch (PDOException $error) {
 $error_message = 'Database Error';
 $error_message .= $error->getMessage();
 echo $error_message;
 exit();
}

?>