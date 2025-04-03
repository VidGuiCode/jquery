<?php
header('Content-Type: application/json; charset=utf-8');
if (!isset($_GET["key"])) {
    echo json_encode(["error" => "Parameter key nicht vorhanden"]);
    exit;
}
$key = urlencode($_GET["key"]);
echo file_get_contents("https://webap.lgk.lu/joke/getAuthors.php?key=$key");
?>