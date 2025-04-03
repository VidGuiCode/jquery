<?php
$_GET["apikey"];
header('Content-Type: application/json; charset=utf-8');
echo file_get_contents("https://webap.lgk.lu/weather/getWeather.php?key={$_GET["apikey"]}");
?>