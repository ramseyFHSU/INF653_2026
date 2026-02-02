<?php
// 02_assignment.php
// Demonstrates assignment and compound assignment operators.

$x = 10;

echo "<pre>";
echo "Start: x = $x\n";

$x += 5;   // x = x + 5
echo "After x += 5: x = $x\n";

$x -= 3;   // x = x - 3
echo "After x -= 3: x = $x\n";

$x *= 2;   // x = x * 2
echo "After x *= 2: x = $x\n";

$x /= 4;   // x = x / 4
echo "After x /= 4: x = $x\n";

$x %= 3;   // x = x % 3
echo "After x %= 3: x = $x\n";

echo "</pre>";
