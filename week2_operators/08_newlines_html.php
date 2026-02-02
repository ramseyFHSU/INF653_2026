<?php
// 08_newlines_html.php
// Shows why \n is not visible in HTML, and common fixes.

$text = "Line 1\nLine 2\nLine 3";

echo "<h3>Raw echo (browser ignores \n):</h3>";
echo $text;

echo "<h3>Using &lt;pre&gt; (preserves \n):</h3>";
echo "<pre>$text</pre>";

echo "<h3>Using nl2br() (converts \n to &lt;br&gt;):</h3>";
echo nl2br($text);
