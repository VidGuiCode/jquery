<?php
  header("Content-Type: application/json; charset=UTF-8");
  $username=urlencode("webap2");
  $password=urlencode("ltesch");
  echo file_get_contents("http://webap.lgk.lu/joke/login.php?username=$username&password=$password");
 ?>
