<?php
if (isset($_POST['auth'])
&& isset($_POST['login'])
&& isset($_POST['password'])
&& !empty($_POST['login'])
&& !empty($_POST['password'])) {
    require_once '../db/connection.php';

    $checkUser=$conn->prepare("SELECT * FROM users WHERE login=? and password=?");
	$checkUser->execute(array($_POST['login'], $_POST['password']));
	$checkUser=$checkUser->fetch();

    if ($checkUser){
        session_start();
        $_SESSION['userId']=$checkUser['id'];
        $_SESSION['userLogin']=$checkUser['login'];
        $status = '../userPage.php';
    } else {
        $status = '../index.php?result=1';
    }
}

header('location:'.$status);
?>