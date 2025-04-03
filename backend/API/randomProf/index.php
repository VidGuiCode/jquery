<?php

  $arrowWithRowsAsString = file("./../teacher.csv");

  $prof = array();

  $randomIndex = mt_rand(1, count($arrowWithRowsAsString)-1);
  $row = explode(",", $arrowWithRowsAsString[$randomIndex]);
  $prof['lastName'] = $row[1];
  $prof['firstName'] = $row[2];
  $prof['email'] = substr($row[3], 0, -2);

  header('Content-Type: application/json');
  echo json_encode($prof, JSON_UNESCAPED_UNICODE);

?>
