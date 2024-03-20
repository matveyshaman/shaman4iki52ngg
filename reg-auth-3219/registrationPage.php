<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Forum registration</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<form action="./php/registration.php" method='POST'>
		<input type="text" placeholder="login" name='login'>
		<input type="email" placeholder="email" name='email'>
		<input type="password" placeholder="password" name='password'>
		<input type="password" placeholder="repeat password" name='repeatPassword'>
		<input type="submit" value="registration" name='register'>
	</form>
	<a href="index.php">Already have an account? login</a>
</body>

</html>