<?php
session_start();
if (!isset($_SESSION['userId'])) {
    header('location:./index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum | User page</title>
</head>
<body>
    <h1>welcome, <?=$_SESSION['userLogin']?>!</h1>
    <a href="./php/logout.php">Log out</a>
</body>
</html>