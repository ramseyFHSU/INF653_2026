<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - String Concatenation</title>
</head>
<body>
  <h2>String Concatenation</h2>

  <?php
    $x = 20;

    // Using commas (echo only)
    echo "This ", "course ", "is ", "made ", "of ", $x, " lectures.<br>";

    // Using dot (.)
    echo "This " . "course " . "is " . "made " . "of " . $x . " lectures.<br>";
  ?>
</body>
</html>
