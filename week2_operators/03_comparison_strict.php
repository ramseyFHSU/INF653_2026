<?php
// 03_comparison_strict.php
// Demonstrates == vs ===

$a = 5;      // integer
$b = "5";    // string

echo "<pre>";
echo "a = 5 (int)\n";
echo "b = \"5\" (string)\n\n";

echo "a == b  => " . (($a == $b) ? "true" : "false") . "  (loose comparison)\n";
echo "a === b => " . (($a === $b) ? "true" : "false") . " (strict comparison)\n";

echo "</pre>";
