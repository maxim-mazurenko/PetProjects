<?php
   header("Access-Control-Allow-Origin: *");
   $_POST = json_decode(file_get_contents("php://input"), true);


    $email = filter_var(trim($_POST['email']),
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']),
    FILTER_SANITIZE_STRING);

    $passwordmd5 = md5($password."asdfsa56969");

    $mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");


    $result = $mysql->query("SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$passwordmd5'");
    $user = $result->fetch_assoc();



          
          $mysql->close();

    echo json_encode($user);
    
    
?>
