<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops in PHP</title>
</head>
<body>

<h1>Loops in PHP</h1>

<?php
// While loop
echo "<h2>1) While Loop</h2>";
$counter = 0;
while ($counter < 5) {
    echo "Counter: $counter <br>";
    $counter++;
}

echo "<hr>";

//For Loop
echo "<h2>2) For Loop (Countdown)</h2>";
$message = null; 
for ($counter = 10; $counter > 0; $counter--) {
    $message .= "Number: $counter <br>";
}
echo $message;

echo "<hr>";

// While loop with an array 
echo "<h2>3) While Loop with Array</h2>";
$names = array("Sam", "John", "Jane", "Paul");
$index = 0;

while ($index < count($names)) {
    echo $names[$index] . "<br>";
    $index++;
}

echo "<hr>";

// For loop with an array 
echo "<h2>4) For Loop with Array</h2>";
for ($i = 0; $i < count($names); $i++) {
    echo $names[$i] . "<br>";
}

echo "<hr>";

// ForEach loop with an array 
echo "<h2>5) Foreach Loop (Best for Arrays)</h2>";
foreach ($names as $name) {
    echo $name . "<br>";
}
?>

</body>
</html>
