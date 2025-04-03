<?php
  header("Content-Type: application/json; charset=UTF-8");
  if (!isset($_GET["untis"])) {
    echo json_encode(["error" => "Parameter untis nicht vorhanden"]);
  } else {
    echo file_get_contents("http://webap.lgk.lu/webap2api/0.1/profByUntis/?untis=".$_GET["untis"]);
  }
 ?>
