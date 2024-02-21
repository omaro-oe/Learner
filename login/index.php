<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="./login.css">
</head>
<body>
	<div class="df">
		<div class="left-side">
		<div class="contianer">
                <p class="sub-title">Welcome to</p>
                <h1 class="title">Learner</h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi tempore quos?</p>
            </div>
		</div>
		<div class="right-side">
			<form action="login.php" method="post">
     	<div class="login-logo">
			<img src="./WDTProject/assets/images/logo.png" alt="">
		</div>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	
     	<input type="text" name="uname" placeholder="User Name"><br>

     	
     	<input type="password" name="password" placeholder="Password"><br>

     	<button type="submit">Login</button>
          <a href="signup.php" class="ca">Create an account</a>
     </form>
		</div>
	</div>
</body>
</html>




