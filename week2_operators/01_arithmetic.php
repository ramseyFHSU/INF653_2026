<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arithmetic</title>
</head>
<body>
  
<?php
// 01_arithmetic.php
// Demonstrates arithmetic operators in PHP.

$a = 10;
$b = 5;

echo "<pre>";
echo "Number 1: $a\n";
echo "Number 2: $b\n\n";

echo "Addition (+): " . ($a + $b) . "\n";
echo "Subtraction (-): " . ($a - $b) . "\n";
echo "Multiplication (*): " . ($a * $b) . "\n";
echo "Division (/): " . ($a / $b) . "\n";
echo "Modulus (%): " . ($a % $b) . "\n";
echo "Exponentiation (**): " . ($a ** $b) . "\n";

echo "</pre>";
?>
</body>
</html>
