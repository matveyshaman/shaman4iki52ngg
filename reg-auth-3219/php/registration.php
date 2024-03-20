<?php
	if (isset($_POST['register'])
	&& isset($_POST['login'])
	&& isset($_POST['password'])
	&& isset($_POST['email'])
	&& !empty($_POST['login'])
	&& !empty($_POST['password'])
	&& !empty($_POST['email'])){

	require_once '../db/connection.php';

	$checkUser=$conn->prepare("select login, email from users where login=? or email=?");
	$checkUser->execute(array($_POST['login'], $_POST['email']));
	$checkUser=$checkUser->fetch();

	if ($checkUser){
		if ($_POST['login']==$checkUser['login'])
			$status = '../registrationPage.php?result=2';
		if ($_POST['email']==$checkUser['email'])
			$status = '../registrationPage.php?result=3';
		if ($_POST['email']==$checkUser['email'] && $_POST['login']==$checkUser['login'])
			$status = '../registrationPage.php?result=4';
	}

	else {
		if($_POST['password']==$_POST['repeatPassword']){
			$conn->prepare('insert into users (login, password, email) value (?,?,?)') -> execute(array($_POST['login'], $_POST['password'], $_POST['email']));
				$status = "../index.php?result=0";
			}
		else
			$status = "../registrationPage.php?result=1";
	}
}

header('location:'.$status);
?>