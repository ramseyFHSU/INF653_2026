<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - Case Sensitivity</title>
</head>
<body>
  <h2>Case Sensitivity</h2>

  <?php
  // Keywords are NOT case-sensitive
  echo 'ECHO works<br>';
  echo 'echo works<br>';
  echo 'EcHo works<br>';

  echo '<hr>';

  // Variables ARE case-sensitive
  $color = 'red';
  echo 'Color: ' . $color . '<br>';

  // This will be undefined (different variable name)
  echo 'Color (wrong case): ' .
      ($COLOR ?? "undefined variable: $COLOR") .
      '<br>';
  ?>
</body>
</html>
