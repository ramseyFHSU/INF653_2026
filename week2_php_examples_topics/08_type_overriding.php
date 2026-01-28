<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - Type Overriding</title>
</head>
<body>
  <h2>Type Overriding (Loosely Typed)</h2>

  <?php
    $txt = "Hello world!";
    $x = 25;
    $y = 2.5;

    echo "txt: $txt<br>";
    echo "x: $x<br>";
    echo "y: $y<br>";

    echo "<hr>";

    $z = $x + $y;
    $txt = $y / $x;       // now txt becomes float
    $x = "Hello world";   // now x becomes string

    echo "z = $z<br>";
    echo "txt (after override) = $txt<br>";
    echo "x (after override) = $x<br>";
  ?>
</body>
</html>
