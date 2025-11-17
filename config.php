<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "picdb";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection -> connect_error) {
    die("Failed connection!!".$connection->connect_error);
}


?>