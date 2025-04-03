<?php

header('Content-Type: application/json; charset=utf-8');
$user = urlencode("webap2");
$pass = urlencode("ltesch");
echo file_get_contents("https://webap.lgk.lu/joke/login.php?username=$user&password=$pass");

?>