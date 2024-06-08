<?php
header("Access-Control-Allow-Origin: *"); // Allow any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers

require("db.php"); 

// 1. Query database for records in "products" 
$query = "select * from zt86_medicine"; 
// echo $query; 
$products = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json");
echo json_encode($products->fetchAll(PDO::FETCH_ASSOC)); 