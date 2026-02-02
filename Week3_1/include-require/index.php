<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Include and Require</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>

<?php
// Use require_once when the site cannot run without the file
require_once "view/alt_header.php";
?>

<main>
    <h1>This is Main Content</h1>

    <p>Try:</p>
    <p>
        <a href="index.php">Visitor View</a> |
        <a href="index.php?firstname=John">Signed-in View</a>
    </p>
</main>

<?php
include_once "view/footer.php";
?>

</body>
</html>
