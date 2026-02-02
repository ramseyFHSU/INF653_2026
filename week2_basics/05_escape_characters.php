<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>PHP Example - Escape Characters</title>
</head>
<body>
  <h2>Escape Characters</h2>

  <?php
  echo "He said \"PHP is great!\"<br>";
  echo 'It\'s a beautiful day!<br>';

  echo '<hr>';

  // \n doesn't show as a line break in browser output
  echo "Line 1\nLine 2<br>";

  echo '<hr>';

  // Convert \n into <br>
  echo nl2br("Line 1\nLine 2") . '<br>';

  echo '<hr>';

  // Tabs are visible inside <pre>
  echo "<pre>\tTabbed text</pre>";
  ?>
</body>
</html>
