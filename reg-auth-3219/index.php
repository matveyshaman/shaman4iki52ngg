<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Forum login</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<?php if (isset($_GET['result']) && $_GET['result']==0): ?>
		<p>Регистрация прошла успешно! Теперь вы сможете войти.</p>
	<? endif; ?>
	<?php if (isset($_GET['result']) && $_GET['result']==1): ?>
		<p>Неправильный логин или пароль.</p>
	<? endif; ?>
	<form action="./php/authorization.php" method='POST'>
		<input type="text" placeholder="login" name='login'>
		<input type="password" placeholder="password" name='password'>
		<input type="submit" value="submit" name='auth'>
	</form>
	<a href="registrationPage.php">no account? registration</a>
</body>
</html>