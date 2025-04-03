<?php
  header("Content-Type: application/json; charset=UTF-8");
  if (!isset($_GET["key"])) {
    echo json_encode(["error" => "Parameter key nicht vorhanden"]);
  } else {
    echo file_get_contents("http://webap.lgk.lu/joke/getAuthors.php?key=".urlencode($_GET["key"]));
  }
 ?>
