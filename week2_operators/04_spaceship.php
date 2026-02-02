<?php
// 04_spaceship.php
// Demonstrates the spaceship operator <=> and a sorting use-case.

echo "<pre>";
echo "1 <=> 1  = " . (1 <=> 1) . "\n";
echo "1 <=> 2  = " . (1 <=> 2) . "\n";
echo "2 <=> 1  = " . (2 <=> 1) . "\n\n";

// Custom sort: ascending
$nums = [9, 2, 10, 3];
usort($nums, fn($left, $right) => $left <=> $right);

echo "Sorted numbers: " . implode(", ", $nums) . "\n";
echo "</pre>";
