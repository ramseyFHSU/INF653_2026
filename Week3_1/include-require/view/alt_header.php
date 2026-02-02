<header>
<?php
$name = filter_input(INPUT_GET, 'firstname', FILTER_SANITIZE_SPECIAL_CHARS);

if (!empty($name)) {
    include __DIR__ . "/greetings/user_greeting.php";
} else {
    include __DIR__ . "/greetings/visitor_greeting.php";
}
?>
</header>
