<?php
require("db.php"); 

// 1. Process data from GET
$track = $_GET["track"];
$artist = $_GET["artist"];
$review = $_GET["review"];
$link = $_GET["link"];
$image = $_GET["image"];

// 2. Insert data into database
$sql = "insert into zt86_replay (track, artist, review, link, image) "
        . "           values ('$track', '$artist', '$review', '$link', '$image') "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain");
header("Access-Control-Allow-Origin: *"); // Allow any origin
echo $n; 