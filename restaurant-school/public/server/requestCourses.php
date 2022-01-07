<?php
   header("Access-Control-Allow-Origin: *");

   $mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");


     $result = $mysql->query("SELECT * FROM `courses` WHERE 1");
     $courses = mysqli_fetch_all($result, MYSQLI_ASSOC);;

   
     echo json_encode($courses);  
?>
