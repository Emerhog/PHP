<?php
require('../../functions/mysql.php');
header('Content-Type: application/json');

$request = getMySql("SELECT departament_id FROM employee");

$request = json_encode($request);

print_r($request);