<?php
// 06_logical_precedence.php
// Shows why &&/|| are preferred over and/or inside expressions.

echo "<pre>";
// Because 'and' has LOWER precedence than '='
// This assigns true to $result1, then evaluates 'and false' separately.
$result1 = true and false;

// Because '&&' has HIGHER precedence than '='
// This evaluates (true && false) first, then assigns false to $result2.
$result2 = true && false;

echo "result1 (true and false) with '=': " . ($result1 ? "true" : "false") . "\n";
echo "result2 (true && false) with '=': " . ($result2 ? "true" : "false") . "\n\n";

// XOR: true only when exactly one side is true
$a = true;
$b = false;
echo "true xor false => " . (($a xor $b) ? "true" : "false") . "\n";
echo "true xor true  => " . ((true xor true) ? "true" : "false") . "\n";

echo "</pre>";
