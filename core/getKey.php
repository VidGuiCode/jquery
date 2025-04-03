<?php
header('Content-Type: application/json; charset=utf-8');
$user = "webap2"; 
$pass = "ltesch";
echo file_get_contents("https://webap.lgk.lu/weather/login.php?username=$user&password=$pass");
?>