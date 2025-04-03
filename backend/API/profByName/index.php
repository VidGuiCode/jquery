<?php

if(isset($_GET['name'])) {

  $name = $_GET['name'];

  $arrowWithRowsAsString = file("./../teacher.csv");

  $profs = array();

  $found = false;

  for ($i=1; $i<count($arrowWithRowsAsString); $i++) {
    $row = explode(",", $arrowWithRowsAsString[$i]);
    if (strpos(strtolower($row[1]), strtolower($name)) !== false) {
      $profs[] = $row[1] . ' ' . $row[2];
      $found = true;
    }
  }

  if ($found) {
    header('Content-Type: application/json');
    echo json_encode($profs, JSON_UNESCAPED_UNICODE);
  }	else {
   header('Content-Type: application/json');
   echo json_encode(-2);
 }

} else {
	header('Content-Type: application/json');
  echo json_encode(-1);
}

?>
