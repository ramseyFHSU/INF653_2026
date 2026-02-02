<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - Data Types</title>
</head>
<body>
  <h2>Data Types</h2>

  <?php
    $age = 25;              // integer
    $price = 9.99;          // float
    $greeting = "Hello";    // string
    $isOnline = true;       // boolean

    echo "Age: $age<br>";
    echo "Price: $price<br>";
    echo "Greeting: $greeting<br>";
    echo "isOnline: $isOnline<br>"; // prints 1 for true

    echo "<hr>";
    echo "<pre>";
    var_dump($age);
    var_dump($price);
    var_dump($greeting);
    var_dump($isOnline);
    echo "</pre>";
  ?>
</body>
</html>
