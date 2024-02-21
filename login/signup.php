<!DOCTYPE html>
<html>
<head>
	<title>SIGN UP</title>
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
          <form action="signup-check.php" method="post">
     	<div class="login-logo">
			<img src="./WDTProject/assets/images/logo.png" alt="">
		</div>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>

          <?php if (isset($_GET['name'])) { ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"
                      value="<?php echo $_GET['name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="name" 
                      placeholder="Name"><br>
          <?php }?>

          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"
                      value="<?php echo $_GET['uname']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="uname" 
                      placeholder="User Name"><br>
          <?php }?>


     	<input type="password" 
                 name="password" 
                 placeholder="Password"><br>

          <input type="password" 
                 name="re_password" 
                 placeholder="Re_Password"><br>

     	<button type="submit">Sign Up</button>
          <a href="index.php" class="ca">Already have an account?</a>
     </form>
		</div>
	</div>
</body>
</html>



