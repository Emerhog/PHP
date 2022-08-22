<?php
require('../../functions/mysql.php');
header('Content-Type: application/json');

$request = getMySql("SELECT rest_status FROM rest_history");

$request = json_encode($request);

print_r($request);