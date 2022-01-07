<?php
   header("Access-Control-Allow-Origin: *");

   $mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");


     $result = $mysql->query("SELECT * FROM `itemcourses` WHERE 1");
     $itemcourses = mysqli_fetch_all($result, MYSQLI_ASSOC);;

   
     echo json_encode($itemcourses);  
?>
