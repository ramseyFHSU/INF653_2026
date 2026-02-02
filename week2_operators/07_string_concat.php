<?php
// 07_string_concat.php
// Demonstrates string concatenation and concatenation assignment.

$firstName = "John";
$greeting = "Hello";

$message = $greeting . " " . $firstName; // concatenation
$message .= "! How are you?";            // concatenation assignment

echo "<pre>";
echo $message . "\n";
echo "</pre>";
