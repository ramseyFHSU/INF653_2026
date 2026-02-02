<?php
// 09_conditionals.php
// Demonstrates if / elseif / else and ternary operator.

$score = 85;

echo "<pre>";

if ($score >= 90) {
    echo "Grade: A\n";
} elseif ($score >= 80) {
    echo "Grade: B\n";
} elseif ($score >= 70) {
    echo "Grade: C\n";
} elseif ($score >= 60) {
    echo "Grade: D\n";
} else {
    echo "Grade: F\n";
}

// Ternary example (simple if/else)
$age = 18;
$msg = ($age >= 18) ? "Eligible to vote" : "Not eligible to vote";
echo "Age $age: $msg\n";

echo "</pre>";
