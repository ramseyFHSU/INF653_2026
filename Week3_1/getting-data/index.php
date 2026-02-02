<?php
//Filter input + Escape output
$first = filter_input(INPUT_GET, 'first', FILTER_SANITIZE_SPECIAL_CHARS);
$last  = filter_input(INPUT_GET, 'last', FILTER_SANITIZE_SPECIAL_CHARS);

$first_post = filter_input(INPUT_POST, 'first', FILTER_SANITIZE_SPECIAL_CHARS);
$last_post  = filter_input(INPUT_POST, 'last', FILTER_SANITIZE_SPECIAL_CHARS);

// Decide which method was used
$method = $_SERVER['REQUEST_METHOD'];
$final_first = '';
$final_last = '';
$message = '';

if ($method === 'GET' && (isset($_GET['first']) || isset($_GET['last']))) {
    $final_first = $first ?? '';
    $final_last = $last ?? '';
} elseif ($method === 'POST' && (isset($_POST['first']) || isset($_POST['last']))) {
    $final_first = $first_post ?? '';
    $final_last = $last_post ?? '';
}

// Validation
if ($method === 'GET' || $method === 'POST') {
    if ((isset($_GET['first']) || isset($_POST['first'])) && (empty($final_first) || empty($final_last))) {
        $message = "Hello, you are missing some data.";
    } elseif (!empty($final_first) && !empty($final_last)) {
        $message = "Hello $final_first $final_last";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting Data</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="container">

<h1>Web Processor</h1>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="GET">
    <label for="first">First Name</label>
    <input type="text" id="first" name="first" autocomplete="off">

    <label for="last">Last Name</label>
    <input type="text" id="last" name="last" autocomplete="off">

    <button type="submit">Submit (GET)</button>
    <button type="reset">Reset</button>
</form>

<hr>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <label for="first2">First Name</label>
    <input type="text" id="first2" name="first" autocomplete="off">

    <label for="last2">Last Name</label>
    <input type="text" id="last2" name="last" autocomplete="off">

    <button type="submit">Submit (POST)</button>
    <button type="reset">Reset</button>
</form>

<div class="output">
    <h3>Result</h3>
    <?php
    if (!empty($message)) {
        echo htmlspecialchars($message);
    } else {
        echo "No submission yet.";
    }
    ?>
</div>

<div class="output">
    <h3>Debug (Arrays)</h3>
    <strong>$_GET</strong>
    <pre><?php print_r($_GET); ?></pre>

    <strong>$_POST</strong>
    <pre><?php print_r($_POST); ?></pre>
</div>

</div>
</body>
</html>
