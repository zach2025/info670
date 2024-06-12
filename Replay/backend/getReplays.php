<?php

require("db.php"); 

// 1. Query database for records in "products" 
$query = "select * from zt86_replay"; 
// echo $query; 
$products = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allow any origin
echo json_encode($products->fetchAll(PDO::FETCH_ASSOC)); 