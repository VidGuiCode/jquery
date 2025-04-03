<?php

if(isset($_GET['untis'])) {

  $untis = $_GET['untis'];

  $arrowWithRowsAsString = file("./../teacher.csv");

  $prof = array();

  $found = false;

  for ($i=1; $i<count($arrowWithRowsAsString); $i++) {
    $row = explode(",", $arrowWithRowsAsString[$i]);
    if (strtolower($row[0]) === strtolower($untis)) {
      $prof['lastName'] = $row[1];
      $prof['firstName'] = $row[2];
      $prof['email'] = substr($row[3], 0, -2);
      $found = true;
    }
  }

  if ($found) {
    header('Content-Type: application/json');
    echo json_encode($prof, JSON_UNESCAPED_UNICODE);
  }	else {
    header('Content-Type: application/json');
    echo json_encode(-2);
  }

} else {
	header('Content-Type: application/json');
  echo json_encode(-1);
}

?>
