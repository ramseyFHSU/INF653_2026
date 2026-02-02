<?php
$name = filter_input(INPUT_GET, 'firstname', FILTER_SANITIZE_SPECIAL_CHARS);
?>
<h2><?php echo "Hello " . htmlspecialchars($name); ?></h2>

<nav>
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
</nav>
