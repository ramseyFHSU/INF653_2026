<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - echo vs print vs var_dump</title>
</head>
<body>
  <h2>echo vs print vs var_dump()</h2>

  <?php
    $number = 5985;

    echo "Using echo: $number<br>";
    print "Using print: $number<br>";

    echo "<hr>";
    echo "<pre>";
    var_dump($number);
    echo "</pre>";
  ?>
</body>
</html>
