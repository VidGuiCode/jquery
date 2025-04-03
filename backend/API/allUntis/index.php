<?php

  $arrowWithRowsAsString = file("./../teacher.csv");

  $untisCodes = array();

  for ($i=1; $i<count($arrowWithRowsAsString); $i++) {
    $untisCodes[] = explode(",", $arrowWithRowsAsString[$i], 2)[0];
  }

  header('Content-Type: application/json');
  echo json_encode($untisCodes);

?>
