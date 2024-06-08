<?php
header("Access-Control-Allow-Origin: *"); // Allow any origin
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
// header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers

require("db.php"); 

// 1. Process data from GET
$name = $_GET["name"];
$dosage = $_GET["dosage"];
$date = $_GET["date"];

// 2. Insert data into database
$sql = "insert into zt86_medicine (question, answer) "
        . "           values ('$name', '$dosage', '$date') "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain");
header("Access-Control-Allow-Origin: *"); // Allow any origin
echo $n; 