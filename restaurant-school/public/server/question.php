<?php
   header("Access-Control-Allow-Origin: *");

   $mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");


     $result = $mysql->query("SELECT * FROM `question` WHERE 1");
     $itemquestion = mysqli_fetch_all($result, MYSQLI_ASSOC);;

   
     echo json_encode($itemquestion);  
?>
