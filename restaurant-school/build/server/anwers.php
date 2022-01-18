<?php
   header("Access-Control-Allow-Origin: *");
   $arr = $_POST = json_decode(file_get_contents("php://input"), true);

   $mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");

    foreach($arr as $item) {
        $mysql->query("INSERT INTO `answer`(`user`, `courses`, `question`, `answer`, `answerCorrect`) VALUES ('$item[user]', '$item[courses]', '$item[question]', '$item[answer]','$item[answerCorrect]')");
    }



    
?>
