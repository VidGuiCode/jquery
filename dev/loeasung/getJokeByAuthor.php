<?php
  header("Content-Type: application/json; charset=UTF-8");
  if (!isset($_GET["key"]) || !isset($_GET["author"])) {
    echo json_encode(["error" => "Parameter key oder author nicht vorhanden"]);
  } else {
    $key=urlencode($_GET["key"]);
    $author=urlencode($_GET["author"]);
    echo file_get_contents("http://webap.lgk.lu/joke/getJokeByAuthor.php?key=$key&author=$author");
  }
 ?>
