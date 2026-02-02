<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - Single vs Double Quotes</title>
</head>
<body>
  <h2>Single Quotes vs Double Quotes</h2>

  <?php
    $txt = "World";

    echo 'Hello $txt<br>';  // does NOT expand variable
    echo "Hello $txt<br>";  // expands variable
  ?>
</body>
</html>
