<?php
// 05_increment_decrement.php
// Demonstrates pre vs post increment/decrement.

$x = 10;

echo "<pre>";
echo "Start x = $x\n\n";

echo "Post-increment (x++): returns " . ($x++) . ", then x becomes $x\n";
echo "Pre-increment (++x): returns " . (++$x) . ", x is now $x\n\n";

echo "Post-decrement (x--): returns " . ($x--) . ", then x becomes $x\n";
echo "Pre-decrement (--x): returns " . (--$x) . ", x is now $x\n";

echo "</pre>";
