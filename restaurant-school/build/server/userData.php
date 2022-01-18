<?php
header("Access-Control-Allow-Origin: *");

$mysql = new mysqli("restaurant-school.ru", "j0599972", "5ccD25fArm", "j0599972");


$result = $mysql->query("SELECT `id`, `name`, `surname`, `phone`, `restaurant`, `email`, `balBarBook`, `balLemonads`, `balteahotdrinks` FROM `users` WHERE 1");
$user = mysqli_fetch_all($result, MYSQLI_ASSOC);

/* echo var_dump($user); */
echo json_encode($user);

?>